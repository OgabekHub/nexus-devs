# Nexus Devs

Next.js 14 + TypeScript + Tailwind + Three.js (react-three-fiber) landing page.

## Ishga tushirish

```bash
npm install
npm run dev
```

`http://localhost:3000` da ochiladi.

## Stack

| Qatlam | Texnologiya |
|---|---|
| Framework | Next.js 14 (App Router) |
| Til | TypeScript |
| Styling | Tailwind CSS |
| 3D | Three.js + @react-three/fiber + @react-three/drei |
| Fonts | Space Grotesk, Inter, JetBrains Mono (next/font) |

## Struktura

```
app/
  layout.tsx      — root layout, fontlar
  page.tsx        — bosh sahifa
  globals.css     — global stillar
components/
  Nav.tsx
  Hero.tsx           — client component, 3D grafni dynamic import qiladi
  NexusGraph3D.tsx   — Three.js sahna (client-only, "use client")
  Services.tsx
  Work.tsx
  About.tsx
  Contact.tsx
  Footer.tsx
```

## Muhim eslatma (Three.js + SSR)

`NexusGraph3D` component `next/dynamic` orqali `ssr: false` bilan yuklanadi
(`Hero.tsx` ichida), chunki Three.js WebGL/canvas API'lariga tayanadi va
serverda ishlamaydi.

## Keyingi qadamlar

- [ ] Telegram havolasini `Contact.tsx` da yangilash
- [ ] Portfolio linklarini (`Work.tsx`) real loyihalarga ulash
- [ ] `nexusdevs.dev` domenini Vercel'ga ulash
