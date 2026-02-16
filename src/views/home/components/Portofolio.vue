<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

// Definisi Interface untuk Type Safety
interface Project {
  id: number
  title: string
  description: string
  imageUrl: string // Sesuai kolom database kamu
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
  <section id="portfolio" class="py-20 px-6 bg-concern-dark text-white">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-4xl md:text-5xl font-bold text-center mb-4" data-aos="fade-up">Portofolio</h2>
      <p
        class="text-xl text-slate-400 text-center mb-16 max-w-3xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Beberapa proyek terpilih yang menunjukkan keahlian dalam pengembangan web dan desain.
      </p>

      <div v-if="loading" class="text-center py-20">
        <div
          class="animate-spin rounded-full h-12 w-12 border-t-2 border-concern-accent mx-auto"
        ></div>
        <p class="mt-4 text-slate-400 font-display">Menyelam ke database...</p>
      </div>

      <div
        v-else-if="errorMsg"
        class="p-6 bg-red-900/40 border border-red-700 rounded-xl text-center text-red-300 mb-12"
      >
        {{ errorMsg }}
      </div>

      <div
        v-else-if="projects.length === 0"
        class="p-6 bg-slate-800/60 border border-slate-700 rounded-xl text-center text-slate-400 mb-12"
      >
        Belum ada proyek yang ditampilkan saat ini.
      </div>

      <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="project.id"
          class="group relative overflow-hidden rounded-xl bg-slate-800/40 border border-slate-700 hover:border-concern-accent transition-all duration-300"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div class="aspect-[4/3] overflow-hidden">
            <img
              :src="
                project.imageUrl
                  ? `${project.imageUrl}`
                  : 'https://via.placeholder.com/800x600?text=No+Image'
              "
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
            <p class="text-slate-400 mb-4 line-clamp-2">
              {{ project.description || 'No description available' }}
            </p>

            <div v-if="project.tags && project.tags.length > 0" class="flex flex-wrap gap-2">
              <span
                v-for="tag in project.tags"
                :key="tag.name"
                class="px-3 py-1 bg-slate-700 rounded-full text-xs text-concern-accent"
              >
                {{ tag.name }}
              </span>
            </div>
          </div>

          <div
            class="absolute inset-0 bg-gradient-to-t from-concern-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>
