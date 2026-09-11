/* ==============================================================================
   ESPECIALISTA CRISTIAN DANTE REYES SANDOVAL
   Lógica Principal: Descargas, Modales, Animaciones e Interacción
   ============================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Base de datos de software para descargas y modales
  const softwareData = {
    'all-in-one': {
      title: 'Pack Maestro Todo-en-Uno (AIO)',
      subtitle: 'Instalador Silencioso Batch / PowerShell',
      iconClass: 'fa-solid fa-wand-magic-sparkles',
      iconColor: 'linear-gradient(135deg, #f59e0b, #ec4899)',
      fileType: 'Script Automatizado (.bat)',
      fileName: 'instalar_todo.bat',
      filePath: 'https://github.com/BYCDRS98/kit-soporte/releases/download/v1.0/InstallAutoBasic1.1.exe',
      description: 'Automatiza la instalación secuencial y silenciosa de Office, VLC, Nitro PDF, WinRAR, AnyDesk y Zoom sin pausas.',
      steps: [
        'Descarga el archivo <strong>instalar_todo.bat</strong> en tu PC.',
        'Haz clic derecho sobre el archivo y selecciona <strong>"Ejecutar como administrador"</strong>.',
        'Observa la ventana de comandos trabajar y espera el mensaje de finalización.'
      ]
    },
    'office': {
      title: 'Microsoft Office Completo',
      subtitle: 'Word, Excel, PowerPoint, Outlook & Más',
      iconClass: 'fa-solid fa-briefcase',
      iconColor: 'linear-gradient(135deg, #ea580c, #f97316)',
      fileType: 'Herramienta de Despliegue ODT',
      fileName: 'despliegue_office.bat',
      filePath: 'https://github.com/BYCDRS98/kit-soporte/releases/download/v1.1/Office2024_Tool_Plus-16.0.20228.20078.part1.rar',
      description: 'Paquete de ofimática esencial preconfigurado para un rendimiento óptimo y despliegue limpio.',
      steps: [
        'Descarga el instalador o script configurador de Office.',
        'Descomprime <strong>requiere parte 2</strong>.',
        'Mostrara 2 ventanas que debemos darle en si.'
      ]
      
      
    },
    'office1': {
      title: 'Microsoft Office Completo',
      subtitle: 'Word, Excel, PowerPoint, Outlook & Más',
      iconClass: 'fa-solid fa-briefcase',
      iconColor: 'linear-gradient(135deg, #ea580c, #f97316)',
      fileType: 'Herramienta de Despliegue ODT',
      fileName: 'despliegue_office.bat',
      filePath: 'https://github.com/BYCDRS98/kit-soporte/releases/download/v1.1/Office2024_Tool_Plus-16.0.20228.20078.part2.rar',
      description: 'Paquete de ofimática esencial preconfigurado para un rendimiento óptimo y despliegue limpio.',
      steps: [
        'Descarga el instalador o script configurador de Office.',
        'Ejecuta con <strong>permisos de Administrador</strong>.',
        'La suite se instalará en segundo plano con todos los complementos requeridos.'
      ]
      
      
    },
    'office3': {
      title: 'Microsoft Office Completo',
      subtitle: 'Word, Excel, PowerPoint, Outlook & Más',
      iconClass: 'fa-solid fa-briefcase',
      iconColor: 'linear-gradient(135deg, #ea580c, #f97316)',
      fileType: 'Herramienta de Despliegue ODT',
      fileName: 'despliegue_office.bat',
      filePath: 'https://github.com/BYCDRS98/especialista-soporte/releases/download/v1.0/MAS_AIO.cmd',
      description: 'Paquete de ofimática esencial preconfigurado para un rendimiento óptimo y despliegue limpio.',
      steps: [
        'Activador Office.',
        'Ejecuta con <strong>permisos de Administrador</strong>.',
      ]
      
      
    },
    'vlc': {
      title: 'VLC Media Player',
      subtitle: 'Reproductor Multimedia Universal',
      iconClass: 'fa-solid fa-play',
      iconColor: 'linear-gradient(135deg, #d97706, #fbbf24)',
      fileType: 'Instalador Silencioso x64',
      fileName: 'instalar_vlc.bat',
      filePath: 'scripts/instalar_todo.bat',
      description: 'Reproduce cualquier archivo multimedia, pistas de audio y video sin necesidad de descargar códecs extras.',
      steps: [
        'Descarga el instalador automático optimizado.',
        'Haz clic en <strong>Ejecutar como administrador</strong>.',
        'VLC quedará listo y configurado como reproductor predeterminado.'
      ]
    },
    'nitro': {
      title: 'Nitro Pro PDF',
      subtitle: 'Lector, Editor y Convertidor PDF',
      iconClass: 'fa-solid fa-file-pdf',
      iconColor: 'linear-gradient(135deg, #ef4444, #f87171)',
      fileType: 'Instalador Optimizado x64',
      fileName: 'instalar_nitro.bat',
      filePath: 'https://github.com/BYCDRS98/kit-soporte/releases/download/v1.0/NitroPDF.exe',
      description: 'Solución integral para crear, convertir, firmar y editar archivos PDF con gran rapidez.',
      steps: [
        'Descarga el script de despliegue para Nitro PDF.',
        'Copiar y pegar en ruta de instalación.'
      ]
    },
    'nitro1': {
      title: 'Nitro Pro PDF',
      subtitle: 'Lector, Editor y Convertidor PDF',
      iconClass: 'fa-solid fa-file-pdf',
      iconColor: 'linear-gradient(135deg, #ef4444, #f87171)',
      fileType: 'Instalador Optimizado x64',
      fileName: 'instalar_nitro.bat',
      filePath: 'https://github.com/BYCDRS98/kit-soporte/releases/download/v1.0/nitro_pro14_x64.msi',
      description: 'Solución integral para crear, convertir, firmar y editar archivos PDF con gran rapidez.',
      steps: [
        'Descarga el script de despliegue para Nitro PDF.',
        'Ejecuta el archivo con privilegios administrativos.',
        'El visor de documentos se integrará automáticamente al sistema.'
      ]
      
    },
    'winrar': {
      title: 'WinRAR x64',
      subtitle: 'Compresor y Descompresor de Archivos',
      iconClass: 'fa-solid fa-file-zipper',
      iconColor: 'linear-gradient(135deg, #3b82f6, #60a5fa)',
      fileType: 'Instalador Silencioso x64',
      fileName: 'instalar_winrar.bat',
      filePath: 'https://github.com/BYCDRS98/kit-soporte/releases/download/v1.0/WinRAR.exe',
      description: 'Comprime y abre ficheros RAR, ZIP, 7Z, ISO y más con máxima tasa de compresión.',
      steps: [
        'Descarga el script directo de WinRAR.',
        'Ejecútalo como <strong>Administrador</strong>.',
        'La integración con el menú contextual de Windows se creará de inmediato.'
      ]
    },
    'anydesk': {
      title: 'AnyDesk Soporte Remoto',
      subtitle: 'Acceso Remoto Rápido y Seguro',
      iconClass: 'fa-solid fa-desktop',
      iconColor: 'linear-gradient(135deg, #dc2626, #ef4444)',
      fileType: 'Ejecutable Directo / Script',
      fileName: 'AnyDesk_Soporte.exe',
      filePath: 'https://github.com/BYCDRS98/kit-soporte/releases/download/v1.0/AnyDesk.exe',
      description: 'Permite conectarte o recibir asistencia técnica remota inmediata del Especialista Cristian Dante Reyes.',
      steps: [
        'Descarga la herramienta ligera de AnyDesk.',
        'Abre el programa y comparte tu código de 9 dígitos.',
        'El especialista podrá brindarte asistencia remota segura.'
      ]
    },
    'zoom': {
      title: 'Zoom Workplace Meetings',
      subtitle: 'Videollamadas y Conferencias HD',
      iconClass: 'fa-solid fa-video',
      iconColor: 'linear-gradient(135deg, #2563eb, #38bdf8)',
      fileType: 'Instalador Silencioso MSI',
      fileName: 'instalar_zoom.bat',
      filePath: 'https://github.com/BYCDRS98/kit-soporte/releases/download/v1.0/ZoomInstallerFull.exe',
      description: 'Cliente optimizado de videoconferencias para trabajo, estudio y comunicación en equipo.',
      steps: [
        'Descarga el script o instalador directo de Zoom.',
        'Ejecuta con un clic.',
        'Inicia sesión o únete a tu reunión con audio y video optimizado.'
      ]
    }
  };

  // Elementos del Modal
  const modal = document.getElementById('download-modal');
  const modalClose = document.getElementById('modal-close-btn');
  const modalTitle = document.getElementById('modal-title');
  const modalSubtitle = document.getElementById('modal-subtitle');
  const modalIcon = document.getElementById('modal-app-icon');
  const modalStepsList = document.getElementById('modal-steps-list');
  const modalDownloadAction = document.getElementById('modal-direct-download');

  // Inicializar botones de descarga
  const downloadButtons = document.querySelectorAll('[data-software]');
  downloadButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const softKey = btn.getAttribute('data-software');
      const data = softwareData[softKey];
      if (!data) return;

      // Efecto Ripple visual
      createRipple(e, btn);

      // Efecto de barra de progreso en el botón
      const progressSpan = btn.querySelector('.download-progress');
      if (progressSpan) {
        btn.classList.add('downloading');
        progressSpan.style.width = '0%';
        
        let width = 0;
        const interval = setInterval(() => {
          width += 20;
          progressSpan.style.width = width + '%';
          if (width >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              btn.classList.remove('downloading');
              progressSpan.style.width = '0%';
              openDownloadModal(data);
              triggerFileDownload(data);
            }, 250);
          }
        }, 60);
      } else {
        openDownloadModal(data);
        triggerFileDownload(data);
      }
    });
  });

  // Abrir Modal con datos
  function openDownloadModal(data) {
    if (!modal) return;
    modalTitle.textContent = data.title;
    modalSubtitle.textContent = data.subtitle;
    modalIcon.className = 'modal-icon-badge ' + data.iconClass;
    modalIcon.style.background = data.iconColor;

    // Actualizar pasos
    modalStepsList.innerHTML = '';
    data.steps.forEach(stepText => {
      const li = document.createElement('li');
      li.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${stepText}</span>`;
      modalStepsList.appendChild(li);
    });

    // Enlace de descarga directa
    modalDownloadAction.setAttribute('href', data.filePath);
    modalDownloadAction.setAttribute('download', data.fileName);

    modal.classList.add('active');
  }

  // Cerrar Modal
  function closeModal() {
    if (modal) modal.classList.remove('active');
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Gatillar descarga real de archivo
  function triggerFileDownload(data) {
    showToast(`Preparando descarga: ${data.fileName}`);

    const a = document.createElement('a');
    a.href = data.filePath;
    a.download = data.fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  // Efecto Ripple al hacer clic
  function createRipple(event, button) {
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    const rect = button.getBoundingClientRect();
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - rect.left - radius}px`;
    circle.style.top = `${event.clientY - rect.top - radius}px`;
    circle.classList.add('ripple-effect');

    const ripple = button.getElementsByClassName('ripple-effect')[0];
    if (ripple) ripple.remove();

    button.appendChild(circle);
  }

  // Notificación flotante Toast
  function showToast(message) {
    let toast = document.querySelector('.toast-notification');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast-notification';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `
      <i class="fa-solid fa-circle-check toast-icon"></i>
      <div>
        <div style="font-weight: 700; font-size: 0.95rem;">Especialista Cristian Reyes</div>
        <div style="font-size: 0.82rem; color: #94a3b8;">${message}</div>
      </div>
    `;
    toast.classList.add('active');

    setTimeout(() => {
      toast.classList.remove('active');
    }, 4000);
  }

  // Copiar comando rápido si existe
  const copyBtn = document.getElementById('copy-cmd-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const cmdText = "irm https://raw.githubusercontent.com/... | iex";
      navigator.clipboard.writeText(cmdText).then(() => {
        showToast("Comando copiado al portapapeles");
      });
    });
  }
});
