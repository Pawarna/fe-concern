<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
</script>
<template>
  <DefaultLayout>
    <main class="pt-20 md:pt-24 pb-20">
      <section class="px-6">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16" data-aos="fade-up">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">Paket Layanan Concern</h1>
            <p class="text-xl text-slate-400 max-w-3xl mx-auto">
              Pilih paket sesuai kebutuhan bisnis Anda. Konsultasi awal gratis, clean code, dan
              support purna jual sudah termasuk.
            </p>
          </div>

          <!-- PAKET UTAMA (3 card terpisah) -->
          <!-- PAKET UTAMA (UPGRADED UI) -->
          <div class="grid md:grid-cols-3 gap-10 mb-24">
            <!-- BASIC -->
            <div
              class="relative group bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-3xl p-10 hover:border-concern-primary transition-all duration-300 shadow-xl hover:shadow-indigo-900/40 flex flex-col"
            >
              <div class="mb-8">
                <span class="text-sm text-slate-400">Untuk UMKM & Personal</span>
                <h3 class="text-3xl font-bold mt-2">🥉 Basic Website</h3>
              </div>

              <div class="mb-8">
                <div class="text-5xl font-extrabold text-white">Rp 2.5JT</div>
                <p class="text-slate-400 mt-2">Sekali bayar, tanpa biaya bulanan</p>
              </div>

              <ul class="space-y-4 text-slate-300 flex-1">
                <li class="flex gap-3">
                  <span class="text-concern-accent">✓</span> Maksimal 5 halaman
                </li>
                <li class="flex gap-3">
                  <span class="text-concern-accent">✓</span> Responsive mobile
                </li>
                <li class="flex gap-3">
                  <span class="text-concern-accent">✓</span> Desain modern & clean
                </li>
                <li class="flex gap-3">
                  <span class="text-concern-accent">✓</span> Form kontak + WhatsApp
                </li>
                <li class="flex gap-3">
                  <span class="text-concern-accent">✓</span> 1x revisi minor
                </li>
                <li class="flex gap-3">
                  <span class="text-concern-accent">✓</span> Estimasi 7–10 hari
                </li>
              </ul>

              <RouterLink
                :to="{ path: '/', hash: '#kontak' }"
                class="mt-10 py-4 rounded-xl text-center font-semibold bg-slate-700 hover:bg-concern-primary transition"
              >
                Pilih Paket Basic
              </RouterLink>
            </div>

            <!-- BUSINESS (HIGHLIGHTED) -->
            <div
              class="relative group bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-concern-accent rounded-3xl p-10 shadow-2xl shadow-cyan-900/40 flex flex-col scale-105"
            >
              <div
                class="absolute -top-4 left-1/2 -translate-x-1/2 bg-concern-accent text-slate-900 px-6 py-2 text-sm font-bold rounded-full shadow-lg"
              >
                best seller
              </div>

              <div class="mb-8 mt-4">
                <span class="text-sm text-slate-400">Untuk bisnis berkembang</span>
                <h3 class="text-3xl font-bold mt-2">🥈 Business Website</h3>
              </div>

              <div class="mb-8">
                <div class="text-5xl font-extrabold text-white">Rp 4.5JT</div>
                <p class="text-slate-400 mt-2">Investasi terbaik untuk scale up</p>
              </div>

              <ul class="space-y-4 text-slate-300 flex-1">
                <li class="flex gap-3"><span class="text-concern-accent">✓</span> 8–10 halaman</li>
                <li class="flex gap-3">
                  <span class="text-concern-accent">✓</span> CMS (update sendiri)
                </li>
                <li class="flex gap-3"><span class="text-concern-accent">✓</span> Blog system</li>
                <li class="flex gap-3"><span class="text-concern-accent">✓</span> SEO basic</li>
                <li class="flex gap-3">
                  <span class="text-concern-accent">✓</span> Google Analytics
                </li>
                <li class="flex gap-3">
                  <span class="text-concern-accent">✓</span> Training 1 sesi
                </li>
                <li class="flex gap-3"><span class="text-concern-accent">✓</span> 2x revisi</li>
                <li class="flex gap-3"><span class="text-concern-accent">✓</span> ±14 hari</li>
              </ul>

              <RouterLink
                :to="{ path: '/', hash: '#kontak' }"
                class="mt-10 py-4 rounded-xl text-center font-semibold bg-concern-accent hover:bg-cyan-500 text-slate-900 transition"
              >
                Pilih Paket Business
              </RouterLink>
            </div>

            <!-- SYSTEM STARTER -->
            <div
              class="relative group bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-3xl p-10 hover:border-purple-500 transition-all duration-300 shadow-xl hover:shadow-purple-900/40 flex flex-col"
            >
              <div class="mb-8">
                <span class="text-sm text-slate-400">Butuh sistem & dashboard?</span>
                <h3 class="text-3xl font-bold mt-2">🥇 System Starter</h3>
              </div>

              <div class="mb-8">
                <div class="text-5xl font-extrabold text-white">Rp 7JT – 12JT</div>
                <p class="text-slate-400 mt-2">Custom system sesuai kebutuhan</p>
              </div>

              <ul class="space-y-4 text-slate-300 flex-1">
                <li class="flex gap-3">
                  <span class="text-purple-400">✓</span> Login multi-user + Role
                </li>
                <li class="flex gap-3">
                  <span class="text-purple-400">✓</span> Dashboard statistik
                </li>
                <li class="flex gap-3">
                  <span class="text-purple-400">✓</span> CRUD system lengkap
                </li>
                <li class="flex gap-3">
                  <span class="text-purple-400">✓</span> Database terstruktur
                </li>
                <li class="flex gap-3"><span class="text-purple-400">✓</span> Export Excel/PDF</li>
                <li class="flex gap-3"><span class="text-purple-400">✓</span> Dokumentasi basic</li>
                <li class="flex gap-3"><span class="text-purple-400">✓</span> 2–3 revisi</li>
                <li class="flex gap-3"><span class="text-purple-400">✓</span> 3–6 minggu</li>
              </ul>

              <RouterLink
                :to="{ path: '/', hash: '#kontak' }"
                class="mt-10 py-4 rounded-xl text-center font-semibold bg-slate-700 hover:bg-purple-600 transition"
              >
                Konsultasi System
              </RouterLink>
            </div>
          </div>

          <!-- SECTION SERVICE SATUAN (terpisah, bukan card harga) -->
          <!-- SECTION SERVICE SATUAN (IMPROVED UI) -->
          <div class="mt-24 pt-20 border-t border-slate-800" data-aos="fade-up">
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-6">Service Satuan</h2>
            <p class="text-center text-slate-400 mb-14 max-w-3xl mx-auto">
              Tidak perlu ambil paket penuh. Ambil hanya bagian yang Anda butuhkan. Mulai dari
              <span class="text-concern-accent font-semibold">Rp 300.000</span>.
            </p>

            <div class="grid md:grid-cols-3 gap-10">
              <!-- UI/UX -->
              <div
                class="group relative bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-3xl p-8 hover:border-concern-accent transition-all duration-300 shadow-xl hover:shadow-cyan-900/40"
              >
                <div
                  class="absolute -top-4 left-6 bg-concern-accent text-slate-900 px-4 py-1 text-xs font-bold rounded-full shadow-lg"
                >
                  Design
                </div>

                <div class="mb-6">
                  <div
                    class="w-14 h-14 rounded-2xl bg-concern-accent/10 flex items-center justify-center mb-4 group-hover:bg-concern-accent/20 transition"
                  >
                    🎨
                  </div>
                  <h3 class="text-2xl font-bold text-white">UI/UX Design</h3>
                </div>

                <ul class="space-y-4 text-slate-300">
                  <li class="flex justify-between">
                    <span>Landing Page Design</span>
                    <span class="text-concern-accent font-semibold">Rp 300K</span>
                  </li>
                  <li class="flex justify-between">
                    <span>Website 5 Halaman (Figma)</span>
                    <span class="text-concern-accent font-semibold">Rp 800K</span>
                  </li>
                  <li class="flex justify-between">
                    <span>Dashboard UI</span>
                    <span class="text-concern-accent font-semibold">Rp 1.2JT</span>
                  </li>
                </ul>

                <RouterLink
                  :to="{ path: '/', hash: '#kontak' }"
                  class="mt-8 block text-center py-3 rounded-xl bg-slate-700 hover:bg-concern-accent hover:text-slate-900 transition font-semibold"
                >
                  Pesan Design
                </RouterLink>
              </div>

              <!-- FRONTEND -->
              <div
                class="group relative bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-3xl p-8 hover:border-concern-accent transition-all duration-300 shadow-xl hover:shadow-indigo-900/40"
              >
                <div
                  class="absolute -top-4 left-6 bg-concern-primary text-white px-4 py-1 text-xs font-bold rounded-full shadow-lg"
                >
                  Frontend
                </div>

                <div class="mb-6">
                  <div
                    class="w-14 h-14 rounded-2xl bg-concern-primary/10 flex items-center justify-center mb-4 group-hover:bg-concern-primary/20 transition"
                  >
                    💻
                  </div>
                  <h3 class="text-2xl font-bold text-white">Frontend Dev</h3>
                </div>

                <ul class="space-y-4 text-slate-300">
                  <li class="flex justify-between">
                    <span>1 Halaman Statis</span>
                    <span class="text-concern-primary font-semibold">Rp 350K</span>
                  </li>
                  <li class="flex justify-between">
                    <span>Landing Page Full</span>
                    <span class="text-concern-primary font-semibold">Rp 900K</span>
                  </li>
                  <li class="flex justify-between">
                    <span>Figma to HTML</span>
                    <span class="text-concern-primary font-semibold">Rp 500K+</span>
                  </li>
                </ul>

                <RouterLink
                  :to="{ path: '/', hash: '#kontak' }"
                  class="mt-8 block text-center py-3 rounded-xl bg-slate-700 hover:bg-concern-primary transition font-semibold"
                >
                  Pesan Frontend
                </RouterLink>
              </div>

              <!-- BACKEND -->
              <div
                class="group relative bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-3xl p-8 hover:border-concern-accent transition-all duration-300 shadow-xl hover:shadow-purple-900/40"
              >
                <div
                  class="absolute -top-4 left-6 bg-purple-600 text-white px-4 py-1 text-xs font-bold rounded-full shadow-lg"
                >
                  Backend
                </div>

                <div class="mb-6">
                  <div
                    class="w-14 h-14 rounded-2xl bg-purple-600/10 flex items-center justify-center mb-4 group-hover:bg-purple-600/20 transition"
                  >
                    🛠️
                  </div>
                  <h3 class="text-2xl font-bold text-white">Backend Dev</h3>
                </div>

                <ul class="space-y-4 text-slate-300">
                  <li class="flex justify-between">
                    <span>Auth + Database</span>
                    <span class="text-purple-400 font-semibold">Rp 800K</span>
                  </li>
                  <li class="flex justify-between">
                    <span>CRUD System</span>
                    <span class="text-purple-400 font-semibold">Rp 700K+</span>
                  </li>
                  <li class="flex justify-between">
                    <span>API Integration</span>
                    <span class="text-purple-400 font-semibold">Rp 500K+</span>
                  </li>
                  <li class="flex justify-between">
                    <span>Dashboard Logic</span>
                    <span class="text-purple-400 font-semibold">Rp 1JT+</span>
                  </li>
                </ul>

                <RouterLink
                  :to="{ path: '/', hash: '#kontak' }"
                  class="mt-8 block text-center py-3 rounded-xl bg-slate-700 hover:bg-purple-600 transition font-semibold"
                >
                  Pesan Backend
                </RouterLink>
              </div>
            </div>
          </div>

          <!-- CTA Besar di Bawah -->
          <div class="text-center mt-20">
            <p class="text-2xl font-semibold text-slate-200 mb-8">
              Siap mulai project? Mari diskusikan kebutuhan Anda.
            </p>
            <RouterLink
              :to="{ path: '/', hash: '#kontak' }"
              class="inline-flex items-center px-12 py-6 bg-gradient-to-r from-concern-accent to-cyan-500 hover:from-cyan-500 hover:to-concern-accent rounded-2xl font-bold text-slate-900 text-2xl shadow-2xl shadow-cyan-900/50 transition-all duration-300 transform hover:scale-105"
            >
              Konsultasi Gratis Sekarang
              <svg class="w-7 h-7 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </RouterLink>
          </div>
        </div>
      </section>
    </main>
  </DefaultLayout>
</template>
