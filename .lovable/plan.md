
# Plan: Reestructuración Completa de Valencia Web Studio

## Resumen del Proyecto

Transformar la web actual de Valencia Web Studio para convertirla en una herramienta de captación de clientes enfocada en negocios locales de Valencia. El nuevo enfoque incluye servicios de **SEO local** además de diseño web, con nuevos precios (799€, 1.499€, 2.799€) y un sistema de auditorías gratuitas.

---

## Estructura de Páginas

### Páginas a Modificar
| Página | Estado | Cambios principales |
|--------|--------|---------------------|
| Home | Rediseño completo | Nueva propuesta de valor, planes, proceso, casos |
| Servicios | Rediseño completo | Diseño web + SEO + Mantenimiento + Fotografía |
| Proyectos | Ampliar | Mínimo 6 proyectos con métricas |
| Contacto | Rediseño | Formulario de auditoría + click-to-call |
| Sobre Nosotros | Mantener/Ajustar | Pequeños ajustes de tono |

### Páginas Nuevas
| Página | Ruta | Contenido |
|--------|------|-----------|
| Precios | `/precios` | Planes detallados con garantías |
| Proceso y Resultados | `/proceso` | Timeline de resultados medibles |
| FAQ | `/faq` | Preguntas frecuentes |

---

## Cambios Detallados por Archivo

### 1. `src/App.tsx`
- Añadir rutas: `/precios`, `/proceso`, `/faq`
- Importar nuevas páginas

### 2. `src/pages/Home.tsx` - Rediseño Completo

**Hero Section:**
- H1: "Webs y SEO local para negocios de Valencia"
- Subtítulo: "Más llamadas y más clientes desde Google"
- Texto sobre auditoría gratuita
- Botones: [Solicitar auditoría gratuita] [Ver precios]
- Badge de confianza: "Garantía técnica 90 días · Pago en 3 plazos · Trato cercano"

**Sección "¿Qué hacemos?":**
- Explicación sencilla
- 3 bullets con iconos

**Sección "¿Por qué funciona?":**
- 3 bullets con beneficios medibles

**Sección "Precios claros":**
- 3 tarjetas: Básico (799€), Avanzado (1.499€), Premium (2.799€)
- Cada una con lista de características
- Botón [Quiero este plan]

**Sección "Cómo trabajamos":**
- 5 pasos numerados con iconos

**Sección "Casos reales":**
- 2-3 proyectos destacados con imagen y resultado

**CTA Final:**
- "¿Hablamos 10 minutos y lo vemos?"
- Botón [Solicitar auditoría gratuita]

### 3. `src/pages/Servicios.tsx` - Rediseño Completo

**Servicios ofrecidos:**
1. **Diseño web** - Webs profesionales pensadas para convertir
2. **SEO local** - Presencia en Google para búsquedas locales
3. **Mantenimiento** - Desde 49€/mes
4. **Fotografía y contenidos** - Fotos y textos profesionales

Cada servicio con icono, descripción clara y botón de contacto.

### 4. `src/pages/Precios.tsx` - Nueva Página

**Contenido:**
- Título: "Precios claros, sin sorpresas"
- Los 3 planes con detalles ampliados
- Información de pago: "40% al empezar, 30% a mitad, 30% al final"
- CTA: [Contactar para empezar]

### 5. `src/pages/Proyectos.tsx` - Ampliar

**Cambios:**
- Mínimo 6 proyectos (actualmente hay 2 + placeholder)
- Cada proyecto con: imagen, descripción, métricas de mejora (visitas, llamadas, reservas)
- Layout de grid mejorado

### 6. `src/pages/Proceso.tsx` - Nueva Página

**Contenido:**
- Título: "Cómo medimos si funciona"
- Timeline de 30/60/90 días con métricas
- Explicación de qué esperar en cada fase

### 7. `src/pages/FAQ.tsx` - Nueva Página

**Preguntas incluidas:**
1. ¿Cuánto cuesta una web?
2. ¿Cuánto tarda?
3. ¿Me aseguras salir primero en Google?
4. ¿Incluye SEO local?
5. ¿Puedo editar la web?
6. ¿Hay permanencia?

Usaremos el componente Accordion existente.

### 8. `src/pages/Contacto.tsx` - Rediseño

**Formulario de auditoría:**
- Campos: Nombre, Negocio, Teléfono, Email, Barrio/Ciudad, Mensaje
- Checkbox de privacidad
- Botón: [Solicitar auditoría]

**Click-to-call móvil:**
- Botón fijo en la parte inferior de la pantalla (solo móvil)

### 9. `src/components/Header.tsx` - Actualizar Navegación

**Links actualizados:**
- Home, Servicios, Precios, Proyectos, Contacto
- (FAQ y Proceso accesibles desde otras páginas)

### 10. `src/components/Footer.tsx` - Actualizar

**Añadir:**
- Texto de garantía: "Garantía técnica 90 días"
- Links a nuevas páginas (Precios, Proceso, FAQ)

### 11. `supabase/functions/send-contact-email/index.ts`

**Actualizar para nuevos campos:**
- Añadir campos: negocio, teléfono, barrio
- Actualizar template del email

---

## Componentes Reutilizables a Crear

### `src/components/PricingCard.tsx`
Tarjeta de precios reutilizable en Home y Precios.

### `src/components/MobileCallButton.tsx`
Botón fijo de llamada para móvil.

### `src/components/ProcessStep.tsx`
Paso del proceso de trabajo (reutilizable).

---

## Archivos Nuevos a Crear

```text
src/pages/Precios.tsx
src/pages/Proceso.tsx
src/pages/FAQ.tsx
src/components/PricingCard.tsx
src/components/MobileCallButton.tsx
```

---

## Integraciones Mencionadas

| Integración | Estado | Nota |
|-------------|--------|------|
| Formulario de contacto | Ya existe | Ampliar campos |
| Click-to-call | Nuevo | Componente móvil |
| Google Analytics | Externa | El usuario lo configura en su Google Account |
| Search Console | Externa | El usuario lo configura |
| Calendario de reservas | Evaluar | Podría añadirse con Calendly embed |

---

## Orden de Implementación

1. **Fase 1 - Estructura base**
   - Crear páginas nuevas (Precios, Proceso, FAQ)
   - Actualizar rutas en App.tsx
   - Actualizar Header y Footer

2. **Fase 2 - Contenido principal**
   - Rediseñar Home.tsx completo
   - Rediseñar Servicios.tsx
   - Rediseñar Contacto.tsx con nuevos campos

3. **Fase 3 - Detalles**
   - Ampliar Proyectos.tsx
   - Crear componente MobileCallButton
   - Actualizar edge function de email

4. **Fase 4 - Ajustes finales**
   - Revisar textos y tono
   - Verificar responsive
   - Probar formularios

---

## Sección Técnica

### Dependencias
No se requieren nuevas dependencias. Se usarán:
- `@radix-ui/react-accordion` (existente) para FAQ
- Componentes UI existentes (Button, Card, Input, etc.)

### Base de Datos
No se requieren cambios en la base de datos para esta fase.

### Edge Function
Se modificará `send-contact-email` para incluir los campos adicionales del formulario de auditoría (negocio, teléfono, barrio).

### SEO
Cada página nueva tendrá:
- Title y description optimizados
- Open Graph tags
- Canonical URL

