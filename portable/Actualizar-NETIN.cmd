@echo off
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0Actualizar-NETIN.ps1" %*
if errorlevel 1 pause
