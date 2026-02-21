<script setup lang="ts">
const steps = [
  ['Discovery', 'Diskusi kebutuhan, goal bisnis, dan scope proyek.'],
  ['Planning', 'Pembuatan roadmap, timeline, dan resource allocation.'],
  ['Design & Prototype', 'UI/UX design + clickable prototype untuk approval.'],
  ['Development', 'Pengembangan aplikasi sesuai desain dan kebutuhan yang telah disepakati.'],
  ['Review & Revision', 'Revisi aplikasi berdasarkan feedback dari klien.'],
  ['Deployment', 'Deploy ke production server dan konfigurasi final.'],
  ['Support', 'Maintenance, monitoring, dan dukungan teknis berkelanjutan.'],
]
</script>

<template>
  <section class="py-32 px-6 bg-black relative selection:bg-white selection:text-black">
    <div class="max-w-4xl mx-auto">
      
      <div class="mb-24" data-aos="fade-right">
        <div class="flex items-center gap-4 mb-4">
          <div class="h-[1px] w-12 bg-white"></div>
          <span class="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-500">Operation Pipeline</span>
        </div>
        <h2 class="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
          ALUR <span class="text-transparent text-outline-white italic">PROSES</span>
        </h2>
      </div>

      <div class="relative">
        <div class="absolute left-4 md:left-[2.25rem] top-0 bottom-0 w-[1px] bg-zinc-900"></div>

        <div
          v-for="(step, index) in steps"
          :key="index"
          class="relative pl-12 md:pl-24 mb-20 last:mb-0 group"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div class="absolute left-0 md:left-4 top-0 flex items-center justify-center">
            <div class="w-9 h-9 md:w-11 md:h-11 border border-zinc-800 bg-black flex items-center justify-center transition-all duration-500 group-hover:border-white group-hover:rotate-45">
              <span class="text-[10px] font-black text-zinc-600 group-hover:text-white group-hover:-rotate-45 transition-all duration-500">
                0{{ index + 1 }}
              </span>
            </div>
          </div>

          <div class="grid md:grid-cols-12 gap-4 items-start">
            <div class="md:col-span-4">
              <h3 class="text-lg font-black text-white uppercase tracking-tighter group-hover:translate-x-2 transition-transform duration-500 flex items-center gap-3">
                {{ step[0] }}
                <span class="h-[1px] w-0 bg-white group-hover:w-8 transition-all duration-500"></span>
              </h3>
            </div>
            
            <div class="md:col-span-8">
              <p class="text-zinc-500 text-xs md:text-sm leading-relaxed uppercase tracking-widest max-w-md group-hover:text-zinc-300 transition-colors duration-500">
                {{ step[1] }}
              </p>
            </div>
          </div>

          <div class="mt-4 flex gap-4 opacity-20 group-hover:opacity-100 transition-opacity duration-700">
            <span class="text-[8px] font-mono text-zinc-600 uppercase tracking-widest">Status: Ready</span>
            <span class="text-[8px] font-mono text-zinc-600 uppercase tracking-widest">Process_ID: 00{{ index + 1 }}</span>
            <span class="text-[8px] font-mono text-zinc-600 uppercase tracking-widest">Exec_Time: Variable</span>
          </div>
        </div>
      </div>

      <div class="mt-32 p-10 border border-white/5 bg-zinc-950/50 backdrop-blur-sm text-center relative overflow-hidden group" data-aos="zoom-in">
        <div class="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <p class="text-zinc-500 text-[10px] uppercase tracking-[0.4em] mb-6">Siap untuk memulai siklus pengembangan?</p>
        <a href="#kontak" class="text-white text-2xl font-black uppercase tracking-tighter hover:italic transition-all">
          Inisialisasi Proyek Sekarang —>
        </a>
      </div>

    </div>
  </section>
</template>

<style scoped>
.text-outline-white {
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
}

/* Hide scrollbar for clean aesthetic */
section {
  scrollbar-width: none;
}
</style>