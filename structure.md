## Structure Folder

```
src/
├── api/ # Fungsi untuk fetch data ke Backend (Express + Prisma tadi)
├── assets/ # Global images & styles
├── components/ # Global & UI Components
│ ├── ui/ # Button, Input, Modal (Shadcn-like)
│ └── shared/ # Navbar, Footer, Sidebar
├── composables/ # Logic yang bisa dipakai ulang (useAuth, usePagination)
├── layouts/ # Wrapper halaman (DefaultLayout.vue, AuthLayout.vue)
├── router/ # Konfigurasi Vue Router
│ └── index.ts
├── store/ # State Management (Pinia)
├── views/ # Halaman Utama (Pages)
│ ├── home/ # Folder per halaman besar
│ │ ├── components/ # Komponen khusus halaman Home saja
│ │ └── HomeView.vue
│ ├── blog/
│ │ ├── BlogList.vue
│ │ └── BlogDetail.vue
│ └── about/
│ └── AboutView.vue
└── types/ # Definisi interface TypeScript
```
