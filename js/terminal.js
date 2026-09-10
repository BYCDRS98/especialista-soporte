/* ==============================================================================
   ESPECIALISTA CRISTIAN DANTE REYES SANDOVAL
   Simulador de Consola Terminal en Vivo (PowerShell Automation)
   ============================================================================== */

(function () {
  const termBody = document.getElementById('terminal-content');
  const replayBtn = document.getElementById('term-replay-btn');
  if (!termBody) return;

  const terminalLogs = [
    { text: "PS C:\\Sistemas\\Automatizacion> .\\instalar_todo.bat", type: "cmd", delay: 300 },
    { text: "[*] Verificando privilegios de Administrador... [OK]", type: "info", delay: 800 },
    { text: "[*] Inicializando motor de despliegue Cristian Dante Reyes Sandoval", type: "accent", delay: 1300 },
    { text: "[+] [1/6] RARLab.WinRAR x64 -> Descarga silenciosa completada [OK]", type: "ok", delay: 2000 },
    { text: "[+] [2/6] VideoLAN.VLC Media Player -> Instalacion desatendida [OK]", type: "ok", delay: 2700 },
    { text: "[+] [3/6] AnyDesk Software -> Configuracion remota lista [OK]", type: "ok", delay: 3400 },
    { text: "[+] [4/6] Zoom Meetings Video -> Cliente actualizado [OK]", type: "ok", delay: 4100 },
    { text: "[+] [5/6] Nitro Pro PDF -> Integracion de lectura & edicion [OK]", type: "ok", delay: 4900 },
    { text: "[+] [6/6] Microsoft Office -> Verificacion de paquete corporativo [OK]", type: "ok", delay: 5700 },
    { text: "==================================================================", type: "divider", delay: 6200 },
    { text: ">>> DESPLIEGUE SILENCIOSO FINALIZADO CON EXITO EN 3 MINUTOS <<<", type: "highlight", delay: 6600 },
    { text: "PS C:\\Sistemas\\Automatizacion> _", type: "cursor", delay: 7000 }
  ];

  let timeouts = [];

  function runSimulation() {
    // Limpiar timeouts previos
    timeouts.forEach(t => clearTimeout(t));
    timeouts = [];
    termBody.innerHTML = '';

    terminalLogs.forEach(log => {
      const t = setTimeout(() => {
        const line = document.createElement('div');
        line.className = 'term-line';

        if (log.type === 'cmd') {
          line.innerHTML = `<span class="term-prompt">${log.text}</span>`;
        } else if (log.type === 'accent') {
          line.innerHTML = `<span class="term-accent">${log.text}</span>`;
        } else if (log.type === 'ok') {
          line.innerHTML = `<span class="term-ok">${log.text}</span>`;
        } else if (log.type === 'highlight') {
          line.innerHTML = `<strong style="color: #38bdf8; font-weight: 700;">${log.text}</strong>`;
        } else if (log.type === 'cursor') {
          line.innerHTML = `<span class="term-prompt">PS C:\\Sistemas\\Automatizacion&gt;</span> <span class="cursor-blink"></span>`;
        } else if (log.type === 'divider') {
          line.innerHTML = `<span style="color: #475569;">${log.text}</span>`;
        } else {
          line.innerHTML = `<span>${log.text}</span>`;
        }

        termBody.appendChild(line);
        termBody.scrollTop = termBody.scrollHeight;
      }, log.delay);

      timeouts.push(t);
    });
  }

  if (replayBtn) {
    replayBtn.addEventListener('click', runSimulation);
  }

  // Iniciar automáticamente cuando entre al viewport
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          runSimulation();
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.25 }
  );

  observer.observe(termBody);
})();
