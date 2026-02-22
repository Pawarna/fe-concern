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
  <section id="news" class="py-32 px-6 bg-black relative overflow-hidden selection:bg-white selection:text-black">
    <div class="max-w-7xl mx-auto">
      
      <div class="flex flex-col md:flex-row justify-between items-end mb-24 gap-8" data-aos="fade-up">
        <div class="max-w-2xl">
          <div class="flex items-center gap-3 mb-6">
            <div class="h-[1px] w-12 bg-white"></div>
            <span class="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-500">Journal & Insights</span>
          </div>
          <h2 class="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
            ARCHIVE <span class="text-transparent text-outline-white italic">NEWS</span>
          </h2>
        </div>
        <p class="text-zinc-500 max-w-sm text-[11px] uppercase tracking-[0.2em] leading-6 text-right">
          Dokumentasi perkembangan teknologi, <span class="text-white font-bold">riset internal</span>, dan pembaruan sistem.
        </p>
      </div>

      <div v-if="loading" class="flex flex-col items-center justify-center py-32 border border-white/5 bg-zinc-950/30">
        <div class="w-12 h-12 border-2 border-zinc-800 border-t-white animate-spin"></div>
        <p class="mt-6 text-[10px] uppercase tracking-[0.4em] text-zinc-500">Synchronizing Data...</p>
      </div>

      <div
        v-else-if="news.length === 0"
        class="flex flex-col items-center justify-center py-32 border border-dashed border-zinc-800"
        data-aos="zoom-in"
      >
        <span class="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-4">[ NULL_DATA_RETURNED ]</span>
        <h3 class="text-xl font-black text-zinc-300 uppercase tracking-tighter mb-6">Arsip belum tersedia</h3>
        <button
          @click="fetchData"
          class="px-8 py-3 border border-white/20 text-[10px] font-bold uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all"
        >
          Re-Initialize Fetch
        </button>
      </div>

      <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 border-l border-t border-white/10">
        <article
          v-for="(item, index) in news"
          :key="item.id"
          class="group border-r border-b border-white/10 p-0 hover:bg-white transition-all duration-700 cursor-crosshair flex flex-col"
          data-aos="fade-up"
          :data-aos-delay="(index + 1) * 100"
          @click="goToDetail(item.slug)"
        >
          <div class="aspect-video overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700">
            <img
              v-if="item.thumbnail"
              :src="item.thumbnail"
              :alt="item.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
            />
            <div v-else class="w-full h-full flex items-center justify-center bg-zinc-900 text-[10px] tracking-[0.5em] text-zinc-700 uppercase font-black">
              No_Preview_Available
            </div>
            
            <div
              v-if="item.category"
              class="absolute top-0 right-0 bg-white text-black text-[9px] font-black px-4 py-2 uppercase tracking-widest"
            >
              {{ item.category.name }}
            </div>

            <div class="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[size:100%_2px,3px_100%] pointer-events-none opacity-40"></div>
          </div>

          <div class="p-8 flex-1 flex flex-col">
            <div class="flex items-center justify-between mb-6">
               <span class="text-[9px] font-bold text-zinc-500 group-hover:text-zinc-400 transition-colors uppercase tracking-[0.2em]">
                {{ formatDate(item.createdAt) }}
              </span>
              <span class="text-[9px] font-mono text-zinc-700 group-hover:text-black tracking-widest uppercase">
                ID: {{ item.id }}
              </span>
            </div>

            <h3 class="text-xl font-black text-white group-hover:text-black mb-4 line-clamp-2 uppercase tracking-tighter leading-tight transition-colors duration-500">
              {{ item.title }}
            </h3>

            <p class="text-zinc-500 group-hover:text-zinc-700 text-xs leading-6 uppercase tracking-wider line-clamp-3 mb-8 flex-1 transition-colors duration-500">
              {{ getSnippet(item.content) }}
            </p>

            <div class="flex items-center justify-between pt-6 border-t border-white/5 group-hover:border-black/10 transition-colors">
              <span class="text-[10px] font-black uppercase tracking-[0.3em] text-white group-hover:text-black">Open_Report</span>
              <svg class="w-5 h-5 text-zinc-500 group-hover:text-black group-hover:translate-x-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="square" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>

<style scoped>
.text-outline-white {
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
}

/* Custom Grayscale Animation */
.grayscale {
  filter: grayscale(100%) contrast(110%);
}

.group:hover .grayscale {
  filter: grayscale(0%) contrast(100%);
}
</style>