# ==============================================================================
# INSTALADOR AUTOMATIZADO POWERSHELL
# Especialista: Cristian Dante Reyes Sandoval
# ==============================================================================

#Requires -RunAsAdministrator

Write-Host "==================================================================" -ForegroundColor Cyan
Write-Host "  ESPECIALISTA CRISTIAN DANTE REYES SANDOVAL - AUTOMATIZACION IT" -ForegroundColor Yellow
Write-Host "==================================================================" -ForegroundColor Cyan
Write-Host "Iniciando despliegue rapido de software basico optimizado...`n" -ForegroundColor Gray

$apps = @(
    @{ Name = "WinRAR x64"; Id = "RARLab.WinRAR" },
    @{ Name = "VLC Media Player"; Id = "VideoLAN.VLC" },
    @{ Name = "AnyDesk (Soporte Remoto)"; Id = "AnyDeskSoftwareGmbH.AnyDesk" },
    @{ Name = "Zoom Meetings"; Id = "Zoom.Zoom" },
    @{ Name = "Nitro PDF Reader / Pro"; Id = "NitroSoftware.NitroPro" }
)

$i = 1
foreach ($app in $apps) {
    Write-Host "[$i/$($apps.Count)] Instalando $($app.Name)..." -ForegroundColor Magenta
    try {
        winget install --id $app.Id -e --silent --accept-package-agreements --accept-source-agreements
        Write-Host "  [+] $($app.Name) procesado correctamente." -ForegroundColor Green
    }
    catch {
        Write-Host "  [-] Nota: Comprobar instalacion manual de $($app.Name)." -ForegroundColor Yellow
    }
    $i++
}

Write-Host "`n==================================================================" -ForegroundColor Cyan
Write-Host " [OK] Despliegue completado con exito!" -ForegroundColor Green
Write-Host " Especialista Cristian Dante Reyes Sandoval a su servicio." -ForegroundColor White
Write-Host "==================================================================" -ForegroundColor Cyan
Read-Host -Prompt "`nPresione Enter para salir"
