# 🌐 Portal Web Oficial - Especialista Cristian Dante Reyes Sandoval

> Plataforma web moderna, elegante y de alto impacto visual para la distribución y descarga de programas e instaladores automatizados de software esencial (Office, VLC, Nitro PDF, WinRAR, AnyDesk, Zoom y Pack Todo-en-Uno).

---

## ✨ Características de la Web

- 🎨 **Diseño Moderno & Elegante**: Estética oscura *Dark Tech Luxury* con efectos de cristal (*Glassmorphism*), bordes luminosos de neón y degradados fluidos.
- 🌌 **Partículas Interactivas**: Fondo dinámico en HTML5 Canvas sensible al movimiento del mouse.
- ⚡ **Micro-interacciones y Botones con Efectos**:
  - Efecto de onda (*ripple*) al pulsar.
  - Barra de progreso simulada en el propio botón.
  - Ventana emergente (*Modal*) con instrucciones claras de ejecución ("Ejecutar como Administrador").
- 💻 **Consola Terminal en Vivo**: Demostración simulada en PowerShell que enseña cómo se ejecutan las instalaciones silenciosas.
- 📱 **100% Responsivo**: Se adapta perfectamente a computadoras de escritorio, laptops, tablets y celulares.
- 🚀 **Optimizado para GitHub Pages**: Carga ultrarrápida sin requerir Node.js ni compilación previa.

---

## 📁 Estructura del Proyecto

```
sitio-cristian-reyes/
│
├── index.html              # Estructura principal de la página
├── css/
│   ├── style.css           # Estilos base, fuentes, tarjetas y maquetación
│   └── effects.css         # Animaciones, partículas, resplandores y botones
├── js/
│   ├── app.js              # Lógica de descargas, modales y notificaciones
│   ├── particles.js        # Motor de partículas de fondo en Canvas
│   └── terminal.js         # Simulador dinámico de terminal en vivo
├── scripts/
│   ├── instalar_todo.bat   # Script Batch automatizado Todo-en-Uno
│   └── instalar_apps.ps1   # Script PowerShell moderno con soporte Winget
└── README.md               # Guía completa de uso y publicación
```

---

## 🚀 Cómo Publicar la Página en GitHub Pages (Paso a Paso)

### Método 1: Desde la Web de GitHub (El más rápido y fácil)

1. **Inicia sesión** en [GitHub.com](https://github.com).
2. Haz clic en el botón verde **"New"** para crear un nuevo repositorio.
3. Asígnale un nombre (por ejemplo: `programas-automatizados` o `cristian-reyes`).
4. Selecciona **"Public"** (Público) y haz clic en **"Create repository"**.
5. En la pantalla siguiente, presiona el enlace que dice **"uploading an existing file"** (subir archivos existentes).
6. Arrastra y suelta todos los archivos y carpetas de este proyecto (`index.html`, `css/`, `js/`, `scripts/`).
7. Haz clic en el botón verde **"Commit changes"**.
8. Ahora activa GitHub Pages:
   - Ve a la pestaña **Settings** (Configuración) de tu repositorio.
   - En el menú izquierdo, haz clic en **Pages**.
   - En **"Build and deployment"** > **Branch**, selecciona la rama `main` (o `master`) y la carpeta `/ (root)`.
   - Haz clic en **Save** (Guardar).
9. ¡Listo! En unos 30 segundos, GitHub te dará tu enlace oficial gratuito:  
   `https://tu-usuario.github.io/tu-repositorio/`

---

### Método 2: Por Terminal (Git CLI)

Si tienes Git instalado en tu computadora:

```bash
cd "C:\Users\RS\.gemini\antigravity\scratch\sitio-cristian-reyes"
git init
git add .
git commit -m "Publicación inicial del sitio web - Cristian Dante Reyes Sandoval"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git
git push -u origin main
```

Luego activa GitHub Pages desde **Settings > Pages** seleccionando la rama `main`.

---

## ⚙️ Cómo Personalizar Enlaces y Contacto

### 1. Enlaces de Descarga (Nube o Enlaces Externos)
Si prefieres que los botones lleven a archivos subidos en **Google Drive, Mega, MediaFire** o **GitHub Releases**, simplemente abre el archivo `js/app.js` y edita la propiedad `filePath` del programa deseado:

```javascript
'office': {
  title: 'Microsoft Office Completo',
  filePath: 'https://drive.google.com/tu-enlace-aqui', // Cambia esta línea
  fileName: 'OfficeSetup.exe'
}
```

### 2. Número de WhatsApp
En `index.html`, busca el enlace de WhatsApp (cerca de la línea 320) y agrega tu número con código de país (ejemplo para Perú `+51`):

```html
<a href="https://wa.me/51999999999?text=Hola%20Especialista%20Cristian%20Dante..." ...>
```

---

## 👨‍💻 Créditos
- **Autor y Especialista**: Cristian Dante Reyes Sandoval.
- **Enfoque**: Soporte Técnico, Automatización y Optimización de Sistemas Windows.
