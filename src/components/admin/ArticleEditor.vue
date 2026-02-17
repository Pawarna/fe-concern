<script setup lang="ts">
import { ref, onBeforeUnmount, watch } from 'vue'
import { useEditor, EditorContent, VueNodeViewRenderer } from '@tiptap/vue-3'

import { BubbleMenu } from '@tiptap/vue-3/menus'

import StarterKit from '@tiptap/starter-kit'
import ImageExtension from '@tiptap/extension-image'
import LinkExtension from '@tiptap/extension-link'
import UnderlineExtension from '@tiptap/extension-underline'
import TextAlignExtension from '@tiptap/extension-text-align'
import PlaceholderExtension from '@tiptap/extension-placeholder'
import BubbleMenuExtension from '@tiptap/extension-bubble-menu'

import { Icon } from '@iconify/vue'
import { api } from '@/api'

import ImageResizeComponent from './tiptap/ImageResizeComponent.vue'
import ImageCropperModal from './ImageCropperModal.vue'

const props = defineProps<{ modelValue: any }>()
const emit = defineEmits(['update:modelValue'])

// State Cropper
const showCropper = ref(false)
const selectedImageForCrop = ref<File | null>(null)

// --- SETUP EDITOR ---
const editor = useEditor({
  content: props.modelValue,
  extensions: [
    StarterKit, // Sudah termasuk Blockquote, HorizontalRule, Heading, dll
    UnderlineExtension,
    BubbleMenuExtension,

    LinkExtension.configure({
      openOnClick: false,
      HTMLAttributes: { class: 'text-blue-500 underline cursor-pointer' },
    }),
    TextAlignExtension.configure({
      types: ['heading', 'paragraph', 'image', 'blockquote'],
    }),
    PlaceholderExtension.configure({
      placeholder: 'Mulai tulis cerita menarikmu di sini...',
    }),
    ImageExtension.extend({
      addAttributes() {
        return {
          ...this.parent?.(),
          width: {
            default: '100%',
            renderHTML: (attrs) => ({ width: attrs.width }),
          },
        }
      },
      addNodeView() {
        return VueNodeViewRenderer(ImageResizeComponent)
      },
    }).configure({ inline: true, allowBase64: true }),
  ],
  editorProps: {
    // Styling class prose (pastikan plugin typography atau CSS manual sudah terpasang)
    attributes: {
      class:
        'prose prose-invert prose-lg max-w-none focus:outline-none min-h-[500px] px-8 py-6 pb-20 [&>img]:rounded-xl',
    },
  },
  onUpdate: ({ editor }) => {
    emit('update:modelValue', editor.getJSON())
  },
})

watch(
  () => props.modelValue,
  (newValue) => {
    if (editor.value && newValue && !editor.value.isDestroyed) {
      const isSame = JSON.stringify(editor.value.getJSON()) === JSON.stringify(newValue)
      if (!isSame) editor.value.commands.setContent(newValue)
    }
  },
)

onBeforeUnmount(() => editor.value?.destroy())

// --- LOGIC IMAGE ---
const triggerImageSelect = () => {
  const input = document.createElement('input')
  input.type = 'file'
  input.accept = 'image/*'
  input.onchange = (event) => {
    const file = (event.target as HTMLInputElement).files?.[0]
    if (file) {
      selectedImageForCrop.value = file
      showCropper.value = true
    }
  }
  input.click()
}

const handleCropComplete = async (croppedFile: File) => {
  showCropper.value = false
  try {
    const formData = new FormData()
    formData.append('file', croppedFile)

    const res = await api.post('/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })

    const url = res.data.result?.url || res.data.url
    if (url) {
      editor.value?.chain().focus().setImage({ src: url }).run()
    }
  } catch (error) {
    console.error('Upload error:', error)
    alert('Gagal mengupload gambar.')
  }
}

const setLink = () => {
  const previousUrl = editor.value?.getAttributes('link').href
  const url = window.prompt('URL:', previousUrl)
  if (url === null) return
  if (url === '') {
    editor.value?.chain().focus().extendMarkRange('link').unsetLink().run()
    return
  }
  editor.value?.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
}
</script>

<template>
  <div class="relative group/editor">
    <div
      class="border border-zinc-800 rounded-xl bg-[#18181b] overflow-hidden flex flex-col shadow-sm"
    >
      <div
        v-if="editor"
        class="flex flex-wrap items-center gap-1 p-2 border-b border-zinc-800 bg-[#18181b] sticky top-0 z-20"
      >
        <button
          @click="editor.chain().focus().undo().run()"
          :disabled="!editor.can().undo()"
          class="p-2 rounded hover:bg-zinc-800 text-zinc-400 disabled:opacity-30"
        >
          <Icon icon="lucide:undo" class="w-4 h-4" />
        </button>
        <button
          @click="editor.chain().focus().redo().run()"
          :disabled="!editor.can().redo()"
          class="p-2 rounded hover:bg-zinc-800 text-zinc-400 disabled:opacity-30"
        >
          <Icon icon="lucide:redo" class="w-4 h-4" />
        </button>
        <div class="w-px h-5 bg-zinc-700 mx-1"></div>

        <button
          @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
          :class="{ 'bg-blue-600/20 text-blue-400': editor.isActive('heading', { level: 1 }) }"
          class="p-2 rounded hover:bg-zinc-800 text-zinc-400 font-bold text-xs"
        >
          H1
        </button>
        <button
          @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
          :class="{ 'bg-blue-600/20 text-blue-400': editor.isActive('heading', { level: 2 }) }"
          class="p-2 rounded hover:bg-zinc-800 text-zinc-400 font-bold text-xs"
        >
          H2
        </button>
        <button
          @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
          :class="{ 'bg-blue-600/20 text-blue-400': editor.isActive('heading', { level: 3 }) }"
          class="p-2 rounded hover:bg-zinc-800 text-zinc-400 font-bold text-xs"
        >
          H3
        </button>
        <div class="w-px h-5 bg-zinc-700 mx-1"></div>

        <button
          @click="editor.chain().focus().toggleBold().run()"
          :class="{ 'bg-zinc-700 text-white': editor.isActive('bold') }"
          class="p-2 rounded hover:bg-zinc-800 text-zinc-400"
        >
          <Icon icon="lucide:bold" class="w-4 h-4" />
        </button>
        <button
          @click="editor.chain().focus().toggleItalic().run()"
          :class="{ 'bg-zinc-700 text-white': editor.isActive('italic') }"
          class="p-2 rounded hover:bg-zinc-800 text-zinc-400"
        >
          <Icon icon="lucide:italic" class="w-4 h-4" />
        </button>
        <button
          @click="editor.chain().focus().toggleUnderline().run()"
          :class="{ 'bg-zinc-700 text-white': editor.isActive('underline') }"
          class="p-2 rounded hover:bg-zinc-800 text-zinc-400"
        >
          <Icon icon="lucide:underline" class="w-4 h-4" />
        </button>
        <button
          @click="editor.chain().focus().toggleBlockquote().run()"
          :class="{ 'bg-zinc-700 text-white': editor.isActive('blockquote') }"
          class="p-2 rounded hover:bg-zinc-800 text-zinc-400"
          title="Quote"
        >
          <Icon icon="lucide:quote" class="w-4 h-4" />
        </button>
        <div class="w-px h-5 bg-zinc-700 mx-1"></div>

        <button
          @click="editor.chain().focus().setTextAlign('left').run()"
          :class="{ 'bg-zinc-700 text-white': editor.isActive({ textAlign: 'left' }) }"
          class="p-2 rounded hover:bg-zinc-800 text-zinc-400"
        >
          <Icon icon="lucide:align-left" class="w-4 h-4" />
        </button>
        <button
          @click="editor.chain().focus().setTextAlign('center').run()"
          :class="{ 'bg-zinc-700 text-white': editor.isActive({ textAlign: 'center' }) }"
          class="p-2 rounded hover:bg-zinc-800 text-zinc-400"
        >
          <Icon icon="lucide:align-center" class="w-4 h-4" />
        </button>
        <button
          @click="editor.chain().focus().setTextAlign('right').run()"
          :class="{ 'bg-zinc-700 text-white': editor.isActive({ textAlign: 'right' }) }"
          class="p-2 rounded hover:bg-zinc-800 text-zinc-400"
        >
          <Icon icon="lucide:align-right" class="w-4 h-4" />
        </button>
        <div class="w-px h-5 bg-zinc-700 mx-1"></div>

        <button
          @click="editor.chain().focus().toggleBulletList().run()"
          :class="{ 'bg-zinc-700 text-white': editor.isActive('bulletList') }"
          class="p-2 rounded hover:bg-zinc-800 text-zinc-400"
        >
          <Icon icon="lucide:list" class="w-4 h-4" />
        </button>
        <button
          @click="editor.chain().focus().toggleOrderedList().run()"
          :class="{ 'bg-zinc-700 text-white': editor.isActive('orderedList') }"
          class="p-2 rounded hover:bg-zinc-800 text-zinc-400"
        >
          <Icon icon="lucide:list-ordered" class="w-4 h-4" />
        </button>
        <button
          @click="editor.chain().focus().liftListItem('listItem').run()"
          :disabled="!editor.can().liftListItem('listItem')"
          class="p-2 rounded hover:bg-zinc-800 text-zinc-400 disabled:opacity-20"
          title="Outdent"
        >
          <Icon icon="lucide:outdent" class="w-4 h-4" />
        </button>
        <button
          @click="editor.chain().focus().sinkListItem('listItem').run()"
          :disabled="!editor.can().sinkListItem('listItem')"
          class="p-2 rounded hover:bg-zinc-800 text-zinc-400 disabled:opacity-20"
          title="Indent"
        >
          <Icon icon="lucide:indent" class="w-4 h-4" />
        </button>
        <div class="w-px h-5 bg-zinc-700 mx-1"></div>

        <button
          @click="setLink"
          :class="{ 'bg-zinc-700 text-white': editor.isActive('link') }"
          class="p-2 rounded hover:bg-zinc-800 text-zinc-400"
        >
          <Icon icon="lucide:link" class="w-4 h-4" />
        </button>
        <button
          @click="triggerImageSelect"
          class="p-2 rounded hover:bg-zinc-800 text-zinc-400 hover:text-blue-400 transition"
          title="Image"
        >
          <Icon icon="lucide:image-plus" class="w-4 h-4" />
        </button>
        <button
          @click="editor.chain().focus().setHorizontalRule().run()"
          class="p-2 rounded hover:bg-zinc-800 text-zinc-400"
          title="Divider"
        >
          <Icon icon="lucide:minus" class="w-4 h-4" />
        </button>
      </div>

      <div v-if="editor" class="flex-1 bg-[#09090b] cursor-text">
        <editor-content :editor="editor" />
      </div>
    </div>

    <bubble-menu
      v-if="editor"
      :editor="editor"
      :tippy-options="{ duration: 100, maxWidth: 400 }"
      class="bg-zinc-900 border border-zinc-700 rounded-lg shadow-xl flex p-1 gap-1 z-50"
    >
      <button
        @click="editor.chain().focus().toggleBold().run()"
        :class="{ 'bg-zinc-700 text-white': editor.isActive('bold') }"
        class="p-1.5 rounded hover:bg-zinc-800 text-zinc-400"
      >
        <Icon icon="lucide:bold" class="w-4 h-4" />
      </button>
      <button
        @click="editor.chain().focus().toggleItalic().run()"
        :class="{ 'bg-zinc-700 text-white': editor.isActive('italic') }"
        class="p-1.5 rounded hover:bg-zinc-800 text-zinc-400"
      >
        <Icon icon="lucide:italic" class="w-4 h-4" />
      </button>
      <button
        @click="editor.chain().focus().toggleBlockquote().run()"
        :class="{ 'bg-zinc-700 text-white': editor.isActive('blockquote') }"
        class="p-1.5 rounded hover:bg-zinc-800 text-zinc-400"
      >
        <Icon icon="lucide:quote" class="w-4 h-4" />
      </button>
      <div class="w-px h-4 bg-zinc-700 self-center mx-1"></div>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
        :class="{ 'bg-zinc-700 text-white': editor.isActive('heading', { level: 2 }) }"
        class="p-1.5 rounded hover:bg-zinc-800 text-zinc-400 font-bold text-xs"
      >
        H2
      </button>
      <div class="w-px h-4 bg-zinc-700 self-center mx-1"></div>
      <button
        @click="editor.chain().focus().setTextAlign('left').run()"
        :class="{ 'bg-zinc-700 text-white': editor.isActive({ textAlign: 'left' }) }"
        class="p-1.5 rounded hover:bg-zinc-800 text-zinc-400"
      >
        <Icon icon="lucide:align-left" class="w-3 h-3" />
      </button>
      <button
        @click="editor.chain().focus().setTextAlign('center').run()"
        :class="{ 'bg-zinc-700 text-white': editor.isActive({ textAlign: 'center' }) }"
        class="p-1.5 rounded hover:bg-zinc-800 text-zinc-400"
      >
        <Icon icon="lucide:align-center" class="w-3 h-3" />
      </button>
    </bubble-menu>

    <ImageCropperModal
      :isOpen="showCropper"
      :imageFile="selectedImageForCrop"
      @close="showCropper = false"
      @crop-complete="handleCropComplete"
    />
  </div>
</template>
