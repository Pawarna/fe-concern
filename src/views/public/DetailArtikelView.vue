<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useRoute } from 'vue-router'
import { Icon } from '@iconify/vue'
import { api } from '@/api'
import { useAlertStore } from '@/stores/alert'

const alertStore = useAlertStore()

// --- TIPTAP IMPORTS ---
import { useEditor, EditorContent, VueNodeViewRenderer } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import ImageExtension from '@tiptap/extension-image'
import LinkExtension from '@tiptap/extension-link'
import UnderlineExtension from '@tiptap/extension-underline'
import TextAlignExtension from '@tiptap/extension-text-align'
import ImageResizeComponent from '@/components/admin/tiptap/ImageResizeComponent.vue'

const route = useRoute()
const slug = computed(() => String(route.params.slug || ''))
const isLoading = ref(true)
const article = ref<any>(null)

const formatDate = (dateString: string) => {
  if (!dateString) return '-'
  return new Date(dateString).toLocaleDateString('id-ID', {
    day: 'numeric', month: 'short', year: 'numeric',
  }).toUpperCase()
}

// --- SETUP READ-ONLY EDITOR (Style Updated) ---
const editor = useEditor({
  editable: false,
  content: {},
  extensions: [
    StarterKit,
    UnderlineExtension,
    LinkExtension.configure({
      HTMLAttributes: { class: 'text-white underline underline-offset-4 decoration-white/20 hover:decoration-white transition-all', target: '_blank' },
    }),
    TextAlignExtension.configure({ types: ['heading', 'paragraph', 'image', 'blockquote'] }),
    ImageExtension.extend({
      addNodeView() { return VueNodeViewRenderer(ImageResizeComponent) },
    }).configure({ inline: true, allowBase64: true }),
  ],
  editorProps: {
    attributes: {
      class: 'prose prose-invert prose-zinc max-w-none prose-headings:tracking-tighter prose-headings:uppercase prose-headings:font-black prose-p:text-zinc-400 prose-p:leading-8 prose-img:rounded-none prose-blockquote:border-white prose-blockquote:bg-white/5 prose-blockquote:py-4 prose-blockquote:px-8 prose-blockquote:not-italic prose-blockquote:text-white',
    },
  },
})

const handleShare = async () => {
  const shareData = {
    title: article.value?.title,
    url: window.location.href,
  }
  if (navigator.share) {
    try { await navigator.share(shareData) } catch (err) { console.log('Share cancel') }
  } else {
    try {
      await navigator.clipboard.writeText(window.location.href)
      alertStore.toast('LOG: LINK COPIED TO CLIPBOARD')
    } catch (err) { alertStore.toast('SHARE_ERROR', 'error') }
  }
}

onMounted(async () => {
  try {
    const res = await api.get(`/artikel/slug/${slug.value}`)
    const data = res.data.result || res.data
    article.value = data
    if (editor.value && data.content) {
      const contentJson = typeof data.content === 'string' ? JSON.parse(data.content) : data.content
      editor.value.commands.setContent(contentJson)
    }
  } catch (error) { console.error(error) } finally { isLoading.value = false }
})

onBeforeUnmount(() => { editor.value?.destroy() })
</script>

<template>
  <div class="min-h-screen bg-black text-zinc-300 font-sans selection:bg-white selection:text-black">
    <nav class="border-b border-white/5 bg-black/80 backdrop-blur-xl sticky top-0 z-40">
      <div class="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <RouterLink to="/" class="flex-1 flex items-center group">
          <div class="relative w-12 h-12 flex items-center justify-center overflow-visible">
            <img 
              src="@/assets/images/logo2.png" 
              alt="Concern Logo" 
              class="w-full h-full object-contain transition-transform duration-1000 ease-in-out group-hover:rotate-720 group-hover:scale-110"
            />
          </div>
          
          <span class="text-1xl font-black tracking-[0.1em] text-white ml-3  uppercase transition-all duration-500">
            CONCERN
          </span>
        </RouterLink>
        <router-link to="/" class="text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition">
          [ BACK_TO_BASE ]
        </router-link>
      </div>
    </nav>

    <div v-if="isLoading" class="max-w-3xl mx-auto px-6 py-20 space-y-8 animate-pulse">
      <div class="h-4 w-24 bg-zinc-900"></div>
      <div class="h-12 bg-zinc-900 w-3/4"></div>
      <div class="h-[400px] bg-zinc-900 w-full"></div>
    </div>

    <article v-else-if="article" class="max-w-3xl mx-auto px-6 py-20">
      <header class="mb-16">
        <div class="flex items-center gap-4 mb-8">
          <span v-if="article.category" class="text-[10px] font-black uppercase tracking-widest bg-white text-black px-2 py-0.5">
            {{ article.category.name }}
          </span>
          <span class="text-[10px] font-mono text-zinc-600">
            TIMESTAMP // {{ formatDate(article.createdAt) }}
          </span>
        </div>

        <h1 class="text-4xl md:text-6xl font-black text-white leading-[0.9] mb-12 uppercase tracking-tighter">
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

      <div class="relative article-content">
        <editor-content :editor="editor" />
      </div>

      <footer class="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="text-zinc-600 text-[9px] uppercase tracking-[0.3em]">
          &copy; {{ new Date().getFullYear() }} CONCERN STUDIO / CORE_LOG
        </div>
        <div class="flex items-center gap-8">
          <button @click="handleShare" class="text-zinc-500 hover:text-white flex items-center gap-2 transition-colors uppercase text-[10px] font-bold tracking-widest">
            <Icon icon="lucide:share-2" class="w-4 h-4" />
            [ Share_Journal ]
          </button>
        </div>
      </footer>
    </article>

    <div v-else class="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <div class="text-4xl font-black text-white mb-4 uppercase tracking-tighter">404 // NOT_FOUND</div>
      <p class="text-zinc-600 text-xs uppercase tracking-widest mb-10">Data stream interrupted. Article has been moved or deleted.</p>
      <router-link to="/" class="px-8 py-3 bg-white text-black text-[10px] font-black uppercase tracking-widest hover:invert transition-all">
        Return to Source
      </router-link>
    </div>
  </div>
</template>

<style scoped>
/* Typography Overrides for Tiptap Content */
:deep(.article-content) {
  font-feature-settings: "ss01", "ss02", "cv01";
}

:deep(.prose blockquote p::before), 
:deep(.prose blockquote p::after) {
  content: "";
}

::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: #000; }
::-webkit-scrollbar-thumb { background: #111; }
::-webkit-scrollbar-thumb:hover { background: #222; }
</style>