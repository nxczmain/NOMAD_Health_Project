@echo off
setlocal
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0Actualizar-NETIN.ps1" %*
set "NETIN_UPDATE_EXIT=%ERRORLEVEL%"
if not "%NETIN_UPDATE_EXIT%"=="0" pause
exit /b %NETIN_UPDATE_EXIT%
