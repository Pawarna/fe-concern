<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { Icon } from '@iconify/vue'
import { api } from '@/api'

// --- STATE ---
const categories = ref<any[]>([])
const isLoading = ref(true)
const isSubmitting = ref(false)
const showModal = ref(false)
const isEditing = ref(false)

// Search State
const searchQuery = ref('')

// Form State
const form = ref({
  id: null as number | null,
  name: '',
  slug: '',
})

// --- FETCH DATA ---
const fetchCategories = async () => {
  isLoading.value = true
  try {
    const res = await api.get('/category')
    // Sesuaikan dengan struktur respons API kamu
    categories.value = res.data.data || res.data.result || res.data
  } catch (error) {
    console.error('Gagal ambil kategori:', error)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchCategories()
})

// --- FILTERING ---
const filteredCategories = computed(() => {
  if (!searchQuery.value) return categories.value
  return categories.value.filter((cat) =>
    cat.name.toLowerCase().includes(searchQuery.value.toLowerCase()),
  )
})

// --- LOGIC MODAL & FORM ---
const openModal = (category: any = null) => {
  if (category) {
    // Mode Edit
    isEditing.value = true
    form.value = {
      id: category.id,
      name: category.name,
      slug: category.slug,
    }
  } else {
    // Mode Tambah Baru
    isEditing.value = false
    form.value = { id: null, name: '', slug: '' }
  }
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  form.value = { id: null, name: '', slug: '' }
}

// Auto Generate Slug saat Nama diketik
const handleNameInput = () => {
  // Hanya auto-generate jika user belum mengedit slug secara manual (opsional logic)
  // Di sini kita paksa generate biar gampang
  form.value.slug = form.value.name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Hapus karakter aneh
    .replace(/\s+/g, '-') // Ganti spasi dengan -
    .replace(/-+/g, '-') // Hapus dash ganda
}

// --- CRUD ACTIONS ---
const submitForm = async () => {
  if (!form.value.name) return alert('Nama Kategori wajib diisi!')

  isSubmitting.value = true
  try {
    if (isEditing.value && form.value.id) {
      // UPDATE
      await api.put(`/category/${form.value.id}`, {
        name: form.value.name,
        slug: form.value.slug,
      })
    } else {
      // CREATE
      await api.post('/category', {
        name: form.value.name,
        slug: form.value.slug,
      })
    }

    // Refresh Data & Tutup Modal
    await fetchCategories()
    closeModal()
  } catch (error: any) {
    alert(error.response?.data?.message || 'Gagal menyimpan kategori.')
  } finally {
    isSubmitting.value = false
  }
}

const deleteCategory = async (id: number) => {
  if (
    !confirm(
      'Yakin ingin menghapus kategori ini? Artikel di dalamnya mungkin akan kehilangan kategori.',
    )
  )
    return

  try {
    await api.delete(`/category/${id}`)
    await fetchCategories()
  } catch (error) {
    alert('Gagal menghapus kategori.')
  }
}
</script>

<template>
  <div class="min-h-screen bg-[#09090b] text-zinc-200 font-sans p-6 pb-20">
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <div>
        <h1 class="text-3xl font-bold text-white tracking-tight">Kategori</h1>
        <p class="text-zinc-500 mt-1">Kelola kategori untuk mengelompokkan artikel.</p>
      </div>
      <button
        @click="openModal()"
        class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg flex items-center gap-2 font-medium shadow-lg shadow-blue-900/20 transition"
      >
        <Icon icon="lucide:plus" class="w-4 h-4" />
        Tambah Kategori
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
          placeholder="Cari kategori..."
          class="w-full bg-[#18181b] border border-zinc-800 rounded-lg pl-10 pr-4 py-2.5 text-zinc-200 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition placeholder-zinc-600"
        />
      </div>
    </div>

    <div class="bg-[#18181b] border border-zinc-800 rounded-xl overflow-hidden shadow-sm">
      <div v-if="isLoading" class="p-8 text-center text-zinc-500 animate-pulse">
        Memuat data kategori...
      </div>

      <div
        v-else-if="filteredCategories.length === 0"
        class="p-12 text-center flex flex-col items-center justify-center"
      >
        <div class="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mb-3">
          <Icon icon="lucide:folder-open" class="w-6 h-6 text-zinc-600" />
        </div>
        <p class="text-zinc-400 font-medium">Tidak ada kategori ditemukan.</p>
      </div>

      <div v-else class="overflow-x-auto">
        <table class="w-full text-left text-sm">
          <thead
            class="bg-zinc-900/50 border-b border-zinc-800 text-zinc-400 uppercase tracking-wider text-xs font-semibold"
          >
            <tr>
              <th class="px-6 py-4 w-16 text-center">No</th>
              <th class="px-6 py-4">Nama Kategori</th>
              <th class="px-6 py-4">Slug (URL)</th>
              <th class="px-6 py-4 text-center">Artikel</th>
              <th class="px-6 py-4 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-zinc-800">
            <tr
              v-for="(cat, index) in filteredCategories"
              :key="cat.id"
              class="group hover:bg-zinc-800/50 transition"
            >
              <td class="px-6 py-4 text-center text-zinc-500">{{ index + 1 }}</td>
              <td class="px-6 py-4 font-medium text-white">{{ cat.name }}</td>
              <td class="px-6 py-4">
                <span
                  class="bg-zinc-800 border border-zinc-700 text-zinc-400 px-2 py-1 rounded text-xs font-mono"
                >
                  /{{ cat.slug }}
                </span>
              </td>
              <td class="px-6 py-4 text-center text-zinc-500">
                {{ cat.articles_count || '-' }}
              </td>
              <td class="px-6 py-4 text-right">
                <div class="flex items-center justify-end gap-2">
                  <button
                    @click="openModal(cat)"
                    class="p-2 text-zinc-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition"
                    title="Edit"
                  >
                    <Icon icon="lucide:pencil" class="w-4 h-4" />
                  </button>
                  <button
                    @click="deleteCategory(cat.id)"
                    class="p-2 text-zinc-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition"
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
    </div>

    <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        class="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        @click="closeModal"
      ></div>

      <div
        class="relative bg-[#18181b] border border-zinc-800 rounded-xl w-full max-w-md shadow-2xl p-6 transform transition-all scale-100"
      >
        <h3 class="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Icon
            :icon="isEditing ? 'lucide:pencil' : 'lucide:plus-circle'"
            class="w-5 h-5 text-blue-500"
          />
          {{ isEditing ? 'Edit Kategori' : 'Tambah Kategori' }}
        </h3>

        <form @submit.prevent="submitForm" class="space-y-4">
          <div class="space-y-2">
            <label class="block text-sm font-medium text-zinc-400">Nama Kategori</label>
            <input
              v-model="form.name"
              @input="handleNameInput"
              type="text"
              class="w-full bg-[#09090b] border border-zinc-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition placeholder-zinc-600"
              placeholder="Contoh: Teknologi"
              required
            />
          </div>

          <div class="space-y-2">
            <label class="block text-sm font-medium text-zinc-400">Slug URL</label>
            <input
              v-model="form.slug"
              type="text"
              class="w-full bg-[#09090b] border border-zinc-700 rounded-lg px-4 py-2.5 text-zinc-400 focus:outline-none focus:border-zinc-500 transition font-mono text-sm"
              placeholder="otomatis-terisi"
            />
            <p class="text-xs text-zinc-600">Slug dibuat otomatis dari nama kategori.</p>
          </div>

          <div class="flex justify-end gap-3 mt-8">
            <button
              type="button"
              @click="closeModal"
              class="px-4 py-2 rounded-lg border border-zinc-700 text-zinc-300 hover:bg-zinc-800 transition text-sm font-medium"
            >
              Batal
            </button>
            <button
              type="submit"
              :disabled="isSubmitting"
              class="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-lg transition text-sm flex items-center gap-2 disabled:opacity-50"
            >
              <Icon v-if="isSubmitting" icon="lucide:loader-2" class="w-4 h-4 animate-spin" />
              {{ isSubmitting ? 'Menyimpan...' : 'Simpan' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
