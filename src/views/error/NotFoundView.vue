<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.push('/')
}

const goBack = () => {
  router.back()
}
</script>

<template>
  <div class="min-h-screen bg-slate-950 flex items-center justify-center px-6 font-sans">
    <div class="text-center max-w-xl">
      <div class="relative mb-8" data-aos="zoom-in">
        <h1 class="text-[10rem] md:text-[14rem] font-bold text-slate-900 leading-none select-none">
          404
        </h1>
        <div class="absolute inset-0 flex items-center justify-center">
          <p
            class="text-2xl md:text-3xl font-bold text-white uppercase tracking-widest bg-slate-950 px-4"
          >
            Halaman Hilang
          </p>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-delay="200">
        <h2 class="text-xl text-slate-400 mb-8 leading-relaxed">
          Ups! Sepertinya kamu tersesat di dimensi lain. Halaman yang kamu cari tidak ditemukan atau
          sudah dipindahkan.
        </h2>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            @click="goHome"
            class="w-full sm:w-auto px-8 py-3 bg-concern-primary hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-indigo-500/20"
          >
            Kembali ke Beranda
          </button>

          <button
            @click="goBack"
            class="w-full sm:w-auto px-8 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold rounded-xl transition-all duration-300"
          >
            Kembali ke Sebelumnya
          </button>
        </div>
      </div>

      <div class="mt-16 flex justify-center gap-3 opacity-20">
        <div class="w-2 h-2 rounded-full bg-concern-accent animate-ping"></div>
        <div
          class="w-2 h-2 rounded-full bg-concern-primary animate-ping [animation-delay:200ms]"
        ></div>
        <div
          class="w-2 h-2 rounded-full bg-concern-accent animate-ping [animation-delay:400ms]"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Menambahkan sedikit efek glow pada teks 404 di belakang */
h1 {
  text-shadow: 0 0 30px rgba(99, 102, 241, 0.05);
}
</style>
