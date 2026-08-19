# Contexto del Proyecto: Clon de Interfaz de Airbnb (Mobile-First)

## Visión General del Proyecto
Este proyecto consiste en clonar la interfaz de usuario de Airbnb priorizando un enfoque **Mobile-First**, utilizando **Next.js**, **React** y **Tailwind CSS**. La implementación se basa en convertir capturas de pantalla reales de la aplicación de Airbnb en especificaciones técnicas de componentes a través de prompts de visión para su posterior codificación.

---

## Definición del Usuario (User Persona)
El usuario objetivo es un viajero que busca alojamiento de forma rápida, intuitiva y cómoda desde su dispositivo móvil. Su meta principal es explorar opciones de hospedaje visualmente atractivas, filtrar según sus necesidades inmediatas (ubicación, fechas, tipo de propiedad) y revisar en detalle las características de una habitación antes de realizar una reserva.

---

## Vistas a Construir y Descripción

### 1. Página de Inicio (`Home`)
Es el punto de entrada principal. Su propósito es capturar el interés del usuario mediante inspiración visual y facilitar una búsqueda rápida.
* **Muestra:** Barra de búsqueda flotante ("Empieza a buscar"), selector de categorías por botones/píldoras ("Todo", "Alojamientos", "Experiencias"), carruseles horizontales de tarjetas de alojamientos destacados con imágenes, precios y calificaciones, y una navegación inferior fija (Bottom Navigation Bar).

### 2. Catálogo de Resultados (`Search / Listing`)
Vista enfocada en la exploración y comparación de propiedades tras realizar una búsqueda o seleccionar una categoría.
* **Muestra:** Encabezado con resumen de la búsqueda (destino, fechas, huéspedes), barra horizontal de filtros rápidos ("Wifi", "Lavadora", "Admite mascotas"), recuento de alojamientos disponibles, tarjetas verticales detalladas con carrusel de imágenes (dots), insignias de "Superanfitrión", etiquetas de descuento y un botón flotante ("Mapa") para alternar vistas.

### 3. Detalle de Habitación (`Room Detail`)
Vista dedicada a mostrar toda la información específica de un alojamiento para tomar la decisión de reserva.
* **Muestra:** Hero con galería/carrusel de imágenes y contador (ej. "1/34"), cabecera con título, calificación y tipo de alojamiento, perfil destacado del anfitrión con métricas (evaluaciones, años de experiencia), sección de dormitorios, lista de comodidades con iconos, mapa de ubicación aproximada, selector de fechas mediante calendario interactivo, reseñas de usuarios y una barra inferior fija de reserva con el desglose del precio total y el botón de acción ("Reservar").

---

## Desglose de Componentes Principales por Vista

**Navegación Global / Layout**
* `BottomNav`: Navegación inferior fija con accesos rápidos (Explorar, Favoritos, Iniciar sesión).

**Página de Inicio (`Home`)**
* `SearchBarCompact`: Botón/barra de búsqueda superior redondeada ("Empieza a buscar").
* `CategoryPills`: Slider horizontal de categorías con estilo de píldoras seleccionables.
* `SectionCarousel`: Secciones horizontales con título, botón de navegación y carrusel de tarjetas.
* `ListingCard`: Tarjeta reducida de propiedad con imagen, botón de favoritos, ubicación, precio y valoración.

**Página de Catálogo (`Search / Listing`)**
* `SearchHeader`: Barra superior con botón de regreso, resumen de búsqueda activa y acceso a filtros.
* `FilterChips`: Slider horizontal con botones de filtros de conveniencia rápidos.
* `ListingCardDetailed`: Tarjeta vertical completa con carrusel de imágenes (puntos de navegación), badge de "Superanfitrión", distribución de camas/baños, desglose de precio antes/ahora y etiqueta de descuento.
* `MapFloatingButton`: Botón flotante central inferior para alternar entre vista de lista y mapa.

**Detalle de Habitación (`Room Detail`)**
* `DetailHeaderNav`: Botones flotantes de acción superior (Atrás, Compartir, Favorito).
* `ImageGalleryMobile`: Hero de imagen principal con contador numérico de fotos ("1/34").
* `RoomHeaderInfo`: Título principal del hospedaje, tipo de habitación, ubicación, nota de calificación y badge de oferta.
* `HostCardMini`: Ficha rápida del anfitrión con foto, nombre y años de experiencia.
* `HostCardFull`: Ficha extendida del anfitrión con estadísticas (evaluaciones, calificación, tiempo de respuesta) y botón de contacto.
* `RoomDistribution`: Tarjeta visual del dormitorio ("¿Dónde dormirás?").
* `AmenitiesList`: Lista de comodidades principales con iconos y botón para expandir ("Mostrar las 21 comodidades").
* `LocationMapPreview`: Previsualización interactiva/mapa estático del área del alojamiento.
* `DatePickerCalendar`: Calendario interactivo de selección de noches y rango de fechas.
* `ReviewsOverview`: Sección de puntuación general y resumen de evaluaciones.
* `StickyReservationBar`: Barra inferior fija con el precio tachado/final y el botón principal de acción ("Reservar").

---

## Restricciones Técnicas de UI
* **Sin librerías de UI externas:** Queda estrictamente prohibido el uso de paquetes como `shadcn/ui`, `MUI`, `Chakra UI`, `Ant Design` o similares.
* **Estilizado exclusivo:** Se utilizarán únicamente **clases de utilidad de Tailwind CSS** y componentes nativos reutilizables creados desde cero.