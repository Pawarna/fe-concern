<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

// Definisi Interface untuk Type Safety
interface Project {
  id: number
  title: string
  description: string
  imageUrl: string // Sesuai kolom database kamu
  link: string
  tags?: [
    {
      id: Number
      name: string
    },
  ]
}

const projects = ref<Project[]>([])
const loading = ref(true)
const errorMsg = ref('')

// Ambil data dari backend saat komponen dimuat
onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/portofolio') // Sesuaikan URL
    projects.value = response.data.result
  } catch (err: any) {
    errorMsg.value = 'Gagal memuat proyek. Silakan coba lagi nanti.'
    console.error(err)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <section id="portfolio" class="py-32 px-6 bg-black relative selection:bg-white selection:text-black">
    <div class="absolute inset-0 pointer-events-none opacity-[0.03]">
      <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
    </div>

    <div class="max-w-7xl mx-auto relative z-10">
      <div class="flex flex-col md:flex-row items-end justify-between mb-24 gap-8" data-aos="fade-up">
        <div class="max-w-2xl">
          <div class="flex items-center gap-3 mb-6">
            <span class="w-8 h-[1px] bg-white"></span>
            <span class="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-500">Selected Artifacts</span>
          </div>
          <h2 class="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9]">
            WORKS <span class="text-transparent text-outline-white italic">& CASES</span>
          </h2>
        </div>
        <p class="text-zinc-500 max-w-xs text-[11px] uppercase tracking-[0.2em] leading-6 md:text-right">
          Manifestasi kode dan desain ke dalam <span class="text-white">solusi digital</span> fungsional.
        </p>
      </div>

      <div v-if="loading" class="py-32 text-center border-t border-white/5">
        <div class="w-12 h-12 border border-white/20 border-t-white animate-spin mx-auto mb-6"></div>
        <p class="text-[10px] uppercase tracking-[0.4em] text-zinc-600 font-mono">Accessing_Repository...</p>
      </div>

      <div v-else-if="errorMsg" class="p-10 border border-white/10 bg-white/5 text-center">
        <p class="text-xs uppercase tracking-widest text-white italic">Error: {{ errorMsg }}</p>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
        <a
          :href="project.link"
          target="_blank"
          v-for="(project, index) in projects"
          :key="project.id"
          class="group relative bg-black p-8 md:p-12 transition-all duration-700 overflow-hidden block"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div class="aspect-video mb-10 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-1000">
            <img
              :src="project.imageUrl || 'https://via.placeholder.com/800x600?text=NO_ASSET'"
              :alt="project.title"
              class="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
            />
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-[2000ms] ease-in-out"></div>
          </div>

          <div class="relative z-10">
            <div class="flex justify-between items-start mb-4">
              <h3 class="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter group-hover:italic transition-all">
                {{ project.title }}
              </h3>
              <span class="text-[10px] font-mono text-zinc-700">00{{ index + 1 }}</span>
            </div>

            <p class="text-zinc-500 text-xs leading-relaxed uppercase tracking-widest max-w-md mb-8 group-hover:text-zinc-300 transition-colors">
              {{ project.description || 'System detailed architecture documentation pending.' }}
            </p>

            <div v-if="project.tags && project.tags.length > 0" class="flex flex-wrap gap-x-4 gap-y-2">
              <span
                v-for="tag in project.tags"
                :key="tag.name"
                class="text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-600 border-b border-zinc-800 pb-1 group-hover:text-white group-hover:border-white transition-all"
              >
                // {{ tag.name }}
              </span>
            </div>
          </div>

          <div class="absolute top-8 right-8 w-12 h-12 border border-white/0 group-hover:border-white/20 transition-all duration-500 flex items-center justify-center">
             <svg class="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="square" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
             </svg>
          </div>
        </a>
      </div>

      <div v-if="!loading && projects.length === 0" class="py-32 text-center border border-white/5">
        <p class="text-[10px] uppercase tracking-[0.4em] text-zinc-700">Repository_Empty</p>
      </div>

    </div>
  </section>
</template>

<style scoped>
.text-outline-white {
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
}

/* Custom Grid Gap Effect */
.grid {
  gap: 1px; /* Membuat garis antar grid menggunakan background parent */
}
</style>