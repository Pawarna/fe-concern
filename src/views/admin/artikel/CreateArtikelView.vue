<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'
import { api } from '@/api'
import ArticleEditor from '@/components/admin/ArticleEditor.vue'
import ImageUploader from '@/components/admin/ImageUploader.vue'
import { useAlertStore } from '@/stores/alert'

const alertStore = useAlertStore()

const router = useRouter()
const isLoading = ref(false)
const categories = ref<{ id: number; name: string }[]>([])
const form = ref({
  title: '',
  categoryId: '' as string | number,
  status: 'DRAFT',
  content: {},
  thumbnailPreview: '',
})
const imageFile = ref<File | null>(null)

onMounted(async () => {
  try {
    const res = await api.get('/category')
    categories.value = res.data.result || res.data
  } catch (err) {
    console.error(err)
  }
})

const removeImage = () => {
  imageFile.value = null
  form.value.thumbnailPreview = ''
}

const submitArticle = async () => {
  if (!form.value.title || !form.value.categoryId)
    return alertStore.toast('Judul dan Kategori wajib diisi!', 'error')
  isLoading.value = true
  try {
    const formData = new FormData()
    formData.append('title', form.value.title)
    formData.append('categoryId', String(form.value.categoryId))
    formData.append('status', form.value.status)
    formData.append('content', JSON.stringify(form.value.content))
    if (imageFile.value) formData.append('file', imageFile.value)

    await api.post('/artikel', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
    alertStore.toast('Artikel berhasil disimpan!', 'success')
    router.push('/admin/artikels')
  } catch (error: any) {
    alertStore.toast(error.response?.data?.error[0].message || 'Gagal menyimpan.', 'error')
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="min-h-screen bg-[#09090b] text-zinc-200 font-sans pb-32">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-white tracking-tight">Buat Artikel Baru</h1>
      <p class="text-zinc-500 mt-1">Isi detail artikel dan konten di bawah ini.</p>
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
                placeholder="Masukkan judul artikel yang menarik..."
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
                    <option value="" disabled>Pilih Kategori</option>
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
            <ImageUploader
              label="Gambar Sampul"
              :initial-image="form.thumbnailPreview"
              @file-selected="imageFile = $event"
              @cleared="removeImage"
            />
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
          Pastikan konten sudah benar sebelum disimpan.
        </div>
        <div class="flex gap-3">
          <router-link
            to="/admin/artikels"
            class="px-5 py-2.5 rounded-lg border border-zinc-700 text-zinc-300 hover:bg-zinc-800 font-medium transition text-sm"
          >
            Batal
          </router-link>
          <button
            @click="submitArticle"
            :disabled="isLoading"
            class="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-lg shadow-blue-900/20 transition flex items-center gap-2 text-sm disabled:opacity-50"
          >
            <Icon v-if="isLoading" icon="lucide:loader-2" class="w-4 h-4 animate-spin" />
            {{ isLoading ? 'Menyimpan...' : 'Simpan Artikel' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
