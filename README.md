hola-live/
│
├── index.html             (Cinematic Landing / Splash / Enter PWA)
├── app.html               (Main App Shell, Live / Dashboard wrapper)
├── live.html              (Live Stream page)
├── vip.html               (VIP Room page)
├── shop.html              (Token Shop page)
├── ledger.html            (Transaction / Token History)
├── moderator.html         (Moderator panel)
├── streamer.html          (Streamer analytics / gift dashboard)
│
├── assets/
│   ├── css/
│   │   ├── reset.css
│   │   ├── variables.css
│   │   ├── layout.css
│   │   ├── components.css
│   │   └── animations.css
│   │
│   ├── js/
│   │   ├── app.js         (Init, router, page loader)
│   │   ├── state.js       (Global token / VIP / user state)
│   │   ├── router.js      (Page navigation)
│   │   ├── economy.js     (Token / gift logic)
│   │   ├── ui.js          (DOM updates, toast, modal)
│   │   └── effects.js     (Particles, glow, animations)
│   │
│   ├── audio/
│   │   ├── gift.mp3
│   │   └── click.mp3
│   │
│   └── img/
│       ├── logo.svg
│       ├── splash-bg.jpg
│       └── icons/        (favicon, app icons 192x192, 512x512)
│
├── manifest.json          (PWA install config)
├── service-worker.js      (Offline + cache support)
└── README.md
