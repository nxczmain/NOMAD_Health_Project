param(
    [Parameter(Mandatory)][string]$Repository,
    [Parameter(Mandatory)][string]$UiDirectory
)

$ErrorActionPreference = 'Stop'
$markdownRoot = (Resolve-Path -LiteralPath (Join-Path $Repository 'Investigation (.md)')).Path
$pdfRoot = Join-Path $Repository 'investigation'
$pageRoot = Join-Path $Repository 'app\knowledge\pages'
$knowledge = Join-Path $UiDirectory 'knowledge'
$encoding = New-Object Text.UTF8Encoding($false)
foreach ($folder in 'files','originals','pages') {
    New-Item -ItemType Directory -Path (Join-Path $knowledge $folder) -Force | Out-Null
}

$entries = @(Get-ChildItem -LiteralPath $markdownRoot -Recurse -File -Filter '*.md' | Sort-Object FullName | ForEach-Object {
    if ($_.Name -ieq 'README.md') { return }
    $relative = $_.FullName.Substring($markdownRoot.Length + 1).Replace('\','/')
    $hash = (Get-FileHash -LiteralPath $_.FullName -Algorithm SHA256).Hash.ToLowerInvariant()
    Copy-Item -LiteralPath $_.FullName -Destination (Join-Path $knowledge "files\$hash.md") -Force
    $markdown = [IO.File]::ReadAllText($_.FullName)
    $original = [regex]::Match($markdown, '(?m)^Original PDF: knowledge/originals/([a-f0-9]{64})\.pdf\s*$')
    if ($original.Success) {
        $pdf = Join-Path $pdfRoot ([IO.Path]::ChangeExtension($relative, '.pdf'))
        $pdfHash = $original.Groups[1].Value
        if ((Get-FileHash -LiteralPath $pdf -Algorithm SHA256).Hash.ToLowerInvariant() -ne $pdfHash) {
            throw "Original PDF does not match the reference in $relative"
        }
        Copy-Item -LiteralPath $pdf -Destination (Join-Path $knowledge "originals\$pdfHash.pdf") -Force
    }
    foreach ($page in [regex]::Matches($markdown, '\]\(knowledge/pages/([\w-]+\.png)\)')) {
        $filename = $page.Groups[1].Value
        Copy-Item -LiteralPath (Join-Path $pageRoot $filename) -Destination (Join-Path $knowledge "pages\$filename") -Force
    }
    @{ path=$relative; hash=$hash }
})

$signature = ($entries | ForEach-Object { $_.hash + ' ' + $_.path }) -join "`n"
$sha = [Security.Cryptography.SHA256]::Create()
try {
    $revision = [BitConverter]::ToString($sha.ComputeHash($encoding.GetBytes($signature))).Replace('-','').ToLowerInvariant()
} finally { $sha.Dispose() }
[IO.File]::WriteAllText((Join-Path $knowledge 'index.json'), (@{revision=$revision; files=$entries} | ConvertTo-Json -Depth 4), $encoding)
Write-Host "Bundled $($entries.Count) Markdown references."
