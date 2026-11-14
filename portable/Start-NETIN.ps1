param([switch]$RestablecerAstronautas)

$ErrorActionPreference = 'Stop'
$root = $PSScriptRoot
$ollama = Join-Path $root 'Ollama\ollama.exe'
$models = Join-Path $root 'Ollama\models'
$app = Join-Path $root 'NETIN.exe'
if (Get-Process -Name NETIN -ErrorAction SilentlyContinue) { throw 'Cierra NETIN antes de abrir la version de la USB.' }
$listener = New-Object Net.Sockets.TcpListener ([Net.IPAddress]::Loopback),0
$listener.Start()
$port = $listener.LocalEndpoint.Port
$listener.Stop()
$env:NETIN_OLLAMA_PORT = [string]$port
$env:OLLAMA_HOST = "127.0.0.1:$port"
$env:OLLAMA_MODELS = $models
$env:OLLAMA_NO_CLOUD = '1'
$env:OLLAMA_NOPRUNE = '1'
$server = Start-Process -FilePath $ollama -ArgumentList 'serve' -WindowStyle Hidden -PassThru
try {
    $ready = $false
    for ($attempt = 0; $attempt -lt 40; $attempt++) {
        if ($server.HasExited) { break }
        try {
            $tags = Invoke-RestMethod -Uri "http://127.0.0.1:$port/api/tags" -TimeoutSec 2
            if ($tags.models.name -contains 'qwen3:4b') { $ready = $true; break }
        } catch { }
        Start-Sleep -Milliseconds 250
    }
    if (!$ready) { throw 'Ollama no encontro el modelo qwen3:4b en la USB.' }
    $launch = @{ FilePath = $app; WorkingDirectory = $root; PassThru = $true }
    if ($RestablecerAstronautas) { $launch.ArgumentList = '--reset-crew' }
    $appProcess = Start-Process @launch
    $opened = !$appProcess.WaitForExit(6000)
    $appProcess.WaitForExit()
    if ($opened -and $appProcess.ExitCode -eq 0) {
        [IO.File]::WriteAllText((Join-Path $root 'Portable-session.ok'), [DateTime]::UtcNow.ToString('o'))
    }
} finally {
    if (!$server.HasExited) { Stop-Process -Id $server.Id }
}
