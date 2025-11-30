# PRESTIKA – React + Vite + TailwindCSS

Project ini adalah aplikasi dashboard prestasi (Achievement Dashboard) yang dibangun menggunakan React, Vite, TailwindCSS, serta beberapa komponen UI kustom untuk menampilkan statistik, leaderboard, grafik, dan data prestasi dari pengguna (admin & client).

Aplikasi ini terdiri dari dua role utama:

Admin – mengelola data prestasi, melihat statistik, dan mengatur tampilan.

Client (Mahasiswa) – menambah prestasi, melihat perkembangan KPI, leaderboard, dan grafik pribadi.

# 🚀 Tech Stack
```
1. React.js (Vite)
2. TailwindCSS v4
3. Custom UI Components
4. React Router
5. Charts (implementasi pada StatChart, PaiKategori, BarFakultas, dll.)
```

# 📂 Struktur Project
```
prestika/
├── components/
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── textarea.tsx
│
├── lib/
│   └── utils.ts
│
├── public/
│   └── vite.svg
│
├── src/
│   ├── assets/
│   │   ├── gb1.png
│   │   └── react.svg
│   │
│   ├── components/
│   │   ├── auth/
│   │   ├── ui/
│   │   │   ├── BarFakultas.jsx
│   │   │   ├── Carousel.jsx
│   │   │   ├── ImageWelcome.jsx
│   │   │   ├── KpiCards.jsx
│   │   │   ├── LineTimeline.jsx
│   │   │   ├── Modal.jsx
│   │   │   ├── PaiKategori.jsx
│   │   │   ├── RecentAchievements.jsx
│   │   │   ├── RecentAchievementsUhamka.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── StatChart.jsx
│   │   │   ├── SubmitAchievement.jsx
│   │   │   └── TopPerformers.jsx
│   │   └── UhamkaChart.jsx
│   │
│   ├── css/
│   │   ├── App.css
│   │   └── index.css
│   │
│   ├── layouts/
│   │   ├── lib/
│   │   │   └── utils.ts
│   │   ├── Footer.jsx
│   │   ├── General.jsx
│   │   └── Navigation.jsx
│   │
│   ├── pages/
│   │   ├── admin/
│   │   │   ├── admin-layout/
│   │   │   │   ├── All.jsx
│   │   │   │   ├── Bottom.jsx
│   │   │   │   └── Sidebar.jsx
│   │   │   └── Home.jsx
│   │   │
│   │   ├── client/
│   │   │   ├── client-layout/
│   │   │   │   ├── All.jsx
│   │   │   │   ├── Bottom.jsx
│   │   │   │   └── Sidebar.jsx
│   │   │   ├── AddAch.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Leaderboard.jsx
│   │   │   ├── MyAch.jsx
│   │   │   └── UhamkaAch.jsx
│   │
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.js
└── README.md

```

# 📦 Instalasi

Pastikan Node.js minimal 16+

1. Clone repository
```
git clone https://github.com/Platotel3s/prestika.git
cd achievement-dashboard
```
2. Install dependencies
```
npm install
npm install tailwind tailwindcss@latest
npm install react react-dom react-router
npm install chartjs
```
3. Jalankan project
```
npm run dev
http://localhost:5173
```

# 🧩 Fitur Utama
###👤 Admin

Dashboard statistik

Grafik fakultas & kategori prestasi

Timeline KPI

Daftar prestasi terbaru

Manajemen prestasi seluruh user

### 🧑‍🎓 Client (Mahasiswa)

Halaman utama berisi KPI, grafik, dan prestasi terbaru

Upload / tambah prestasi (SubmitAchievement.jsx)

Melihat leaderboard

Melihat prestasi pribadi

Prestasi kategori UHAMKA

### 📊 Komponen Chart

StatChart – grafik garis / progress KPI

PaiKategori – pie chart kategori prestasi

BarFakultas – grafik batang per fakultas

TopPerformers – ranking user

RecentAchievements – prestasi terbaru

# Contributor
1. Muhamad Syafrizal Ikhsan (2303015126)
2. Syaiful Yudha Platoteles (2203015129)
3. Haditya Pandu Winanta (2203015012)
