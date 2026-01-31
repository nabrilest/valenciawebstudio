

# Plan: Corregir visibilidad FAQ, quitar "reales" y añadir demo de tatuajes

## Problema 1: FAQ no visible

La página `/faq` existe y funciona, pero no aparece en la navegación principal (Header). Solo está en el Footer.

### Solución
Añadir el link de FAQ al Header para que sea más accesible.

**Archivo a modificar:** `src/components/Header.tsx`

```tsx
const navLinks = [
  { to: "/", label: "Home" },
  { to: "/servicios", label: "Servicios" },
  { to: "/precios", label: "Precios" },
  { to: "/proyectos", label: "Proyectos" },
  { to: "/faq", label: "FAQ" },  // Añadir
  { to: "/contacto", label: "Contacto" },
];
```

---

## Problema 2: Quitar "reales" de "Casos reales"

En la sección de casos de la Home aparece "Casos reales".

### Solución
Cambiar el título a simplemente "Casos" o "Ejemplos de proyectos".

**Archivo a modificar:** `src/pages/Home.tsx` (líneas 351-352)

Cambiar:
```tsx
<h2>Casos reales</h2>
```
Por:
```tsx
<h2>Ejemplos de proyectos</h2>
```

---

## Problema 3: Añadir demo de tatuajes

Crear una nueva demo completa para un estudio de tatuajes siguiendo la misma estructura que la peluquería.

### Archivos a crear

**1. `src/pages/DemoTatuajes.tsx`**

Estructura similar a DemoPeluqueria.tsx con:
- Banner de demo con link a proyectos
- Header con navegación lateral móvil
- Hero con imagen de fondo
- Sección "Sobre nosotros" 
- Sección de estilos/servicios (tradicional, realismo, blackwork, etc.)
- Galería de trabajos con lightbox
- Testimonios de clientes
- Sección de contacto con WhatsApp
- Footer propio

Paleta de colores propuesta para tatuajes:
- Negro/carbón: `#1A1A1A` (principal)
- Dorado: `#C9A227` (acento)
- Gris: `#2D2D2D` (secundario)
- Crema claro: `#F5F5F0` (fondo)

Servicios/estilos a incluir:
- Tradicional/Old School
- Realismo
- Blackwork
- Fine line/Minimalista
- Lettering
- Cover-ups
- Diseño personalizado

**2. Añadir ruta en `src/App.tsx`**
```tsx
import DemoTatuajes from "./pages/DemoTatuajes";
// ...
<Route path="/demo/tatuajes" element={<DemoTatuajes />} />
```

**3. Añadir proyecto en `src/pages/Proyectos.tsx`**

Nuevo proyecto en el array `projects`:
```tsx
{
  title: "Estudio de Tatuajes",
  description: "Web con estilo industrial para un estudio de tatuajes. Galería de trabajos, estilos y reserva de citas.",
  image: projectTatuajes, // Usaremos una imagen existente temporalmente
  demoUrl: "/demo/tatuajes",
  metrics: [
    { icon: Phone, text: "+35% solicitudes de cita" },
    { icon: TrendingUp, text: "Top 5 en Google Maps" },
  ],
  services: ["Diseño web", "SEO local", "Galería interactiva"],
}
```

**4. Añadir caso en Home.tsx**

En el array `caseStudies`:
```tsx
{
  title: "Estudio de Tatuajes",
  result: "Más solicitudes de cita online",
  description: "Web con galería de trabajos y reserva directa. Estilo industrial y moderno.",
  image: projectTatuajes,
  link: "/demo/tatuajes",
}
```

---

## Resumen de cambios

| Archivo | Acción | Descripción |
|---------|--------|-------------|
| `src/components/Header.tsx` | Modificar | Añadir link a FAQ |
| `src/pages/Home.tsx` | Modificar | Quitar "reales", añadir caso tatuajes |
| `src/pages/Proyectos.tsx` | Modificar | Añadir proyecto tatuajes |
| `src/pages/DemoTatuajes.tsx` | Crear | Demo completa del estudio |
| `src/App.tsx` | Modificar | Añadir ruta `/demo/tatuajes` |

---

## Sección Técnica

### Estructura de DemoTatuajes.tsx

El componente seguirá la misma estructura que DemoPeluqueria.tsx:
1. AnimatedSection wrapper para animaciones de scroll
2. useState para lightbox de galería y menú móvil
3. Arrays de datos para servicios, galería, testimonios
4. Secciones: Hero, Nosotros, Estilos, Galería, Opiniones, Contacto
5. Sheet de Radix para menú móvil
6. Dialog de Radix para lightbox de imágenes

### Imágenes
Se reutilizarán las imágenes de galería existentes (gallery-1.jpg a gallery-8.jpg) temporalmente. Para la imagen del proyecto se puede usar project-peluqueria.jpg como placeholder hasta tener imágenes específicas de tatuajes.

### Dependencias
No se requieren nuevas dependencias. Se usarán los componentes existentes:
- Sheet, Dialog de Radix
- Button de shadcn/ui
- Iconos de Lucide

