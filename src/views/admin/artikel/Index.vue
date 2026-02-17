<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { Icon } from '@iconify/vue'
import { api } from '@/api'
import { debounce } from 'lodash' // Pastikan install lodash: npm i lodash @types/lodash
import { useAlertStore } from '@/stores/alert'

const alertStore = useAlertStore()

// Interface sesuai schema 'Artikel' di OpenAPI
interface Article {
  id: number
  title: string
  slug: string
  thumbnail: string | null
  status: 'PUBLISHED' | 'DRAFT'
  createdAt: string
  views?: number // Opsional (jika ada di backend nanti)
  category?: {
    id: number
    name: string
  }
  author?: {
    username: string
    email: string
  }
}

// State
const articles = ref<Article[]>([])
const loading = ref(true)
const searchQuery = ref('')

// Pagination State
const currentPage = ref(1)
const itemsPerPage = 10 // 'take'
const totalItems = ref(0)
const totalPages = ref(1)

// Helper Status Color
const getStatusClass = (status: string) => {
  switch (status) {
    case 'PUBLISHED':
      return 'bg-green-500/10 text-green-500 border-green-500/20'
    case 'DRAFT':
      return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
    default:
      return 'bg-zinc-800 text-zinc-400 border-zinc-700'
  }
}

const formatDate = (date: string) => {
  if (!date) return '-'
  return new Date(date).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

// --- Fetch Data (Sesuai OpenAPI) ---
const fetchArticles = async () => {
  loading.value = true
  try {
    // Hitung 'skip' berdasarkan halaman saat ini
    const skip = (currentPage.value - 1) * itemsPerPage

    // Request ke endpoint '/artikel/admin'
    const res = await api.get('/artikel/admin', {
      params: {
        skip: skip,
        take: itemsPerPage,
        search: searchQuery.value,
        sortBy: 'createdAt',
        order: 'desc',
      },
    })

    // Mapping Response sesuai OpenAPI: result.items & result.meta
    const result = res.data.result

    console.log(result)

    if (result) {
      articles.value = result.items || []

      // Update Pagination Meta
      if (result.meta) {
        totalItems.value = result.meta.total
        totalPages.value = Math.ceil(result.meta.total / itemsPerPage)
      }
    }
  } catch (err) {
    console.error('Gagal load artikel:', err)
  } finally {
    loading.value = false
  }
}

// --- Pagination Handlers ---
const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
    fetchArticles()
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
    fetchArticles()
  }
}

// --- Delete Action ---
const handleDelete = async (id: number) => {
  const confirmed = alertStore.confirm({
    title: 'Konfirmasi Hapus',
    message: 'Apakah Anda yakin ingin menghapus artikel ini?',
    onConfirm: async () => {
      try {
        await api.delete(`/artikel/${id}`)
        alertStore.toast('Artikel berhasil dihapus', 'success')
        fetchArticles() // Refresh data setelah hapus
      } catch (err) {
        alertStore.toast('Gagal menghapus artikel.', 'error')
      }
    },
  })
}

// --- Live Search (Debounced) ---
// Menggunakan debounce agar tidak spam API setiap ketikan
const debouncedSearch = debounce(() => {
  currentPage.value = 1 // Reset ke halaman 1
  fetchArticles()
}, 500)

watch(searchQuery, () => {
  debouncedSearch()
})

onMounted(() => {
  fetchArticles()
})
</script>

<template>
  <div class="min-h-screen bg-[#09090b] text-zinc-200 p-8 font-sans pb-24">
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <div>
        <h1 class="text-3xl font-bold text-white tracking-tight">Daftar Artikel</h1>
        <p class="text-zinc-500 mt-1">Kelola semua konten publikasi di sini.</p>
      </div>

      <router-link
        to="/admin/artikels/create"
        class="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition shadow-lg shadow-blue-900/20"
      >
        <Icon icon="lucide:plus" class="w-5 h-5" />
        <span>Buat Artikel</span>
      </router-link>
    </div>

    <div
      class="bg-[#18181b] border border-zinc-800 rounded-xl p-4 mb-6 flex flex-col md:flex-row gap-4 justify-between items-center"
    >
      <div class="relative w-full md:w-96">
        <Icon
          icon="lucide:search"
          class="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 w-5 h-5"
        />
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Cari judul artikel..."
          class="w-full bg-[#09090b] border border-zinc-800 text-zinc-200 pl-10 pr-4 py-2.5 rounded-lg focus:outline-none focus:border-blue-600 transition placeholder-zinc-600"
        />
      </div>
    </div>

    <div
      class="bg-[#18181b] border border-zinc-800 rounded-xl overflow-hidden min-h-[400px] flex flex-col"
    >
      <div v-if="loading" class="flex flex-col items-center justify-center py-20 flex-1">
        <Icon icon="lucide:loader-2" class="w-8 h-8 text-blue-500 animate-spin mb-3" />
        <span class="text-zinc-500 text-sm">Memuat data artikel...</span>
      </div>

      <div
        v-else-if="articles.length === 0"
        class="flex flex-col items-center justify-center py-20 text-center flex-1"
      >
        <div class="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center mb-4">
          <Icon icon="lucide:file-x" class="w-8 h-8 text-zinc-600" />
        </div>
        <h3 class="text-lg font-medium text-white">Belum ada artikel</h3>
        <p class="text-zinc-500 text-sm max-w-xs mx-auto mt-1">
          Mulai buat konten pertamamu dengan menekan tombol di pojok kanan atas.
        </p>
      </div>

      <div v-else class="overflow-x-auto flex-1">
        <table class="w-full text-left text-sm text-zinc-400">
          <thead
            class="bg-[#09090b] text-xs uppercase font-bold text-zinc-500 border-b border-zinc-800"
          >
            <tr>
              <th class="px-6 py-4 w-[40%]">Judul Artikel</th>
              <th class="px-6 py-4">Kategori</th>
              <th class="px-6 py-4">Penulis</th>
              <th class="px-6 py-4">Tanggal</th>
              <th class="px-6 py-4">Status</th>
              <th class="px-6 py-4 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-zinc-800">
            <tr
              v-for="item in articles"
              :key="item.id"
              class="hover:bg-zinc-900/50 transition group"
            >
              <td class="px-6 py-4 align-middle">
                <div class="flex items-center gap-3">
                  <div
                    v-if="item.thumbnail"
                    class="w-10 h-10 rounded bg-zinc-800 overflow-hidden shrink-0 border border-zinc-700"
                  >
                    <img :src="item.thumbnail" class="w-full h-full object-cover" />
                  </div>
                  <div
                    v-else
                    class="w-10 h-10 rounded bg-zinc-800 flex items-center justify-center shrink-0 border border-zinc-700"
                  >
                    <Icon icon="lucide:image" class="w-4 h-4 text-zinc-600" />
                  </div>

                  <div>
                    <div
                      class="font-medium text-zinc-200 text-base mb-0.5 line-clamp-1 group-hover:text-blue-400 transition"
                    >
                      {{ item.title }}
                    </div>
                    <div class="text-xs text-zinc-600 flex items-center gap-2">
                      /{{ item.slug }}
                    </div>
                  </div>
                </div>
              </td>

              <td class="px-6 py-4 align-middle">
                <span
                  v-if="item.category"
                  class="bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded text-xs font-medium text-zinc-300"
                >
                  {{ item.category.name }}
                </span>
                <span v-else class="text-zinc-600 text-xs italic">Uncategorized</span>
              </td>

              <td class="px-6 py-4 align-middle">
                <div class="flex items-center gap-2">
                  <div
                    class="w-6 h-6 rounded-full bg-blue-900/30 text-blue-500 flex items-center justify-center text-xs font-bold border border-blue-900/50 uppercase"
                  >
                    {{ item.author?.username?.charAt(0) || 'A' }}
                  </div>
                  <span class="text-zinc-400 text-xs">{{
                    item.author?.username || 'Unknown'
                  }}</span>
                </div>
              </td>

              <td class="px-6 py-4 align-middle whitespace-nowrap text-xs">
                {{ formatDate(item.createdAt) }}
              </td>

              <td class="px-6 py-4 align-middle">
                <span
                  class="px-2.5 py-1 rounded-full text-[10px] font-bold border uppercase tracking-wide"
                  :class="getStatusClass(item.status)"
                >
                  {{ item.status }}
                </span>
              </td>

              <td class="px-6 py-4 align-middle text-right">
                <div class="flex items-center justify-end gap-2">
                  <router-link
                    :to="`/admin/artikels/edit/${item.id}`"
                    class="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition"
                    title="Edit"
                  >
                    <Icon icon="lucide:pencil" class="w-4 h-4" />
                  </router-link>

                  <button
                    @click="handleDelete(item.id)"
                    class="p-2 text-zinc-400 hover:text-red-400 hover:bg-red-900/20 rounded-lg transition"
                    title="Hapus"
                  >
                    <Icon icon="lucide:trash-2" class="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        v-if="articles.length > 0"
        class="px-6 py-4 border-t border-zinc-800 flex items-center justify-between bg-[#09090b]"
      >
        <span class="text-xs text-zinc-500">
          Halaman {{ currentPage }} dari {{ totalPages }} (Total {{ totalItems }} data)
        </span>
        <div class="flex gap-2">
          <button
            :disabled="currentPage === 1"
            @click="prevPage"
            class="px-3 py-1 text-xs border border-zinc-800 rounded text-zinc-400 hover:bg-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Prev
          </button>
          <button
            :disabled="currentPage >= totalPages"
            @click="nextPage"
            class="px-3 py-1 text-xs border border-zinc-800 rounded text-zinc-400 hover:bg-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
