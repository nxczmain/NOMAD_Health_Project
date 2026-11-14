[CmdletBinding()]
param(
    [string]$InstallRoot = 'E:\NETIN',
    [string]$MarkdownFolder = 'E:\Markdown - MarkItDown-20261114T212310Z-1-001\Markdown - MarkItDown',
    [string]$AppFolder
)

$ErrorActionPreference = 'Stop'
if (!$AppFolder) { $AppFolder = Join-Path $PSScriptRoot 'App' }

function Get-Sha256([string]$Path) {
    $hash = [Security.Cryptography.SHA256]::Create()
    try {
        $stream = [IO.File]::OpenRead($Path)
        try {
            return ([BitConverter]::ToString($hash.ComputeHash($stream))).Replace('-','').ToLowerInvariant()
        } finally { $stream.Dispose() }
    } finally { $hash.Dispose() }
}

$install = Get-Item -LiteralPath $InstallRoot
$source = Get-Item -LiteralPath $MarkdownFolder
$app = Get-Item -LiteralPath $AppFolder
if (!$install.PSIsContainer -or !$source.PSIsContainer -or !$app.PSIsContainer) {
    throw 'Indica las carpetas de NETIN, Markdown y la compilacion.'
}
if (!(Test-Path -LiteralPath (Join-Path $install.FullName 'NETIN-Portable.flag') -PathType Leaf)) {
    throw 'La carpeta de destino debe ser una instalacion portable de NETIN.'
}
$appFiles = @('NETIN.exe', 'Microsoft.Web.WebView2.Core.dll', 'Microsoft.Web.WebView2.WinForms.dll', 'WebView2Loader.dll')
$interfaceFiles = @('index.html', 'style.css', 'assistant.js', 'check-in.js', 'crew-camera.js', 'crew-profiles.js', 'engine.js', 'motor.js', 'workspace.js', 'app.js', 'assets\archivo.woff2', 'assets\OFL-Archivo.txt')
foreach ($file in $appFiles + @($interfaceFiles | ForEach-Object { "interface\$_" })) {
    if (!(Test-Path -LiteralPath (Join-Path $app.FullName $file) -PathType Leaf)) { throw "Falta $file en la compilacion." }
}
if (Get-Process -Name NETIN -ErrorAction SilentlyContinue) { throw 'Cierra la ventana de NETIN antes de actualizar.' }
$markdown = @(Get-ChildItem -LiteralPath $source.FullName -Recurse -File | Where-Object { $_.Extension -in '.md','.markdown' } | Sort-Object FullName)
if (!$markdown.Count) { throw 'La carpeta indicada no contiene Markdown.' }

$ui = Join-Path $install.FullName 'interface'
$knowledge = Join-Path $ui 'knowledge'
$files = Join-Path $knowledge 'files'
foreach ($folder in @($ui,$knowledge,$files,(Join-Path $ui 'assets'))) {
    if (Test-Path -LiteralPath $folder) {
        $item = Get-Item -LiteralPath $folder
        if ($item.Attributes -band [IO.FileAttributes]::ReparsePoint) { throw "Redireccion inesperada: $folder" }
    } else { New-Item -ItemType Directory -Path $folder | Out-Null }
}

$utf8 = New-Object Text.UTF8Encoding($false)
$prefix = $source.FullName.TrimEnd('\') + '\'
$entries = foreach ($file in $markdown) {
    $relative = $file.FullName.Substring($prefix.Length).Replace('\','/')
    $hash = Get-Sha256 $file.FullName
    $destination = Join-Path $files "$hash.md"
    if (!(Test-Path -LiteralPath $destination -PathType Leaf) -or
        (Get-Sha256 $destination) -ne $hash) {
        Copy-Item -LiteralPath $file.FullName -Destination $destination -Force
    }
    if ((Get-Sha256 $destination) -ne $hash) {
        throw "El archivo cambio durante la copia: $relative"
    }
    @{path=$relative; hash=$hash}
}
$sha = [Security.Cryptography.SHA256]::Create()
try {
    $signature = ($entries | ForEach-Object { $_.hash + ' ' + $_.path }) -join "`n"
    $revision = ([BitConverter]::ToString($sha.ComputeHash($utf8.GetBytes($signature)))).Replace('-','').ToLowerInvariant()
} finally { $sha.Dispose() }
$manifest = Join-Path $knowledge 'index.json'
$nextIndex = Join-Path $knowledge ("index-" + [guid]::NewGuid().ToString('N') + ".tmp")
[IO.File]::WriteAllText($nextIndex,(@{revision=$revision; files=@($entries)} | ConvertTo-Json -Depth 4),$utf8)
if (Test-Path -LiteralPath $manifest -PathType Leaf) {
    # File.Replace is limited to NTFS. A rename works on portable exFAT drives.
    $oldIndex = Join-Path $knowledge ("index-" + [guid]::NewGuid().ToString('N') + ".bak")
    Move-Item -LiteralPath $manifest -Destination $oldIndex
    try { Move-Item -LiteralPath $nextIndex -Destination $manifest }
    catch { Move-Item -LiteralPath $oldIndex -Destination $manifest; throw }
    Remove-Item -LiteralPath $oldIndex
} else { Move-Item -LiteralPath $nextIndex -Destination $manifest }
foreach ($file in $interfaceFiles) { Copy-Item -LiteralPath (Join-Path $app.FullName "interface\$file") -Destination (Join-Path $ui $file) -Force }
foreach ($file in $appFiles) { Copy-Item -LiteralPath (Join-Path $app.FullName $file) -Destination $install.FullName -Force }
foreach ($file in @('Start-NETIN.ps1','Abrir-NETIN.cmd')) {
    Copy-Item -LiteralPath (Join-Path $PSScriptRoot $file) -Destination $install.FullName -Force
}

$legacy = Join-Path $ui 'mission-sources'
if (Test-Path -LiteralPath $legacy -PathType Container) {
    $resolved = Get-Item -LiteralPath $legacy
    $expected = [IO.Path]::GetFullPath((Join-Path $install.FullName 'interface\mission-sources'))
    if ($resolved.FullName -ne $expected -or ($resolved.Attributes -band [IO.FileAttributes]::ReparsePoint) -or
        (Get-ChildItem -LiteralPath $resolved.FullName -Recurse -Force -Attributes ReparsePoint | Select-Object -First 1)) {
        Write-Warning 'La carpeta antigua tiene redirecciones. NETIN ya no la usa.'
    } else {
        Remove-Item -LiteralPath $resolved.FullName -Recurse -Force
    }
}
$used = @{}
foreach ($entry in $entries) { $used[$entry.hash + '.md'] = $true }
Get-ChildItem -LiteralPath $files -File -Filter '*.md' | Where-Object {
    $_.Name -match '^[0-9a-f]{64}\.md$' -and !$used.ContainsKey($_.Name)
} | ForEach-Object { Remove-Item -LiteralPath $_.FullName }
Write-Host ("NETIN actualizado. Biblioteca: {0} documentos. Abre {1}" -f $markdown.Count,(Join-Path $install.FullName 'Abrir-NETIN.cmd'))
