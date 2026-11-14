[CmdletBinding(DefaultParameterSetName = 'Package')]
param(
    [Parameter(Mandatory, ParameterSetName = 'Package')][string]$WebView2Package,
    [Parameter(Mandatory, ParameterSetName = 'Sdk')][string]$WebView2Files,
    [Parameter(Mandatory)][string]$OutputDirectory
)

$ErrorActionPreference = 'Stop'
$project = Split-Path -Parent $PSScriptRoot
$compiler = Join-Path $env:windir 'Microsoft.NET\Framework64\v4.0.30319\csc.exe'
$output = $ExecutionContext.SessionState.Path.GetUnresolvedProviderPathFromPSPath($OutputDirectory)
$ui = Join-Path $output 'interface'
New-Item -ItemType Directory -Path $output -Force | Out-Null

if ($PSCmdlet.ParameterSetName -eq 'Package') {
    Add-Type -AssemblyName System.IO.Compression.FileSystem
    $sdk = [IO.Compression.ZipFile]::OpenRead((Resolve-Path -LiteralPath $WebView2Package).Path)
    try {
        $assets = @(
            'lib/net462/Microsoft.Web.WebView2.Core.dll'
            'lib/net462/Microsoft.Web.WebView2.WinForms.dll'
            'runtimes/win-x64/native/WebView2Loader.dll'
        )
        foreach ($asset in $assets) {
            $entry = $sdk.GetEntry($asset)
            if (!$entry) { throw "The WebView2 package is missing $asset." }
            [IO.Compression.ZipFileExtensions]::ExtractToFile($entry, (Join-Path $output $entry.Name), $true)
        }
        $license = $sdk.Entries | Where-Object { $_.FullName -match '^(LICENSE|LICENSE\.txt)$' } | Select-Object -First 1
        if ($license) {
            [IO.Compression.ZipFileExtensions]::ExtractToFile($license, (Join-Path $output 'WebView2-LICENSE.txt'), $true)
        }
    } finally {
        $sdk.Dispose()
    }
} else {
    foreach ($file in @('Microsoft.Web.WebView2.Core.dll', 'Microsoft.Web.WebView2.WinForms.dll', 'WebView2Loader.dll')) {
        Copy-Item -LiteralPath (Join-Path $WebView2Files $file) -Destination $output
    }
}

New-Item -ItemType Directory -Path $ui -Force | Out-Null
foreach ($file in @('index.html', 'style.css', 'assistant.js', 'check-in.js', 'crew-camera.js', 'crew-profiles.js', 'engine.js', 'motor.js', 'workspace.js', 'app.js')) {
    Copy-Item -LiteralPath (Join-Path $project $file) -Destination $ui
}
$fonts = Join-Path $ui 'assets'
New-Item -ItemType Directory -Path $fonts -Force | Out-Null
foreach ($file in @('archivo.woff2', 'OFL-Archivo.txt')) {
    Copy-Item -LiteralPath (Join-Path $project "assets\$file") -Destination $fonts
}
Copy-Item -LiteralPath (Join-Path $PSScriptRoot 'README.txt') -Destination $output

$exe = Join-Path $output 'NETIN.exe'
$framework = Split-Path -Parent $compiler
$speechAssembly = Join-Path $env:windir 'Microsoft.NET\assembly\GAC_MSIL\System.Speech\v4.0_4.0.0.0__31bf3856ad364e35\System.Speech.dll'
$compilerArgs = @(
    '/nologo'
    '/target:winexe'
    '/platform:x64'
    '/optimize+'
    '/codepage:65001'
    "/out:$exe"
    "/win32manifest:$(Join-Path $PSScriptRoot 'desktop.manifest')"
    "/win32icon:$(Join-Path $PSScriptRoot 'AstraMed.ico')"
    "/reference:$(Join-Path $framework 'System.Windows.Forms.dll')"
    "/reference:$(Join-Path $framework 'System.Drawing.dll')"
    "/reference:$(Join-Path $framework 'System.Net.Http.dll')"
    "/reference:$speechAssembly"
    "/reference:$(Join-Path $framework 'System.Web.Extensions.dll')"
    "/reference:$(Join-Path $output 'Microsoft.Web.WebView2.Core.dll')"
    "/reference:$(Join-Path $output 'Microsoft.Web.WebView2.WinForms.dll')"
    (Join-Path $PSScriptRoot 'AstraMed.cs')
    (Join-Path $PSScriptRoot 'LocalAi.cs')
)
& $compiler @compilerArgs
if ($LASTEXITCODE -ne 0) { throw 'NETIN.exe could not be compiled.' }
Write-Output $exe
