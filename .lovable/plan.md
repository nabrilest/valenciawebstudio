# Plan: Imágenes de tatuajes reales y arreglar enlace de Instagram en la demo

## Problema

En la página `/demo/tatuajes` (`src/pages/DemoTatuajes.tsx`):

1. **Imágenes de muestra son de peluquería**: La galería y el hero usan las imágenes compartidas `gallery-1.jpg`–`gallery-8.jpg` y `lumina-hero.jpg`, que en realidad son fotos de una peluquería/salón de belleza. El usuario quiere que sean fotos de tatuajes.

2. **El enlace de Instagram redirige a una cuenta existente**: Los 4 enlaces `https://instagram.com/inkstudio` apuntan a una cuenta real de Instagram. Hay que cambiarlos por un usuario claramente ficticio para una demo.

---

## Solución

### 1. Generar imágenes nuevas de tatuajes (no reutilizar las de peluquería)

Las imágenes `gallery-*.jpg` y `lumina-hero.jpg` se comparten con `DemoPeluqueria.tsx`, así que **no** se sobrescriben. Se generan archivos nuevos exclusivos para la demo de tatuajes:

| Archivo nuevo | Contenido |
|---------------|-----------|
| `src/assets/tattoo-hero.jpg` | Interior de estudio de tatuajes, atmósfera oscura/industrial, tatuador trabajando |
| `src/assets/tattoo-gallery-1.jpg` | Tatuaje realista (retrato) en brazo |
| `src/assets/tattoo-gallery-2.jpg` | Blackwork geométrico en negro |
| `src/assets/tattoo-gallery-3.jpg` | Fine line floral, líneas finas |
| `src/assets/tattoo-gallery-4.jpg` | Tradicional / Old School con color |
| `src/assets/tattoo-gallery-5.jpg` | Lettering / tipografía caligráfica |
| `src/assets/tattoo-gallery-6.jpg` | Retrato realista en detalle |
| `src/assets/tattoo-gallery-7.jpg` | Diseño minimalista pequeño |
| `src/assets/tattoo-gallery-8.jpg` | Interior del estudio (sala de trabajo) |

Estilo visual coherente: fotografía realista, buena luz, fondo neutro/oscuro. Se generarán con `imagegen--generate_image`.

### 2. Actualizar los imports en `DemoTatuajes.tsx`

Cambiar las líneas 9–17 para importar las imágenes nuevas de tatuaje en lugar de las compartidas:

```tsx
import heroImage from "@/assets/tattoo-hero.jpg";
import gallery1 from "@/assets/tattoo-gallery-1.jpg";
// ... hasta gallery8
```

El resto del componente (la estructura, el array `gallery`, los alts) se mantiene igual, solo cambian los `src`.

### 3. Cambiar el enlace de Instagram

Reemplazar los 4 enlaces `https://instagram.com/inkstudio` por un usuario claramente ficticio de demo, por ejemplo:

```
https://instagram.com/inkstudio.valencia.demo
```

Ubicaciones a cambiar (todas en `DemoTatuajes.tsx`):
- Línea ~186 (icono del menú lateral)
- Línea ~399 (enlace "Ver más en @inkstudio" bajo la galería)
- Línea ~568 (sección "Redes")
- Línea ~592 (icono del footer)

El texto visible `@inkstudio` se mantiene (es el nombre de la demo); solo cambia el destino del enlace para que no lleve a una cuenta real.

---

## Resumen de cambios

| Archivo | Acción | Descripción |
|---------|--------|-------------|
| `src/assets/tattoo-hero.jpg` + 8 `tattoo-gallery-*.jpg` | Crear | 9 imágenes nuevas de tatuajes generadas con IA |
| `src/pages/DemoTatuajes.tsx` | Modificar | Cambiar imports de imágenes a las nuevas; cambiar 4 enlaces de Instagram a usuario ficticio |

No se modifican `DemoPeluqueria.tsx` ni las imágenes compartidas, para no afectar a la otra demo.

---

## Sección Técnica

- Las imágenes se generan con `imagegen--generate_image` (modelo `standard` para mejor calidad fotográfica).
- Se guardan en `src/assets/` como `.jpg` (fotografías, no se necesita transparencia).
- Los imports actuales de `gallery-6` ya funcionan (el archivo existe), por lo que el cambio es 1:1.
- No se requieren nuevas dependencias ni cambios en rutas.
