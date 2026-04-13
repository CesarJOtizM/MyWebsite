# Cesar Ortiz — Sitio Web de Portafolio Personal

> [English](./README.md) | Español

---

## Tabla de Contenidos

- [Descripción General](#descripción-general)
- [Stack Tecnológico](#stack-tecnológico)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Páginas y Funcionalidades](#páginas-y-funcionalidades)
- [Internacionalización](#internacionalización)
- [Sistema de Diseño](#sistema-de-diseño)
- [API y Backend](#api-y-backend)
- [SEO y Rendimiento](#seo-y-rendimiento)
- [Cómo Empezar](#cómo-empezar)
- [Variables de Entorno](#variables-de-entorno)
- [Scripts](#scripts)

---

## Descripción General

Sitio web de portafolio personal para **Cesar Javier Ortiz Montero** — Desarrollador Full Stack, CEO y Co-Fundador de [NevadaTech](https://nevadatech.dev). Construido para contar una narrativa centrada en el producto: desde contabilidad/finanzas hasta ingeniería de software y la fundación de una empresa.

El sitio resalta una filosofía de construcción de productos, no solo una lista de tecnologías — mostrando cómo Cesar piensa sobre arquitectura, sistemas y software a escala.

---

## Stack Tecnológico

| Categoría | Tecnología |
|---|---|
| Framework | Next.js 16 (App Router) |
| Librería UI | React 19 |
| Lenguaje | TypeScript 5 |
| Estilos | Tailwind CSS 4 |
| Animaciones | Motion/React 12 (Framer Motion) |
| Iconos | Lucide React |
| i18n | next-intl 4 |
| Tema | next-themes (modo oscuro/claro) |
| Email | Resend + React Email |
| Validación | Zod 4 |
| Analíticas | Vercel Analytics |
| Gestor de paquetes | Bun |

---

## Estructura del Proyecto

```
MyWebsite/
├── src/
│   ├── app/                        # App Router de Next.js
│   │   ├── [locale]/               # Rutas por idioma (/en, /es)
│   │   │   ├── page.tsx            # Página principal
│   │   │   ├── cv/page.tsx         # Página de descarga del CV
│   │   │   ├── projects/[slug]/    # Páginas de casos de estudio
│   │   │   ├── layout.tsx          # Layout del locale (proveedores)
│   │   │   └── not-found.tsx       # 404 dentro del locale
│   │   ├── api/contact/route.ts    # Endpoint del formulario de contacto
│   │   ├── manifest.ts             # Manifest PWA
│   │   ├── robots.ts               # Generación de robots.txt
│   │   └── sitemap.ts              # Generación de sitemap.xml
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── header.tsx          # Header fijo: nav, toggle tema, selector de idioma
│   │   │   ├── footer.tsx          # Pie de página
│   │   │   └── theme-provider.tsx  # Wrapper de next-themes
│   │   ├── sections/               # Secciones de la página principal
│   │   │   ├── hero.tsx            # Reveal del nombre, tagline, CTAs, redes sociales
│   │   │   ├── about.tsx           # Historia profesional y valores fundamentales
│   │   │   ├── how-i-think.tsx     # Filosofía de desarrollo en 5 pilares
│   │   │   ├── projects.tsx        # Grid de proyectos destacados
│   │   │   ├── experience.tsx      # Línea de tiempo laboral
│   │   │   ├── skills.tsx          # Habilidades por categoría
│   │   │   ├── nevadatech.tsx      # Sección de la empresa NevadaTech
│   │   │   └── contact.tsx         # Formulario de contacto con protección anti-spam
│   │   ├── ui/                     # Componentes UI reutilizables
│   │   │   ├── gradient-glow.tsx   # Blobs animados de fondo
│   │   │   ├── theme-toggle.tsx    # Botón de modo oscuro/claro
│   │   │   ├── language-switcher.tsx # Toggle EN/ES
│   │   │   ├── scroll-progress.tsx # Barra de progreso de scroll
│   │   │   └── lost-penguin.tsx    # Mascota ilustrada para el 404
│   │   ├── case-study/
│   │   │   └── case-study.tsx      # Layout reutilizable para casos de estudio
│   │   └── emails/
│   │       └── contact.tsx         # Plantilla de React Email
│   │
│   ├── content/                    # Datos de contenido estático
│   │   ├── projects/index.ts       # Metadatos de proyectos (slug, URLs)
│   │   ├── experience/index.ts     # Historial laboral
│   │   └── skills/index.ts         # Habilidades por categoría
│   │
│   ├── i18n/                       # Configuración de internacionalización
│   │   ├── routing.ts              # Config de locales (en, es)
│   │   ├── request.ts              # Helpers de i18n del lado servidor
│   │   └── navigation.ts           # Link/redirect con soporte i18n
│   │
│   ├── lib/
│   │   ├── utils.ts                # Utilidad cn() para combinar clases de Tailwind
│   │   └── validations.ts          # Schema Zod para el formulario de contacto
│   │
│   ├── styles/globals.css          # Estilos globales, animaciones, variables CSS
│   └── types/index.ts              # Tipos TypeScript globales
│
├── messages/
│   ├── en.json                     # Traducciones en inglés (~488 claves)
│   └── es.json                     # Traducciones en español (~488 claves)
│
└── public/
    ├── cv/                         # CVs en PDF (EN y ES)
    ├── team/                       # Fotos del equipo
    ├── nevadatech/                 # Logos y assets de la empresa
    └── penguin.svg                 # Mascota del 404
```

---

## Páginas y Funcionalidades

### Página Principal (`/[locale]`)

Ocho secciones de scroll componen la experiencia completa de la página:

1. **Hero** — Animación de reveal del nombre, tagline, botones CTA (Ver trabajo / Contactar), links a redes sociales.
2. **About** — Narrativa profesional (contabilidad → ingeniería → fundador), y 4 valores fundamentales:
   - Conceptos > Código
   - Arquitectura Primero
   - Fundamentos Antes que Frameworks
   - Construir Productos, No Proyectos
3. **How I Think** — Metodología de desarrollo en 5 pilares:
   - Entender el Dominio
   - Definir Fronteras
   - Elegir Patrones Intencionalmente
   - Construir con Confianza
   - Lanzar e Iterar
4. **Projects** — Grid de 3 proyectos destacados con links a demos en vivo y código fuente.
5. **Experience** — Línea de tiempo cronológica de roles profesionales.
6. **Skills** — Organizadas en 6 categorías (Frontend, Backend, Base de Datos, Arquitectura, Cloud, Herramientas) con 3 niveles de dominio (primary, production, familiar).
7. **NevadaTech** — Descripción de la empresa con miembros del equipo.
8. **Contact** — Formulario de contacto con validación en tiempo real, protección honeypot contra spam y envío vía Resend.

### Página del CV (`/[locale]/cv`)

Página dedicada para ver y descargar el currículum. Sirve archivos PDF según el idioma activo:
- `/en/cv` → `cesar-ortiz-cv-en.pdf`
- `/es/cv` → `cesar-ortiz-cv-es.pdf`

### Casos de Estudio (`/[locale]/projects/[slug]`)

Páginas individuales con análisis detallado de cada proyecto destacado:
- `nevada-demo` — Nevada Inventory System (destacado, demo en vivo)
- `meeting-scheduler` — Herramienta de agendamiento de reuniones (código disponible)
- `nevadatech` — Sitio web de NevadaTech

### Página 404

Página de error personalizada con la mascota **Pingüino Perdido** — un personaje SVG amigable con orientación de navegación.

---

## Internacionalización

Soporte bilingüe completo mediante **next-intl**:

| Característica | Detalle |
|---|---|
| Idiomas | Inglés (`en`), Español (`es`) |
| Estructura de URLs | `/en/...` y `/es/...` |
| Idioma por defecto | Inglés |
| Alcance | Todas las secciones, metadatos, emails y CVs |

Las traducciones se encuentran en `messages/en.json` y `messages/es.json`. El header incluye un selector de idioma que preserva la ruta actual al cambiar de idioma.

---

## Sistema de Diseño

**Fuentes:** Inter (sans-serif) + JetBrains Mono (monoespaciada) vía Google Fonts.

**Colores:**
- Acento principal: `#2563eb` (claro) / `#3b82f6` (oscuro)
- Modo oscuro/claro completo con propiedades CSS personalizadas

**Efectos Visuales Destacados:**
- Blobs animados con gradiente de fondo
- Barra de progreso de scroll en la parte superior
- Animaciones de reveal por palabras en la sección Hero
- Animaciones de entrada escalonadas vía IntersectionObserver
- Cajón de navegación móvil con física de resorte (spring)
- Superposición de textura de ruido para sensación premium
- Desenfoque de fondo (backdrop blur) en el header fijo

**Accesibilidad:**
- Estilos focus-visible en todo el sitio
- ARIA labels en elementos interactivos
- Soporte para `prefers-reduced-motion` en todas las animaciones

---

## API y Backend

### `POST /api/contact`

Maneja los envíos del formulario de contacto.

**Entrada (validada con Zod):**
```typescript
{
  name: string       // mínimo 2 caracteres
  email: string      // formato de email válido
  message: string    // mínimo 10 caracteres
  honeypot: string   // debe estar vacío (trampa para bots)
}
```

**Flujo:**
1. Validar entrada con el schema de Zod
2. Verificar el campo honeypot — rechazar si está relleno (bot detectado)
3. Renderizar la plantilla de React Email
4. Enviar vía API de Resend
5. Retornar `{ success: true }` o JSON de error

**Detalles del email:**
- De: `hello@cesarortiz.co`
- Reply-to: email del remitente
- Para: `cesarjavierortizmontero+website@gmail.com`

---

## SEO y Rendimiento

| Característica | Implementación |
|---|---|
| Metadatos | `generateMetadata()` por locale en cada página |
| Open Graph | Títulos, descripciones y tags con soporte de locale |
| Twitter Cards | Incluidos en los metadatos |
| Sitemap | Generado automáticamente en `/sitemap.xml` |
| robots.txt | Generado automáticamente en `/robots.txt` |
| Hreflang | Links de idioma alternativo para EN/ES |
| Formatos de imagen | WebP y AVIF vía optimización de imágenes de Next.js |
| Analíticas | Vercel Analytics (ligero, respetuoso con la privacidad) |
| Análisis de bundle | `ANALYZE=true bun run build` activa el analizador |

---

## Cómo Empezar

```bash
# Clonar el repositorio
git clone <repo-url>
cd MyWebsite

# Instalar dependencias
bun install

# Crear el archivo de variables de entorno
cp .env.example .env.local

# Iniciar el servidor de desarrollo
bun dev
```

Abre [http://localhost:3000](http://localhost:3000) — redirige a `/en` por defecto.

---

## Variables de Entorno

| Variable | Descripción |
|---|---|
| `RESEND_API_KEY` | API key de [resend.com](https://resend.com) — requerida para el formulario de contacto |

---

## Scripts

```bash
bun dev        # Iniciar servidor de desarrollo (http://localhost:3000)
bun build      # Crear build de producción
bun start      # Iniciar servidor de producción
bun lint       # Ejecutar ESLint
ANALYZE=true bun build  # Build + abrir analizador de tamaño de bundle
```
