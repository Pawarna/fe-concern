<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { api } from '@/api'

interface News {
  id: number
  title: string
  slug: string
  content: string // Berupa String JSON dari database
  thumbnail: string
  status: string
  author: { username: string }
  createdAt: string
}

const news = ref<News[]>([])
const loading = ref(true)

// Fungsi mengekstrak teks dari JSON Tiptap
const getSnippet = (contentStr: string) => {
  try {
    const parsed = JSON.parse(contentStr)
    // Mengambil teks dari paragraf pertama, konten pertama
    return parsed.content[0]?.content[0]?.text || 'Tuliskan ceritamu di sini...'
  } catch (e) {
    return 'Baca selengkapnya untuk detail artikel.'
  }
}

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr)
  return date.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
}

const fetchData = async () => {
  loading.value = true
  try {
    const response = await api.get('/artikel')
    news.value = response.data.result.items
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  try {
    // Sesuaikan dengan struktur: response.data.result.items
    const response = await api.get('/artikel', { params: { limit: 6, sort: 'createdAt:desc' } })
    news.value = response.data.result.items
  } catch (error) {
    console.error('Gagal fetch data:', error)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <section id="news" class="py-24 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-up">News</h2>
        <p class="text-slate-400 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="150">
          Update terbaru seputar project, teknologi, dan perkembangan Concern.
        </p>
      </div>

      <div v-if="loading" class="flex flex-col items-center justify-center py-20">
        <div class="animate-spin rounded-full h-10 w-10 border-b-2 border-concern-accent"></div>
        <p class="mt-4 text-slate-500 font-medium">Menghubungkan ke server...</p>
      </div>

      <div
        v-else-if="news.length === 0"
        class="flex flex-col items-center justify-center py-20 px-6 bg-slate-800/20 border border-dashed border-slate-700 rounded-3xl"
        data-aos="zoom-in"
      >
        <div class="text-6xl mb-6 opacity-40">📭</div>
        <h3 class="text-2xl font-semibold text-slate-300 mb-2">Belum ada berita</h3>
        <p class="text-slate-500 text-center max-w-sm">
          Kami sedang menyiapkan konten menarik untukmu. Pantau terus halaman ini ya!
        </p>
        <button
          @click="fetchData"
          class="mt-6 text-concern-accent hover:underline text-sm font-medium"
        >
          Coba Muat Ulang
        </button>
      </div>

      <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(item, index) in news"
          :key="item.id"
          class="group bg-slate-800/40 border border-slate-700 rounded-xl overflow-hidden hover:border-concern-accent hover:-translate-y-2 transition-all duration-300"
          data-aos="fade-up"
          :data-aos-delay="(index + 1) * 100"
        ></div>
      </div>
    </div>
  </section>
</template>
