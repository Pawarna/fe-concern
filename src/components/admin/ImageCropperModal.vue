<script setup lang="ts">
import { ref, watch } from 'vue'
import { Cropper } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css'
import { Icon } from '@iconify/vue'

const props = defineProps<{
  imageFile: File | null
  isOpen: boolean
}>()

const emit = defineEmits(['close', 'crop-complete'])
const cropperRef = ref<any>(null)
const objectUrl = ref<string | null>(null)

// Reset Object URL saat file berubah agar hemat memori
watch(
  () => props.imageFile,
  (newFile) => {
    if (objectUrl.value) URL.revokeObjectURL(objectUrl.value)
    if (newFile) objectUrl.value = URL.createObjectURL(newFile)
  },
)

const cropImage = () => {
  if (cropperRef.value) {
    const { canvas } = cropperRef.value.getResult()
    if (canvas) {
      canvas.toBlob((blob: Blob) => {
        const file = new File([blob], 'cropped-image.jpg', { type: 'image/jpeg' })
        emit('crop-complete', file)
      }, 'image/jpeg')
    }
  }
}
</script>

<template>
  <div
    v-if="isOpen && imageFile"
    class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
  >
    <div
      class="bg-[#18181b] border border-zinc-700 rounded-xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
    >
      <div
        class="px-6 py-4 border-b border-zinc-700 flex justify-between items-center bg-[#18181b]"
      >
        <h3 class="text-white font-bold text-lg">Potong Gambar</h3>
        <button @click="$emit('close')" class="text-zinc-400 hover:text-white transition">
          <Icon icon="lucide:x" class="w-6 h-6" />
        </button>
      </div>

      <div class="flex-1 bg-[#09090b] overflow-hidden relative">
        <Cropper
          ref="cropperRef"
          class="h-[400px] w-full"
          :src="objectUrl"
          :stencil-props="{ aspectRatio: 0 }"
        />
      </div>

      <div class="px-6 py-4 border-t border-zinc-700 flex justify-end gap-3 bg-[#18181b]">
        <button
          @click="$emit('close')"
          class="px-5 py-2.5 rounded-lg border border-zinc-600 text-zinc-300 hover:bg-zinc-800 text-sm font-medium transition"
        >
          Batal
        </button>
        <button
          @click="cropImage"
          class="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold shadow-lg shadow-blue-900/20 transition flex items-center gap-2"
        >
          <Icon icon="lucide:crop" class="w-4 h-4" />
          Potong & Upload
        </button>
      </div>
    </div>
  </div>
</template>
