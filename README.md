# Coach Carlos Herrán — Sistema de 5 Pasos para Asegurar Listings en Exclusiva

Landing page de ventas para el programa de coaching inmobiliario de Carlos Herrán, orientado a agentes inmobiliarios que quieren dominar la técnica de captación en exclusiva.

## Sobre el Proyecto

- **Cliente:** Carlos Herrán — Coach Inmobiliario
- **Desarrollador:** [DeerSystems](https://deersystems.net)
- **Stack:** React 19 + TypeScript + Vite + Tailwind CSS v4
- **Animaciones:** Motion (Framer Motion)
- **IA:** Google Gemini API (`@google/genai`)

## Estructura de la Página

| Sección | Componente | Descripción |
|---------|-----------|-------------|
| Header | `Header.tsx` | Navegación fija con logo y CTA |
| Hero | `Hero.tsx` | Propuesta de valor principal |
| Evento | `EventSection.tsx` | Detalles del taller / programa |
| Precios | `Pricing.tsx` | Planes y modal de checkout |
| Footer | `Footer.tsx` | Información de contacto |

## Cómo correr el proyecto localmente

**Requisitos:** Node.js 18+

1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Copiar variables de entorno y agregar la clave de Gemini:
   ```bash
   cp .env.example .env.local
   # Editar .env.local y poner GEMINI_API_KEY=tu_clave
   ```

3. Correr en desarrollo:
   ```bash
   npm run dev
   ```
   La app queda disponible en `http://localhost:3000`

4. Build de producción:
   ```bash
   npm run build
   ```

## Docker

```bash
docker-compose up --build
```

## Versiones

- **v1.0 — Versión estable** — Sistema de 5 Pasos para Asegurar Listings en Exclusiva (tag: `v1.0-estable`)

---

Desarrollado por [DeerSystems](https://deersystems.net)
