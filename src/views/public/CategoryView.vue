<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'
import { api } from '@/api'

const route = useRoute()
const router = useRouter()

const isLoading = ref(true)
const category = ref<any>(null)
const articles = ref<any[]>([])
const slug = ref(route.params.slug as string)

// Format Tanggal
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

// Fungsi Navigasi ke Detail Artikel
const goToDetail = (slug: string) => {
  router.push({ name: 'public-artikel-detail', params: { slug } })
}

// Fetch Data Kategori & Artikelnya
const fetchData = async () => {
  isLoading.value = true
  slug.value = route.params.slug as string

  try {
    // 1. Ambil Info Kategori berdasarkan Slug
    // Endpoint ini harus disesuaikan dengan Backendmu
    // Misal: GET /category/slug/teknologi
    const catRes = await api.get(`/category`)
    const catData = catRes.data.result || catRes.data
    category.value = catData

    // 2. Ambil Artikel berdasarkan ID Kategori
    if (catData && catData.id) {
      const artRes = await api.get(`/artikel?category_id=${catData.id}&status=PUBLISHED`)
      articles.value = artRes.data.result || artRes.data.data || []
    }
  } catch (error) {
    console.error('Error fetching category:', error)
  } finally {
    isLoading.value = false
  }
}

// Jalankan saat pertama kali dibuka
onMounted(() => {
  fetchData()
})

// Jalankan lagi jika URL berubah (misal klik kategori lain di sidebar)
watch(
  () => route.params.slug,
  () => {
    fetchData()
  },
)
</script>

<template>
  <div class="min-h-screen bg-[#09090b] text-zinc-200 font-sans pb-20">
    <nav class="border-b border-zinc-800 bg-[#09090b]/80 backdrop-blur-md sticky top-0 z-40">
      <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <router-link
          to="/"
          class="text-xl font-bold text-white tracking-tight flex items-center gap-2"
        >
          <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
            C
          </div>
          Concern.
        </router-link>
        <div class="flex gap-4 text-sm font-medium">
          <router-link to="/" class="text-zinc-400 hover:text-white transition">Home</router-link>
          <span class="text-zinc-600">/</span>
          <span class="text-white capitalize">{{ category?.name || 'Kategori' }}</span>
        </div>
      </div>
    </nav>

    <header
      class="py-16 px-6 border-b border-zinc-800/50 bg-gradient-to-b from-blue-900/10 to-transparent"
    >
      <div class="max-w-7xl mx-auto text-center md:text-left">
        <div v-if="isLoading" class="animate-pulse space-y-4">
          <div class="h-4 bg-zinc-800 w-24 rounded mx-auto md:mx-0"></div>
          <div class="h-10 bg-zinc-800 w-64 rounded mx-auto md:mx-0"></div>
        </div>
        <div v-else>
          <span class="text-blue-500 font-medium tracking-wide text-sm uppercase mb-2 block"
            >Kategori</span
          >
          <h1 class="text-4xl md:text-5xl font-bold text-white tracking-tight capitalize">
            {{ category?.name || slug }}
          </h1>
          <p class="text-zinc-400 mt-4 max-w-2xl">
            Menampilkan semua artikel yang terkait dengan topik
            <span class="text-white font-medium">"{{ category?.name }}"</span>.
          </p>
        </div>
      </div>
    </header>

    <main class="max-w-7xl mx-auto px-6 py-12">
      <div v-if="isLoading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="i in 3" :key="i" class="bg-zinc-900 rounded-2xl h-96 animate-pulse"></div>
      </div>

      <div
        v-else-if="articles.length > 0"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <article
          v-for="(item, index) in articles"
          :key="item.id"
          class="group bg-slate-800/40 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col h-full"
          @click="goToDetail(item.slug)"
        >
          <div class="relative h-56 overflow-hidden">
            <img
              :src="item.thumbnail || 'https://placehold.co/600x400/1e293b/white?text=No+Image'"
              :alt="item.title"
              class="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"
            ></div>

            <div class="absolute top-4 left-4">
              <span
                class="px-3 py-1 text-xs font-semibold bg-blue-600/90 text-white rounded-full backdrop-blur-sm shadow-lg"
              >
                {{ category?.name || 'Umum' }}
              </span>
            </div>
          </div>

          <div class="p-6 flex flex-col flex-grow">
            <div class="flex items-center gap-2 text-slate-400 text-xs mb-3">
              <Icon icon="lucide:calendar" class="w-3.5 h-3.5" />
              <span>{{ formatDate(item.created_at) }}</span>
            </div>

            <h3
              class="text-xl font-bold text-slate-100 mb-3 leading-snug group-hover:text-blue-400 transition-colors line-clamp-2"
            >
              {{ item.title }}
            </h3>

            <p class="text-slate-400 text-sm line-clamp-3 mb-6 flex-grow">
              {{
                item.content
                  ? item.content.replace(/<[^>]*>?/gm, '').substring(0, 100) + '...'
                  : 'Baca selengkapnya...'
              }}
            </p>

            <div class="pt-4 border-t border-slate-700/50 flex items-center justify-between">
              <span
                class="text-blue-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all"
              >
                Baca Artikel <Icon icon="lucide:arrow-right" class="w-4 h-4" />
              </span>
            </div>
          </div>
        </article>
      </div>

      <div
        v-else
        class="text-center py-20 border border-dashed border-zinc-800 rounded-2xl bg-zinc-900/50"
      >
        <div
          class="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <Icon icon="lucide:folder-open" class="w-8 h-8 text-zinc-500" />
        </div>
        <h3 class="text-xl font-bold text-white mb-2">Belum ada artikel</h3>
        <p class="text-zinc-500">Kategori ini belum memiliki konten apapun.</p>
        <router-link
          to="/"
          class="mt-6 inline-block px-6 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition text-sm font-medium"
        >
          Kembali ke Home
        </router-link>
      </div>
    </main>
  </div>
</template>
