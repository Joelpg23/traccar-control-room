📡 Fleet Control Room — Traccar Monitor

Sistema de monitoreo en tiempo real para vehículos basado en la API de Traccar, diseñado como una Control Room UX Interface para operadores de flota.

La aplicación permite visualizar vehículos en tiempo real, su ubicación en mapa, estado de conexión y métricas clave de operación, con un fuerte enfoque en:

UX en sistemas críticos
Accesibilidad (WCAG mindset)
Diseño de estados en tiempo real
Diseño de sistemas (Design Systems)

🚀 Demo
👉 URL en producción:
https://traccar-control-room.vercel.app/


🧠 Funcionalidades principales
📍 Monitoreo de vehículos en tiempo real (Traccar API)
🗺️ Visualización de posición en mapa interactivo
🚗 Selección dinámica de vehículos
📊 Status Card con:
Estado online / offline
Velocidad en tiempo real
Última actualización (formato humano)
Coordenadas GPS
🌙 Modo oscuro / claro persistente
⚡ Sistema de estados UX:
Loading skeleton premium
Error state con retry
Empty state controlado
Live state operativo
🧪 Panel de debug para simular estados críticos
📱 Diseño completamente responsive


🧰 Tecnologías usadas
React (Vite)
Tailwind CSS
Lucide Icons
Traccar REST API (https://demo.traccar.org)
Leaflet / Map system (MapView)
LocalStorage (persistencia de tema)
Fetch API + polling


📦 Instalación

Clona el repositorio:
git clone https://github.com/Joelpg23/traccar-control-room.git

Entra al proyecto:
cd traccar-control-room

Instala dependencias:
npm install

▶️ Ejecución local
npm run dev

La app estará disponible en:
http://localhost:5173


🔐 Autenticación (Traccar Demo)

La aplicación está conectada a un servidor demo de Traccar:
👉 https://demo.traccar.org

Credenciales usadas:
usuario: demo
contraseña: demo


🧠 Arquitectura del sistema 

La aplicación está estructurada bajo un modelo de estados:
Loading → Live → Error → Empty

Cada estado tiene representación visual independiente para evitar:
UI rota
pantallas vacías sin feedback
pérdida de contexto operativo


🎨 Decisiones de UX / UI
1. Diseño orientado a operadores (Control Room)
Jerarquía clara: mapa + status card
Información crítica siempre visible
Optimizado para monitoreo continuo
Minimiza carga cognitiva

2. Sistema de estados críticos
Se diseñaron 4 estados UX completos:
Loading (skeleton layout completo)
Error (recuperación con retry)
Empty (sin datos controlado)
Live (estado operativo)

3. Diseño en tiempo real
Tiempo humano en “Last Update”
Simulación de updates de estado
Preparado para polling / WebSockets

4. Accesibilidad (WCAG mindset)
HTML semántico (dl, dt, dd)
Estados de foco visibles (sin outline: none)
Navegación completa por teclado
Contraste optimizado en dark/light mode

5. Responsive design
Mobile-first layout

6. Micro-interacciones
Pulso en estado online
Transiciones suaves en métricas
Skeleton loading con shimmer
Feedback visual constante


🗺️ Mapa

El mapa está preparado para:
Centrado automático en vehículo seleccionado
Extensible a interpolación de movimiento (marker smoothing)
Visualización en tiempo real de coordenadas GPS


⚠️ Notas técnicas
La API de Traccar puede requerir configuración CORS en entornos reales
El sistema está preparado para migrar a WebSockets
El backend fue eliminado en favor de integración directa con API pública


📌 Mejoras futuras
Interpolación real de movimiento GPS (marker smoothing avanzado)
Clustering de vehículos
Alertas en tiempo real
WebSockets streaming
Filtros por velocidad / estado / zona
Historial de rutas


👨‍💻 Autor
Nicolás Pinilla
Diseñador UX/UI - Frontend