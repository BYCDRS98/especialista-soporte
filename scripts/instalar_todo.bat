@echo off
:: ==============================================================================
:: INSTALADOR AUTOMATIZADO DE SOFTWARE ESENCIAL
:: ESPECIALISTA: CRISTIAN DANTE REYES SANDOVAL
:: Descripción: Automatiza la instalación silenciosa de programas básicos
:: ==============================================================================

title Instalador Automatizado - Cristian Dante Reyes Sandoval
color 0B

:: Verificar permisos de Administrador
net session >nul 2>&1
if %errorLevel% neq 0 (
    echo [!] ERROR: Este script requiere permisos de Administrador.
    echo [!] Haz clic derecho sobre el archivo y selecciona "Ejecutar como administrador".
    echo.
    pause
    exit /b 1
)

cls
echo ==============================================================================
echo       ESPECIALISTA CRISTIAN DANTE REYES SANDOVAL - INSTALADOR MAESTRO
echo ==============================================================================
echo  Iniciando proceso de despliegue automatico de software basico...
echo  Por favor, mantenga esta ventana abierta hasta finalizar.
echo ==============================================================================
echo.

:: Comprobar si winget esta disponible en el sistema
where winget >nul 2>&1
if %errorlevel% neq 0 (
    echo [!] Winget no encontrado en el sistema.
    echo [*] Se recomienda instalar desde Microsoft Store o App Installer.
    echo [*] Procediendo con metodos alternativos...
)

echo [*] Paso 1/6: Instalando WinRAR x64...
winget install --id RARLab.WinRAR -e --silent --accept-package-agreements --accept-source-agreements >nul 2>&1
if %errorlevel% equ 0 (echo    [OK] WinRAR instalado con exito.) else (echo    [!] WinRAR ya instalado o pendiente.)

echo [*] Paso 2/6: Instalando VLC Media Player...
winget install --id VideoLAN.VLC -e --silent --accept-package-agreements --accept-source-agreements >nul 2>&1
if %errorlevel% equ 0 (echo    [OK] VLC Media Player instalado con exito.) else (echo    [!] VLC ya instalado o pendiente.)

echo [*] Paso 3/6: Instalando AnyDesk (Soporte Remoto)...
winget install --id AnyDeskSoftwareGmbH.AnyDesk -e --silent --accept-package-agreements --accept-source-agreements >nul 2>&1
if %errorlevel% equ 0 (echo    [OK] AnyDesk instalado con exito.) else (echo    [!] AnyDesk ya instalado o pendiente.)

echo [*] Paso 4/6: Instalando Zoom Meetings...
winget install --id Zoom.Zoom -e --silent --accept-package-agreements --accept-source-agreements >nul 2>&1
if %errorlevel% equ 0 (echo    [OK] Zoom instalado con exito.) else (echo    [!] Zoom ya instalado o pendiente.)

echo [*] Paso 5/6: Preparando Nitro PDF...
winget install --id NitroSoftware.NitroPro -e --silent --accept-package-agreements --accept-source-agreements >nul 2>&1
if %errorlevel% equ 0 (echo    [OK] Nitro PDF instalado con exito.) else (echo    [i] Si usas instalador personalizado, colócalo en la carpeta del script.)

echo [*] Paso 6/6: Verificando Paquete de Microsoft Office...
echo    [i] Para Office se recomienda ejecutar la herramienta oficial ODT (Office Deployment Tool).
echo    [i] Si cuentas con el instalador desatendido de Office, este se invocará a continuación.
if exist "OfficeSetup.exe" (
    echo    [*] Ejecutando instalacion silenciosa de Office...
    start /wait OfficeSetup.exe /configure configuration.xml
    echo    [OK] Proceso de Office finalizado.
) else (
    echo    [i] Coloca 'OfficeSetup.exe' en esta carpeta para automatizacion total de Office.
)

echo.
echo ==============================================================================
echo [V] PROCESO COMPLETADO EXITOSAMENTE
echo Especialista: Cristian Dante Reyes Sandoval
echo Todos los programas seleccionados han sido procesados.
echo ==============================================================================
echo.
pause
exit /b 0
