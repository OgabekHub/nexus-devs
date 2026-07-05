---
title: "Next.js va React Three Fiber bilan 3D Veb-saytlar"
date: "2026-06-15"
desc: "Veb-saytlarda 3D modellarni (Canvas) qanday qilib server-side rendering muammolarisiz ishlatish mumkinligi haqida batafsil qo'llanma."
---

# Next.js va React Three Fiber

Bugungi kunda veb-dasturlashda 3D grafikalardan foydalanish juda ommalashgan. `React Three Fiber` (R3F) bu borada eng zo'r vositalardan biridir. Ammo uni Next.js bilan ishlatishda ba'zi qiyinchiliklar mavjud, ayniqsa Server-Side Rendering (SSR) bilan ishlaganda.

## Nima uchun SSR da xatolik beradi?

`three.js` kutubxonasi brauzerning WebGL API'siga qaram. Next.js esa sahifalarni serverda render qiladi, serverda (Node.js) esa brauzerning oynasi (`window`) va WebGL mavjud emas. Shuning uchun, R3F komponentlarini to'g'ridan-to'g'ri chaqirib bo'lmaydi.

## Qanday qilib to'g'rilash mumkin?

Next.js da komponentni faqat mijoz (client) tomonida render qilish uchun `next/dynamic` dan foydalanish eng to'g'ri yo'ldir:

```tsx
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("./Scene"), {
  ssr: false,
});

export default function App() {
  return (
    <div>
      <Scene />
    </div>
  );
}
```

Bu usul orqali sizning 3D sahnalaringiz qotmasdan va xatolarsiz yuklanadi!
