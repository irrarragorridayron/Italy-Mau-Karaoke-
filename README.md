# Italy Mau Karaoke Editor — sincronización IA

Esta versión añade sincronización automática basada en reconocimiento de voz con Whisper ejecutado en el navegador mediante Transformers.js.

## Uso
1. Carga la canción.
2. Pega la letra completa.
3. Pulsa **Convertir en líneas**.
4. Pulsa **🎤 Sincronizar con IA**.
5. La IA analiza el audio, obtiene palabras con marcas de tiempo y alinea esas marcas con las líneas de la letra.
6. Revisa las líneas de baja confianza y corrígelas con **Marcar tiempo**.

## Importante
- La primera ejecución del motor IA necesita Internet para descargar la biblioteca y el modelo Whisper.
- El navegador usa su caché para reutilizar el modelo posteriormente; esto permite intentar trabajar sin Internet después de haberlo descargado, aunque la disponibilidad offline del caché depende del navegador.
- El audio se procesa en el dispositivo; no se envía a un servidor de transcripción.
- Whisper no garantiza una sincronización perfecta en todas las canciones, especialmente con voz muy procesada, coros, efectos o música muy dominante.
- La sincronización manual sigue disponible como corrección.
