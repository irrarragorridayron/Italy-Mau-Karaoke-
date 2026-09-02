# Italy Mau Karaoke Editor

## Estructura

```text
Italy Mau Karaoke Editor/
├── index.html
├── manifest.webmanifest
├── service-worker.js
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
└── assets/
    └── logo.png
```

## Qué incluye

- PWA instalable desde GitHub Pages.
- App shell cacheado por Service Worker.
- Funcionamiento del editor sin Internet después de la primera carga.
- IndexedDB para guardar proyectos en el teléfono/navegador.
- Recuperación automática del último proyecto.
- Guardado automático mientras se editan los datos.
- Importación de audio local.
- Audio y portadas almacenados localmente.
- Biblioteca de canciones.
- Editor de letra por líneas con tiempo en segundos.
- Botón para marcar el tiempo mientras reproduce el audio.
- Exportación/importación de proyecto en JSON, incluyendo audio y portada.

## Publicar en GitHub Pages

1. Sube `index.html`, `manifest.webmanifest`, `service-worker.js`, `icons/` y `assets/` respetando las carpetas.
2. Activa GitHub Pages para la rama/carpeta donde estén esos archivos.
3. Abre la URL de GitHub Pages una primera vez con Internet.
4. Espera a que cargue completamente y vuelve a abrir la app.
5. Desde el navegador puedes instalarla como aplicación si el navegador ofrece "Instalar app".

## Importante sobre offline

El navegador debe haber visitado la app al menos una vez para descargar el App Shell y registrar el Service Worker. Los archivos de música que importes después se guardan en el almacenamiento local del dispositivo mediante IndexedDB.

Los proyectos son locales a ese navegador/dispositivo. Para moverlos a otro dispositivo usa "Exportar proyecto" y luego "Importar proyecto".

## Límites

El almacenamiento disponible para audio/proyectos depende del navegador y del espacio libre del dispositivo. No conviene borrar los datos del sitio si quieres conservar los proyectos locales.
