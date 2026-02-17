<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { api } from '@/api'
import { useRouter } from 'vue-router'

const router = useRouter()

// Interface Sesuai OpenAPI Schema 'Artikel'
interface News {
  id: number
  title: string
  slug: string
  content: any // Bisa object Tiptap atau string JSON
  thumbnail: string | null
  status: string
  author: { username: string }
  category?: { name: string } // Opsional jika di-include
  createdAt: string
}

const news = ref<News[]>([])
const loading = ref(true)

// Fungsi mengekstrak teks dari JSON Tiptap
const getSnippet = (content: any) => {
  try {
    let parsed = content

    // Jaga-jaga jika backend mengirim string JSON
    if (typeof content === 'string') {
      parsed = JSON.parse(content)
    }

    // Mengambil teks dari paragraf pertama Tiptap
    // content -> paragraphs[] -> text nodes[]
    const firstParagraph = parsed?.content?.find((block: any) => block.type === 'paragraph')
    return firstParagraph?.content?.[0]?.text || 'Baca selengkapnya untuk detail artikel.'
  } catch (e) {
    return 'Baca selengkapnya untuk detail artikel.'
  }
}

const formatDate = (dateStr: string) => {
  if (!dateStr) return '-'
  const date = new Date(dateStr)
  return date.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
}

const fetchData = async () => {
  loading.value = true
  try {
    // Sesuai OpenAPI: parameter 'take', 'sortBy', 'order'
    const response = await api.get('/artikel', {
      params: {
        take: 6,
        sortBy: 'createdAt',
        order: 'desc',
      },
    })
    news.value = response.data.result.items
  } catch (error) {
    console.error('Gagal fetch data:', error)
  } finally {
    loading.value = false
  }
}

const goToDetail = (slug: string) => {
  router.push({ name: 'public-artikel-detail', params: { slug } })
}

onMounted(() => {
  fetchData()
})
</script>

<template>
  <section id="news" class="py-24 px-6 bg-slate-900">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 text-white" data-aos="fade-up">
          News & Updates
        </h2>
        <p class="text-slate-400 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="150">
          Ikuti perkembangan terbaru seputar teknologi, tutorial, dan kegiatan komunitas kami.
        </p>
      </div>

      <div v-if="loading" class="flex flex-col items-center justify-center py-20">
        <div class="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
        <p class="mt-4 text-slate-500 font-medium">Memuat artikel...</p>
      </div>

      <div
        v-else-if="news.length === 0"
        class="flex flex-col items-center justify-center py-20 px-6 bg-slate-800/20 border border-dashed border-slate-700 rounded-3xl"
        data-aos="zoom-in"
      >
        <div class="text-6xl mb-6 opacity-40 grayscale">📰</div>
        <h3 class="text-2xl font-semibold text-slate-300 mb-2">Belum ada berita</h3>
        <p class="text-slate-500 text-center max-w-sm mb-6">
          Kami sedang menyiapkan konten menarik untukmu. Pantau terus halaman ini ya!
        </p>
        <button
          @click="fetchData"
          class="text-blue-500 hover:text-blue-400 font-medium text-sm transition"
        >
          Refresh Data
        </button>
      </div>

      <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
          v-for="(item, index) in news"
          :key="item.id"
          class="group bg-slate-800/40 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col h-full"
          data-aos="fade-up"
          :data-aos-delay="(index + 1) * 100"
          @click="goToDetail(item.slug)"
        >
          <div class="h-48 overflow-hidden relative bg-slate-800">
            <img
              v-if="item.thumbnail"
              :src="item.thumbnail"
              :alt="item.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div
              v-else
              class="w-full h-full flex items-center justify-center text-slate-600 bg-slate-800"
            >
              <span class="text-4xl opacity-20">IMAGE</span>
            </div>

            <div
              v-if="item.category"
              class="absolute top-4 left-4 bg-blue-600/90 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
            >
              {{ item.category.name }}
            </div>
          </div>

          <div class="p-6 flex-1 flex flex-col">
            <div class="text-xs text-slate-500 mb-3 flex items-center gap-2">
              <span>{{ formatDate(item.createdAt) }}</span>
              <span class="w-1 h-1 rounded-full bg-slate-600"></span>
              <span>{{ item.author?.username || 'Admin' }}</span>
            </div>

            <h3
              class="text-xl font-bold text-slate-100 mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors"
            >
              {{ item.title }}
            </h3>

            <p class="text-slate-400 text-sm line-clamp-3 mb-6 flex-1">
              {{ getSnippet(item.content) }}
            </p>

            <div
              class="flex items-center text-blue-500 font-medium text-sm group-hover:gap-2 transition-all"
            >
              Baca Selengkapnya
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
