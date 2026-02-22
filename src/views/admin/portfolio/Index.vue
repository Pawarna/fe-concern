<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { Icon } from '@iconify/vue'
import { api } from '@/api'
import { useAlertStore } from '@/stores/alert'
import ImageUploader from '@/components/admin/ImageUploader.vue'

const alertStore = useAlertStore()

// --- STATE ---
const portfolios = ref<any[]>([])
const isLoading = ref(true)
const isSubmitting = ref(false)
const showModal = ref(false)
const isEditing = ref(false)
const searchQuery = ref('')

// Form & Image State
const form = ref({
  id: null as number | null,
  title: '',
  description: '',
  link: '',
  tagsInput: '', // Input string manual, misal: "Vue, Laravel, API"
  thumbnailPreview: '',
})
const imageFile = ref<File | null>(null)

// --- FETCH DATA ---
const fetchPortfolios = async () => {
  isLoading.value = true
  try {
    const res = await api.get('/portofolio') // Endpoint Diubah
    portfolios.value = res.data.data || res.data.result || res.data || []
  } catch (error) {
    console.error('Gagal ambil portofolio:', error)
    alertStore.toast('Gagal memuat data portofolio', 'error')
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchPortfolios()
})

// --- FILTERING ---
const filteredPortfolios = computed(() => {
  if (!searchQuery.value) return portfolios.value
  return portfolios.value.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.value.toLowerCase()),
  )
})

// --- LOGIC MODAL & FORM ---
const openModal = (item: any = null) => {
  imageFile.value = null

  if (item) {
    // Mode Edit
    isEditing.value = true

    // Mapping Array Tags dari Response { id, name } menjadi string pisah koma
    const existingTags = item.tags ? item.tags.map((t: any) => t.name).join(', ') : ''

    form.value = {
      id: item.id,
      title: item.title,
      description: item.description || '',
      link: item.link || '',
      tagsInput: existingTags,
      thumbnailPreview: item.imageUrl || '', // Membaca imageUrl dari Response
    }
  } else {
    // Mode Tambah Baru
    isEditing.value = false
    form.value = {
      id: null,
      title: '',
      description: '',
      link: '',
      tagsInput: '',
      thumbnailPreview: '',
    }
  }
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  imageFile.value = null
}

const handleClearImage = () => {
  imageFile.value = null;
  form.value.thumbnailPreview = ''; 
};

// --- CRUD ACTIONS ---
const submitForm = async () => {
  if (!form.value.title) return alertStore.toast('Judul wajib diisi!', 'warning')

  isSubmitting.value = true
  try {
    const formData = new FormData()
    formData.append('title', form.value.title)
    formData.append('description', form.value.description)
    formData.append('link', form.value.link)

    // Pecah input teks 'tagsInput' menjadi array, lalu append satu-satu
    if (form.value.tagsInput) {
      const tagsArray = form.value.tagsInput
        .split(',')
        .map((tag) => tag.trim())
        .filter((tag) => tag !== '')
      tagsArray.forEach((tag) => {
        formData.append('tags[]', tag)
      })
    }

    // Append File Gambar
    if (imageFile.value) {
      formData.append('file', imageFile.value)
    }

    if (isEditing.value && form.value.id) {
      // UPDATE Endpoint
      await api.put(`/portofolio/${form.value.id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      alertStore.toast('Portofolio berhasil diperbarui!')
    } else {
      // CREATE Endpoint
      await api.post('/portofolio', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      alertStore.toast('Portofolio baru berhasil ditambahkan!')
    }

    await fetchPortfolios()
    closeModal()
  } catch (error: any) {
    alertStore.toast(
      error.response?.data?.error[0].message || 'Gagal menyimpan portofolio',
      'error',
    )
  } finally {
    isSubmitting.value = false
  }
}

const deletePortfolio = (id: number) => {
  alertStore.confirm({
    title: 'Hapus Portofolio?',
    message: 'Proyek ini akan dihapus secara permanen dari daftar.',
    onConfirm: async () => {
      try {
        await api.delete(`/portofolio/${id}`) // Endpoint Diubah
        await fetchPortfolios()
        alertStore.toast('Portofolio berhasil dihapus')
      } catch (error) {
        alertStore.toast('Gagal menghapus portofolio', 'error')
      }
    },
  })
}
</script>

<template>
  <div class="min-h-screen bg-[#09090b] text-zinc-200 font-sans p-6 pb-20">
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <div>
        <h1 class="text-3xl font-bold text-white tracking-tight">Portofolio</h1>
        <p class="text-zinc-500 mt-1">Kelola daftar proyek dan hasil karya terbaikmu.</p>
      </div>
      <button
        @click="openModal()"
        class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg flex items-center gap-2 font-medium shadow-lg shadow-blue-900/20 transition"
      >
        <Icon icon="lucide:plus" class="w-4 h-4" />
        Tambah Proyek
      </button>
    </div>

    <div class="mb-6">
      <div class="relative max-w-sm">
        <Icon
          icon="lucide:search"
          class="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4"
        />
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Cari proyek..."
          class="w-full bg-[#18181b] border border-zinc-800 rounded-lg pl-10 pr-4 py-2.5 text-zinc-200 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition placeholder-zinc-600"
        />
      </div>
    </div>

    <div v-if="isLoading" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      <div
        v-for="i in 3"
        :key="i"
        class="bg-[#18181b] border border-zinc-800 rounded-xl h-72 animate-pulse"
      ></div>
    </div>

    <div
      v-else-if="filteredPortfolios.length === 0"
      class="bg-[#18181b] border border-zinc-800 rounded-xl p-12 text-center flex flex-col items-center justify-center"
    >
      <div class="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mb-4">
        <Icon icon="lucide:layout-template" class="w-8 h-8 text-zinc-600" />
      </div>
      <h3 class="text-lg font-bold text-white mb-1">Belum ada portofolio</h3>
      <p class="text-zinc-400 font-medium mb-6">
        Mulai tambahkan hasil karyamu agar bisa dilihat publik.
      </p>
      <button
        @click="openModal()"
        class="px-5 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition font-medium text-sm"
      >
        Tambah Sekarang
      </button>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      <div
        v-for="item in filteredPortfolios"
        :key="item.id"
        class="group bg-[#18181b] border border-zinc-800 rounded-xl overflow-hidden shadow-sm hover:border-zinc-600 transition flex flex-col"
      >
        <div class="relative h-48 bg-zinc-900 overflow-hidden border-b border-zinc-800">
          <img
            :src="item.imageUrl || 'https://placehold.co/600x400/18181b/52525b?text=No+Image'"
            class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
          <div
            class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-3"
          >
            <button
              @click="openModal(item)"
              class="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition duration-300"
              title="Edit"
            >
              <Icon icon="lucide:pencil" class="w-4 h-4" />
            </button>
            <button
              @click="deletePortfolio(item.id)"
              class="p-3 bg-red-600 text-white rounded-full hover:bg-red-700 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition duration-300 delay-75"
              title="Hapus"
            >
              <Icon icon="lucide:trash-2" class="w-4 h-4" />
            </button>
          </div>
        </div>

        <div class="p-5 flex flex-col flex-1">
          <div v-if="item.tags && item.tags.length > 0" class="flex flex-wrap gap-1.5 mb-3">
            <span
              v-for="tag in item.tags"
              :key="tag.id"
              class="px-2 py-0.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase rounded tracking-wider"
            >
              {{ tag.name }}
            </span>
          </div>

          <h3 class="text-lg font-bold text-white mb-2 line-clamp-1">{{ item.title }}</h3>
          <p class="text-sm text-zinc-400 line-clamp-2 flex-1 mb-4">
            {{ item.description || 'Tidak ada deskripsi.' }}
          </p>

          <div class="pt-4 border-t border-zinc-800 flex justify-between items-center">
            <a
              v-if="item.link"
              :href="item.link"
              target="_blank"
              class="text-blue-500 hover:text-blue-400 text-sm font-medium flex items-center gap-1 transition"
            >
              <Icon icon="lucide:external-link" class="w-4 h-4" /> Kunjungi Link
            </a>
            <span v-else class="text-zinc-600 text-sm italic">Tidak ada link</span>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showModal" class="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div
        class="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        @click="closeModal"
      ></div>

      <div
        class="relative bg-[#18181b] border border-zinc-800 rounded-xl w-full max-w-2xl shadow-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto"
      >
        <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <Icon
            :icon="isEditing ? 'lucide:pencil' : 'lucide:layout-template'"
            class="w-6 h-6 text-blue-500"
          />
          {{ isEditing ? 'Edit Portofolio' : 'Tambah Portofolio' }}
        </h3>

        <form @submit.prevent="submitForm" class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="space-y-4">
            <div class="space-y-2">
              <label class="block text-sm font-medium text-zinc-400">Judul Proyek</label>
              <input
                v-model="form.title"
                type="text"
                class="w-full bg-[#09090b] border border-zinc-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-600 transition placeholder-zinc-600"
                placeholder="Misal: Website E-Commerce"
                required
              />
            </div>

            <div class="space-y-2">
              <label class="block text-sm font-medium text-zinc-400">Deskripsi Singkat</label>
              <textarea
                v-model="form.description"
                rows="3"
                class="w-full bg-[#09090b] border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-600 transition placeholder-zinc-600 resize-none"
                placeholder="Ceritakan sedikit tentang proyek ini..."
              ></textarea>
            </div>

            <div class="space-y-2">
              <label class="block text-sm font-medium text-zinc-400">Link / URL Demo</label>
              <div class="relative">
                <Icon
                  icon="lucide:link"
                  class="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4"
                />
                <input
                  v-model="form.link"
                  type="text"
                  class="w-full bg-[#09090b] border border-zinc-700 rounded-lg pl-10 pr-4 py-2.5 text-white focus:outline-none focus:border-blue-600 transition placeholder-zinc-600"
                  placeholder="https://..."
                />
              </div>
            </div>

            <div class="space-y-2">
              <label class="block text-sm font-medium text-zinc-400"
                >Tags (Pisahkan dengan koma)</label
              >
              <input
                v-model="form.tagsInput"
                type="text"
                class="w-full bg-[#09090b] border border-zinc-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-600 transition placeholder-zinc-600"
                placeholder="Misal: Vue, Tailwind, NodeJS"
              />
            </div>
          </div>

          <div class="flex flex-col h-full">
            <ImageUploader
              label="Gambar Preview"
              :initial-image="form.thumbnailPreview"
              @file-selected="imageFile = $event"
              @cleared="handleClearImage"
              class="h-full"
            />
          </div>

          <div
            class="col-span-1 md:col-span-2 flex justify-end gap-3 mt-4 pt-6 border-t border-zinc-800"
          >
            <button
              type="button"
              @click="closeModal"
              class="px-5 py-2.5 rounded-lg border border-zinc-700 text-zinc-300 hover:bg-zinc-800 transition font-medium text-sm"
            >
              Batal
            </button>
            <button
              type="submit"
              :disabled="isSubmitting"
              class="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg transition text-sm flex items-center gap-2 disabled:opacity-50"
            >
              <Icon v-if="isSubmitting" icon="lucide:loader-2" class="w-4 h-4 animate-spin" />
              {{ isSubmitting ? 'Menyimpan...' : 'Simpan Portofolio' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
