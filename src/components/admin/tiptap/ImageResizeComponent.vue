<script setup lang="ts">
import { NodeViewWrapper, nodeViewProps } from '@tiptap/vue-3'
import { ref, computed } from 'vue'

const props = defineProps(nodeViewProps)

const isResizing = ref(false)
const startX = ref(0)
const startWidth = ref(0)
const imageStyle = ref({
  width: props.node.attrs.width || '100%',
})

// --- LOGIC BARU: MAPPING ALIGNMENT ---
// Mengubah 'left'/'center'/'right' menjadi style Flexbox
const alignStyle = computed(() => {
  const align = props.node.attrs.textAlign
  switch (align) {
    case 'center':
      return { justifyContent: 'center' }
    case 'right':
      return { justifyContent: 'flex-end' }
    default:
      return { justifyContent: 'flex-start' } // Default Left
  }
})

// --- LOGIC RESIZE (Sama seperti sebelumnya) ---
const onMouseDown = (event: MouseEvent) => {
  event.preventDefault()
  isResizing.value = true
  startX.value = event.clientX

  const imgElement = (event.target as HTMLElement).parentElement?.querySelector('img')
  if (imgElement) {
    startWidth.value = imgElement.clientWidth
  }

  document.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mouseup', onMouseUp)
}

const onMouseMove = (event: MouseEvent) => {
  if (!isResizing.value) return
  const currentX = event.clientX
  const diffX = currentX - startX.value
  const newWidth = startWidth.value + diffX
  imageStyle.value.width = `${newWidth}px`
}

const onMouseUp = () => {
  isResizing.value = false
  document.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('mouseup', onMouseUp)
  props.updateAttributes({ width: imageStyle.value.width })
}
</script>

<template>
  <node-view-wrapper
    class="image-resizer relative flex my-4 group transition-all"
    :class="{ 'is-selected': selected }"
    :style="alignStyle"
  >
    <div class="relative inline-block transition-all">
      <img
        :src="node.attrs.src"
        :alt="node.attrs.alt"
        :style="{ width: node.attrs.width || imageStyle.width }"
        class="rounded-lg shadow-sm transition-all block"
        :class="selected ? 'ring-2 ring-blue-500 shadow-blue-500/20' : 'border border-zinc-700'"
      />

      <div
        v-if="selected"
        class="absolute -right-2 -bottom-2 w-5 h-5 bg-blue-500 border-2 border-white rounded-full cursor-nwse-resize z-10 shadow-md hover:scale-110 transition-transform flex items-center justify-center"
        @mousedown="onMouseDown"
      >
        <div class="w-1.5 h-1.5 bg-white rounded-full"></div>
      </div>
    </div>
  </node-view-wrapper>
</template>

<style scoped>
/* Pastikan wrapper bersifat flex agar justifyContent berfungsi */
.image-resizer {
  display: flex;
  width: 100%; /* Wajib full width agar bisa digeser kiri/kanan */
}
</style>
