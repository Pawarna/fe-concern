<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'
import { api } from '@/api'
import ArticleEditor from '@/components/admin/ArticleEditor.vue'
import { useAlertStore } from '@/stores/alert'

const alertStore = useAlertStore()

const route = useRoute()
const router = useRouter()
const articleId = route.params.id
const isLoading = ref(false)
const isFetching = ref(true)

const categories = ref<{ id: number; name: string }[]>([])
const form = ref({
  title: '',
  categoryId: '' as string | number,
  status: 'PUBLISHED',
  content: {},
  thumbnailPreview: '',
})
const imageFile = ref<File | null>(null)

onMounted(async () => {
  try {
    // 1. Ambil Data Kategori
    const catRes = await api.get('/category')
    categories.value = catRes.data.result || catRes.data

    // 2. Ambil Data Artikel yang mau diedit
    const artRes = await api.get(`/artikel/${articleId}`)
    const data = artRes.data.result || artRes.data

    // 3. Isi Form dengan data lama
    form.value.title = data.title
    form.value.categoryId = data.categoryId || (data.category ? data.category.id : '')
    form.value.status = data.status
    form.value.thumbnailPreview = data.thumbnail

    // Parse Konten JSON
    if (data.content) {
      form.value.content =
        typeof data.content === 'string' ? JSON.parse(data.content) : data.content
    }
  } catch (err) {
    console.error(err)
    alert('Gagal memuat data artikel.')
    router.push('/admin/artikels')
  } finally {
    isFetching.value = false
  }
})

const handleImageUpload = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (file) {
    imageFile.value = file
    form.value.thumbnailPreview = URL.createObjectURL(file)
  }
}

const removeImage = () => {
  imageFile.value = null
  form.value.thumbnailPreview = ''
}

const updateArticle = async () => {
  if (!form.value.title || !form.value.categoryId)
    return alertStore.toast('Judul dan Kategori wajib diisi!', 'error')
  isLoading.value = true
  try {
    const formData = new FormData()
    formData.append('title', form.value.title)
    formData.append('categoryId', String(form.value.categoryId))
    formData.append('status', form.value.status)
    formData.append('content', JSON.stringify(form.value.content))

    // Hanya kirim file jika user upload gambar baru
    if (imageFile.value) {
      formData.append('file', imageFile.value)
    }

    await api.put(`/artikel/${articleId}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })

    alertStore.toast('Artikel berhasil diperbarui!', 'success')
    router.push('/admin/artikels')
  } catch (error: any) {
    alertStore.toast(error.response?.data?.message || 'Gagal update artikel.', 'error')
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="min-h-screen bg-[#09090b] text-zinc-200 font-sans pb-32">
    <div v-if="isFetching" class="flex h-[80vh] items-center justify-center">
      <div class="flex flex-col items-center gap-3">
        <Icon icon="lucide:loader-2" class="w-10 h-10 animate-spin text-blue-600" />
        <span class="text-zinc-500 text-sm">Memuat data artikel...</span>
      </div>
    </div>

    <div v-else>
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-white tracking-tight">Edit Artikel</h1>
        <p class="text-zinc-500 mt-1">Perbarui konten dan detail artikel di bawah ini.</p>
      </div>

      <div class="max-w-5xl mx-auto space-y-8">
        <div class="bg-[#18181b] border border-zinc-800 rounded-xl p-6 shadow-sm">
          <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div class="md:col-span-8 space-y-5">
              <div class="space-y-2">
                <label class="block text-sm font-medium text-zinc-400">Judul Artikel</label>
                <input
                  v-model="form.title"
                  type="text"
                  class="w-full bg-[#09090b] border border-zinc-700 rounded-lg px-4 py-3 text-white text-lg font-medium focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition placeholder-zinc-600"
                  placeholder="Judul artikel..."
                />
              </div>

              <div class="grid grid-cols-2 gap-5">
                <div class="space-y-2">
                  <label class="block text-sm font-medium text-zinc-400">Kategori</label>
                  <div class="relative">
                    <select
                      v-model="form.categoryId"
                      class="w-full bg-[#09090b] border border-zinc-700 rounded-lg px-4 py-2.5 text-white appearance-none focus:outline-none focus:border-blue-600 cursor-pointer"
                    >
                      <option v-for="cat in categories" :key="cat.id" :value="cat.id">
                        {{ cat.name }}
                      </option>
                    </select>
                    <Icon
                      icon="lucide:chevron-down"
                      class="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none"
                    />
                  </div>
                </div>

                <div class="space-y-2">
                  <label class="block text-sm font-medium text-zinc-400">Status</label>
                  <div class="relative">
                    <select
                      v-model="form.status"
                      class="w-full bg-[#09090b] border border-zinc-700 rounded-lg px-4 py-2.5 text-white appearance-none focus:outline-none focus:border-blue-600 cursor-pointer"
                    >
                      <option value="DRAFT">Draft</option>
                      <option value="PUBLISHED">Published</option>
                    </select>
                    <Icon
                      icon="lucide:chevron-down"
                      class="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="md:col-span-4 flex flex-col">
              <label class="block text-sm font-medium text-zinc-400 mb-2">Gambar Sampul</label>

              <div
                v-if="form.thumbnailPreview"
                class="relative group rounded-lg overflow-hidden border border-zinc-700 bg-[#09090b] h-full min-h-[140px]"
              >
                <img
                  :src="form.thumbnailPreview"
                  class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition"
                />
                <div
                  class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2"
                >
                  <button
                    @click="removeImage"
                    class="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg shadow-lg transition"
                    title="Hapus"
                  >
                    <Icon icon="lucide:trash-2" class="w-4 h-4" />
                  </button>
                  <label
                    class="bg-zinc-700 hover:bg-zinc-600 text-white p-2 rounded-lg shadow-lg transition cursor-pointer"
                    title="Ganti"
                  >
                    <input
                      type="file"
                      @change="handleImageUpload"
                      class="hidden"
                      accept="image/*"
                    />
                    <Icon icon="lucide:refresh-cw" class="w-4 h-4" />
                  </label>
                </div>
              </div>

              <label
                v-else
                class="border-2 border-dashed border-zinc-700 rounded-lg flex flex-col items-center justify-center text-zinc-500 hover:border-blue-500 hover:text-blue-500 hover:bg-blue-500/5 transition cursor-pointer h-full min-h-[140px]"
              >
                <input type="file" @change="handleImageUpload" class="hidden" accept="image/*" />
                <Icon icon="lucide:image-plus" class="w-8 h-8 mb-2" />
                <span class="text-xs font-medium">Upload Sampul</span>
              </label>
            </div>
          </div>
        </div>

        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <label class="block text-lg font-bold text-white">Konten Artikel</label>
            <span class="text-xs text-zinc-500 bg-zinc-900 border border-zinc-800 px-2 py-1 rounded"
              >Markdown / Rich Text</span
            >
          </div>

          <ArticleEditor v-model="form.content" />
        </div>
      </div>

      <div
        class="fixed bottom-0 right-0 left-0 md:left-64 bg-[#09090b]/80 backdrop-blur-md border-t border-zinc-800 p-4 z-40"
      >
        <div class="max-w-5xl mx-auto flex justify-between items-center">
          <div class="text-xs text-zinc-500 hidden md:block">
            Pastikan perubahan sudah benar sebelum disimpan.
          </div>
          <div class="flex gap-3">
            <router-link
              to="/admin/artikels"
              class="px-5 py-2.5 rounded-lg border border-zinc-700 text-zinc-300 hover:bg-zinc-800 font-medium transition text-sm"
            >
              Batal
            </router-link>
            <button
              @click="updateArticle"
              :disabled="isLoading"
              class="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-lg shadow-blue-900/20 transition flex items-center gap-2 text-sm disabled:opacity-50"
            >
              <Icon v-if="isLoading" icon="lucide:loader-2" class="w-4 h-4 animate-spin" />
              {{ isLoading ? 'Menyimpan...' : 'Simpan Perubahan' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
