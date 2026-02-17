<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useRoute } from 'vue-router'
import { Icon } from '@iconify/vue'
import { api } from '@/api' // Pastikan path api sesuai

// --- TIPTAP IMPORTS (Sama seperti di Editor) ---
import { useEditor, EditorContent, VueNodeViewRenderer } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import ImageExtension from '@tiptap/extension-image'
import LinkExtension from '@tiptap/extension-link'
import UnderlineExtension from '@tiptap/extension-underline'
import TextAlignExtension from '@tiptap/extension-text-align'
import ImageResizeComponent from '@/components/admin/tiptap/ImageResizeComponent.vue' // Gunakan component gambar yang sama

const route = useRoute()
const slug = computed(() => String(route.params.slug || '')) // Safe slug getter
const isLoading = ref(true)
const article = ref<any>(null)

// Format Tanggal Indonesia
const formatDate = (dateString: string) => {
  if (!dateString) return '-'
  return new Date(dateString).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

// --- SETUP READ-ONLY EDITOR ---
const editor = useEditor({
  editable: false, // PENTING: Mode Baca Saja
  content: {}, // Nanti diisi setelah fetch API
  extensions: [
    StarterKit,
    UnderlineExtension,
    LinkExtension.configure({
      HTMLAttributes: { class: 'text-blue-500 underline cursor-pointer', target: '_blank' },
    }),
    TextAlignExtension.configure({
      types: ['heading', 'paragraph', 'image', 'blockquote'],
    }),
    ImageExtension.extend({
      addNodeView() {
        return VueNodeViewRenderer(ImageResizeComponent)
      },
    }).configure({ inline: true, allowBase64: true }),
  ],
  editorProps: {
    // Styling typography sama persis dengan Admin
    attributes: {
      class:
        'prose prose-invert prose-lg max-w-none [&>img]:rounded-xl prose-a:text-blue-500 prose-headings:font-bold prose-blockquote:border-l-4 prose-blockquote:border-blue-600 prose-blockquote:bg-zinc-800/30 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:not-italic',
    },
  },
})

onMounted(async () => {
  try {
    const res = await api.get(`/artikel/slug/${slug.value}`) // Sesuaikan endpoint public
    const data = res.data.result || res.data

    article.value = data

    // Set Content ke Editor
    if (editor.value && data.content) {
      const contentJson = typeof data.content === 'string' ? JSON.parse(data.content) : data.content
      editor.value.commands.setContent(contentJson)
    }
  } catch (error) {
    console.error('Gagal memuat artikel:', error)
  } finally {
    isLoading.value = false
  }
})

onBeforeUnmount(() => {
  editor.value?.destroy()
})
</script>

<template>
  <div class="min-h-screen bg-[#09090b] text-zinc-200 font-sans selection:bg-blue-500/30">
    <nav class="border-b border-zinc-800 bg-[#09090b]/80 backdrop-blur-md sticky top-0 z-40">
      <div class="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <router-link
          to="/"
          class="text-xl font-bold text-white tracking-tight flex items-center gap-2"
        >
          <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
            C
          </div>
          Concern.
        </router-link>
        <router-link to="/" class="text-sm font-medium text-zinc-400 hover:text-white transition">
          Kembali ke Beranda
        </router-link>
      </div>
    </nav>

    <div v-if="isLoading" class="max-w-3xl mx-auto px-6 py-20 space-y-8 animate-pulse">
      <div class="h-8 bg-zinc-800 rounded w-3/4"></div>
      <div class="h-64 bg-zinc-800 rounded-xl w-full"></div>
      <div class="space-y-4">
        <div class="h-4 bg-zinc-800 rounded w-full"></div>
        <div class="h-4 bg-zinc-800 rounded w-5/6"></div>
        <div class="h-4 bg-zinc-800 rounded w-full"></div>
      </div>
    </div>

    <article v-else-if="article" class="max-w-3xl mx-auto px-6 py-12">
      <header class="mb-10 text-center md:text-left">
        <div
          class="flex flex-wrap items-center gap-3 text-sm text-zinc-400 mb-4 justify-center md:justify-start"
        >
          <span
            v-if="article.category"
            class="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-medium"
          >
            {{ article.category.name }}
          </span>
          <span class="flex items-center gap-1">
            <Icon icon="lucide:calendar" class="w-3.5 h-3.5" />
            {{ formatDate(article.created_at) }}
          </span>
        </div>

        <h1
          class="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-8 tracking-tight"
        >
          {{ article.title }}
        </h1>

        <div
          v-if="article.thumbnail"
          class="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-zinc-800 mb-10 group"
        >
          <img
            :src="article.thumbnail"
            :alt="article.title"
            class="w-full h-full object-cover transform transition duration-700 group-hover:scale-105"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-60"
          ></div>
        </div>
      </header>

      <div class="relative">
        <editor-content :editor="editor" />
      </div>

      <div class="mt-16 pt-8 border-t border-zinc-800 flex justify-between items-center">
        <div class="text-zinc-500 text-sm">&copy; 2024 Concern Blog. All rights reserved.</div>
        <div class="flex gap-4">
          <button class="text-zinc-400 hover:text-white">
            <Icon icon="lucide:share-2" class="w-5 h-5" />
          </button>
        </div>
      </div>
    </article>

    <div v-else class="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <div class="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mb-4">
        <Icon icon="lucide:file-question" class="w-8 h-8 text-zinc-500" />
      </div>
      <h2 class="text-2xl font-bold text-white mb-2">Artikel Tidak Ditemukan</h2>
      <p class="text-zinc-400 mb-6">Artikel yang kamu cari mungkin sudah dihapus atau URL salah.</p>
      <router-link
        to="/"
        class="px-6 py-2 bg-white text-black font-bold rounded-lg hover:bg-zinc-200 transition"
      >
        Kembali ke Home
      </router-link>
    </div>
  </div>
</template>

<style scoped>
/* Opsional: Styling tambahan untuk scrollbar jika perlu */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #09090b;
}
::-webkit-scrollbar-thumb {
  background: #27272a;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #3f3f46;
}
</style>
