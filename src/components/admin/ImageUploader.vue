<script setup lang="ts">
import { ref, watch } from 'vue'
import { Icon } from '@iconify/vue'
import imageCompression from 'browser-image-compression'
import { useAlertStore } from '@/stores/alert'

// 1. Terima Props dari Parent (Halaman yang pakai komponen ini)
const props = defineProps<{
  initialImage?: string // Untuk nampilin gambar pas Edit
  label?: string // Teks label di atas kotak (opsional)
}>()

// 2. Emit event ke Parent
const emit = defineEmits(['file-selected', 'cleared'])

const alertStore = useAlertStore()
const isCompressing = ref(false)
const previewUrl = ref(props.initialImage || '')

// Pantau perubahan initialImage (karena saat Edit, data dari API datangnya telat/async)
watch(
  () => props.initialImage,
  (newVal) => {
    if (newVal) previewUrl.value = newVal
  },
)

// 3. Logika Kompresi (Pindah ke sini semua)
const handleImageUpload = async (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (!file) return

  if (!file.type.startsWith('image/')) {
    alertStore.toast('Harap upload file gambar!', 'error')
    return
  }

  try {
    isCompressing.value = true
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
      fileType: 'image/webp',
    }

    const compressedFile = await imageCompression(file, options)
    previewUrl.value = URL.createObjectURL(compressedFile) // Tampilkan preview lokal

    // KIRIM FILE HASIL KOMPRESI KE PARENT!
    emit('file-selected', compressedFile)
  } catch (error) {
    alertStore.toast('Gagal memproses gambar', 'error')
  } finally {
    isCompressing.value = false
    ;(event.target as HTMLInputElement).value = '' // Reset input
  }
}

const removeImage = () => {
  previewUrl.value = ''
  emit('cleared') // Beritahu parent kalau gambar dihapus
}
</script>

<template>
  <div class="flex flex-col">
    <label v-if="label" class="block text-sm font-medium text-zinc-400 mb-2">
      {{ label }}
    </label>

    <div
      class="relative flex-1 w-full h-full min-h-[200px] rounded-lg overflow-hidden border border-zinc-700 bg-[#09090b]"
    >
      <div
        v-if="isCompressing"
        class="absolute inset-0 bg-black/80 flex flex-col items-center justify-center z-20 backdrop-blur-sm"
      >
        <Icon icon="lucide:loader-2" class="w-8 h-8 text-blue-500 animate-spin mb-3" />
        <span class="text-sm font-bold text-white tracking-wide">Memproses...</span>
      </div>

      <div v-else-if="previewUrl" class="relative group w-full h-full min-h-[200px]">
        <img
          :src="previewUrl"
          class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition"
        />
        <div
          class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2 backdrop-blur-sm"
        >
          <button
            type="button"
            @click="removeImage"
            class="bg-red-500 hover:bg-red-600 text-white p-2.5 rounded-lg shadow-lg transition"
            title="Hapus Gambar"
          >
            <Icon icon="lucide:trash-2" class="w-5 h-5" />
          </button>
          <label
            class="bg-zinc-700 hover:bg-zinc-600 text-white p-2.5 rounded-lg shadow-lg transition cursor-pointer"
            title="Ganti Gambar"
          >
            <input type="file" @change="handleImageUpload" class="hidden" accept="image/*" />
            <Icon icon="lucide:refresh-cw" class="w-5 h-5" />
          </label>
        </div>
      </div>

      <label
        v-else
        class="w-full h-full min-h-[200px] flex flex-col items-center justify-center text-zinc-500 hover:border-blue-500 hover:text-blue-500 hover:bg-blue-500/5 transition cursor-pointer border-2 border-dashed border-transparent p-4 text-center"
      >
        <input type="file" @change="handleImageUpload" class="hidden" accept="image/*" />
        <Icon
          icon="lucide:image-plus"
          class="w-10 h-10 mb-3 text-zinc-600 group-hover:text-blue-500 transition-colors"
        />
        <span class="text-sm font-medium">Klik untuk Upload Gambar</span>
        <span class="text-xs text-zinc-500 mt-1">Maks. 2MB</span>
      </label>
    </div>
  </div>
</template>
