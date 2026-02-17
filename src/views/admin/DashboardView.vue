<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Icon } from '@iconify/vue'
import { api } from '@/api' // Pastikan axios instance sudah benar

// 1. Definisi Tipe Data (Sesuai output Controller)
interface Article {
  id: number
  title: string
  slug: string
  status: 'PUBLISHED' | 'DRAFT' // Sesuaikan enum Prisma
  createdAt: string
  category?: {
    name: string
  }
  author?: {
    username: string
  }
}

interface DashboardStats {
  totalArtikels: number
  totalPublished: number
  totalCategories: number
  recentArticles: Article[]
}

// 2. State Reactive
const stats = ref<DashboardStats>({
  totalArtikels: 0,
  totalPublished: 0,
  totalCategories: 0,
  recentArticles: [],
})

const loading = ref(true)
const error = ref('')

// 3. Helper Functions
const formatDate = (dateString: string) => {
  if (!dateString) return '-'
  return new Date(dateString).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

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

// 4. Fetch Data Real saat Component Mounted
onMounted(async () => {
  try {
    // Panggil endpoint controller yang baru kita buat
    const response = await api.get('/dashboard/stats')

    if (response.data.success) {
      stats.value = response.data.result
    }
  } catch (err: any) {
    console.error('Gagal memuat dashboard:', err)
    error.value = 'Gagal terhubung ke server. Coba muat ulang.'
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div>
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-white tracking-tight">Dashboard</h1>
      <p class="text-zinc-500 mt-1">Ringkasan aktivitas website Concern.Dev</p>
    </div>

    <div v-if="loading" class="flex items-center justify-center h-64">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
    </div>

    <div
      v-else-if="error"
      class="p-4 mb-6 bg-red-900/20 border border-red-800 rounded-xl text-red-400"
    >
      {{ error }}
    </div>

    <div v-else>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div
          class="p-6 bg-[#18181b] border border-zinc-800 rounded-xl relative overflow-hidden group hover:border-zinc-700 transition"
        >
          <div class="flex items-center justify-between mb-4">
            <div class="p-2 bg-zinc-900 rounded-lg text-blue-500 border border-zinc-800">
              <Icon icon="lucide:file-text" class="w-6 h-6" />
            </div>
            <span class="text-xs font-medium text-zinc-500 uppercase tracking-wider">Total</span>
          </div>
          <div class="text-3xl font-bold text-white mb-1">{{ stats.totalArtikels }}</div>
          <div class="text-sm text-zinc-500">Artikel dibuat</div>
          <div
            class="absolute -right-6 -top-6 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition"
          ></div>
        </div>

        <div
          class="p-6 bg-[#18181b] border border-zinc-800 rounded-xl relative overflow-hidden group hover:border-zinc-700 transition"
        >
          <div class="flex items-center justify-between mb-4">
            <div class="p-2 bg-zinc-900 rounded-lg text-green-500 border border-zinc-800">
              <Icon icon="lucide:check-circle" class="w-6 h-6" />
            </div>
            <span class="text-xs font-medium text-zinc-500 uppercase tracking-wider">Aktif</span>
          </div>
          <div class="text-3xl font-bold text-white mb-1">{{ stats.totalPublished }}</div>
          <div class="text-sm text-zinc-500">Artikel dipublikasi</div>
          <div
            class="absolute -right-6 -top-6 w-20 h-20 bg-green-500/10 rounded-full blur-2xl group-hover:bg-green-500/20 transition"
          ></div>
        </div>

        <div
          class="p-6 bg-[#18181b] border border-zinc-800 rounded-xl relative overflow-hidden group hover:border-zinc-700 transition"
        >
          <div class="flex items-center justify-between mb-4">
            <div class="p-2 bg-zinc-900 rounded-lg text-purple-500 border border-zinc-800">
              <Icon icon="lucide:tags" class="w-6 h-6" />
            </div>
            <span class="text-xs font-medium text-zinc-500 uppercase tracking-wider">Tags</span>
          </div>
          <div class="text-3xl font-bold text-white mb-1">{{ stats.totalCategories }}</div>
          <div class="text-sm text-zinc-500">Kategori tersedia</div>
          <div
            class="absolute -right-6 -top-6 w-20 h-20 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition"
          ></div>
        </div>
      </div>

      <div class="bg-[#18181b] border border-zinc-800 rounded-xl overflow-hidden">
        <div class="px-6 py-4 border-b border-zinc-800 flex justify-between items-center">
          <h3 class="font-bold text-white">Artikel Terbaru</h3>
          <router-link
            to="/admin/artikels"
            class="text-sm text-blue-500 hover:text-blue-400 hover:underline font-medium"
          >
            Lihat Semua
          </router-link>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left text-sm text-zinc-400">
            <thead class="bg-zinc-900/50 text-xs uppercase font-bold text-zinc-500">
              <tr>
                <th class="px-6 py-3 border-b border-zinc-800">Judul</th>
                <th class="px-6 py-3 border-b border-zinc-800">Kategori</th>
                <th class="px-6 py-3 border-b border-zinc-800">Penulis</th>
                <th class="px-6 py-3 border-b border-zinc-800">Tanggal</th>
                <th class="px-6 py-3 border-b border-zinc-800">Status</th>
                <th class="px-6 py-3 border-b border-zinc-800 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-zinc-800">
              <tr v-if="stats.recentArticles.length === 0">
                <td colspan="6" class="px-6 py-8 text-center text-zinc-500">
                  Belum ada artikel yang dibuat.
                </td>
              </tr>

              <tr
                v-for="article in stats.recentArticles"
                :key="article.id"
                class="hover:bg-zinc-900/50 transition group"
              >
                <td class="px-6 py-4 font-medium text-zinc-200 group-hover:text-white transition">
                  {{ article.title }}
                </td>
                <td class="px-6 py-4">
                  <span
                    class="bg-zinc-800 border border-zinc-700 px-2 py-1 rounded text-xs text-zinc-300"
                  >
                    {{ article.category?.name || 'Uncategorized' }}
                  </span>
                </td>
                <td class="px-6 py-4 text-xs">
                  {{ article.author?.username || 'Admin' }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  {{ formatDate(article.createdAt) }}
                </td>
                <td class="px-6 py-4">
                  <span
                    class="px-2 py-1 rounded-full text-[10px] font-bold border uppercase tracking-wide"
                    :class="getStatusClass(article.status)"
                  >
                    {{ article.status }}
                  </span>
                </td>
                <td class="px-6 py-4 text-right">
                  <router-link
                    :to="`/admin/artikels/edit/${article.id}`"
                    class="text-zinc-500 hover:text-white transition inline-block p-1 hover:bg-zinc-800 rounded"
                    title="Edit Artikel"
                  >
                    <Icon icon="lucide:pencil" class="w-4 h-4" />
                  </router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
