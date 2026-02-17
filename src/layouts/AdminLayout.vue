<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { Icon } from '@iconify/vue'
import GlobalAlert from '@/components/admin/GlobalAlert.vue'

const router = useRouter()
const route = useRoute()

const handleLogout = () => {
  // Contoh: Hapus token dan redirect
  localStorage.removeItem('token')
  router.push('/auth/login')
}

// Helper untuk cek menu aktif
const isActive = (path: string) => route.path.startsWith(path)
</script>

<template>
  <div class="flex min-h-screen bg-[#09090b] font-sans text-zinc-200">
    <aside
      class="w-64 flex flex-col border-r border-zinc-800 bg-[#09090b] shrink-0 fixed h-full z-50"
    >
      <div class="h-16 flex items-center px-6 border-b border-zinc-800 bg-[#09090b]">
        <router-link to="/admin/dashboard" class="flex items-center gap-3 group">
          <div
            class="w-8 h-8 rounded-lg flex items-center justify-center shadow-lg /5 group-hover:scale-105 transition-transform"
          >
            <img class="rounded-lg" src="@/assets/images/logo.jpeg" alt="Logo Concern" />
          </div>

          <div class="font-bold text-xl tracking-tight leading-none select-none">
            <span class="text-blue-500">Concern</span><span class="text-zinc-200">.Admin</span>
          </div>
        </router-link>
      </div>
      <div class="flex-1 overflow-y-auto py-6 px-4 space-y-1 custom-scrollbar">
        <router-link
          to="/admin/dashboard"
          class="flex items-center px-3 py-2.5 rounded-lg transition-all duration-200 group"
          :class="
            isActive('/admin/dashboard')
              ? 'bg-blue-600/10 text-blue-500'
              : 'text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900'
          "
        >
          <Icon icon="lucide:layout-dashboard" class="w-5 h-5 mr-3" />
          <span class="font-medium text-sm">Dashboard</span>
        </router-link>

        <div class="mt-8 mb-2 px-3 text-xs font-bold text-zinc-600 uppercase tracking-wider">
          Konten
        </div>

        <router-link
          to="/admin/artikels"
          class="flex items-center px-3 py-2.5 rounded-lg transition-all duration-200 group"
          :class="
            isActive('/admin/artikels')
              ? 'bg-blue-600/10 text-blue-500'
              : 'text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900'
          "
        >
          <Icon icon="lucide:file-text" class="w-5 h-5 mr-3" />
          <span class="font-medium text-sm">Artikel</span>
        </router-link>

        <router-link
          to="/admin/categories"
          class="flex items-center px-3 py-2.5 rounded-lg transition-all duration-200 group"
          :class="
            isActive('/admin/categories')
              ? 'bg-blue-600/10 text-blue-500'
              : 'text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900'
          "
        >
          <Icon icon="lucide:tags" class="w-5 h-5 mr-3" />
          <span class="font-medium text-sm">Kategori</span>
        </router-link>

        <router-link
          to="/admin/galeri"
          class="flex items-center px-3 py-2.5 rounded-lg transition-all duration-200 group"
          :class="
            isActive('/admin/galeri')
              ? 'bg-blue-600/10 text-blue-500'
              : 'text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900'
          "
        >
          <Icon icon="lucide:image" class="w-5 h-5 mr-3" />
          <span class="font-medium text-sm">Galeri</span>
        </router-link>

        <div class="mt-8 mb-2 px-3 text-xs font-bold text-zinc-600 uppercase tracking-wider">
          System
        </div>

        <router-link
          to="/admin/settings"
          class="flex items-center px-3 py-2.5 rounded-lg transition-all duration-200 group"
          :class="
            isActive('/admin/settings')
              ? 'bg-blue-600/10 text-blue-500'
              : 'text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900'
          "
        >
          <Icon icon="lucide:settings" class="w-5 h-5 mr-3" />
          <span class="font-medium text-sm">Pengaturan</span>
        </router-link>
      </div>

      <div class="p-4 border-t border-zinc-800 bg-[#09090b]">
        <button
          @click="handleLogout"
          class="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-zinc-900 transition text-left group"
        >
          <div
            class="w-9 h-9 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 group-hover:border-zinc-500 group-hover:text-zinc-200 transition"
          >
            <Icon icon="lucide:user" class="w-5 h-5" />
          </div>
          <div class="flex-1 overflow-hidden">
            <p class="text-sm font-medium text-zinc-200 truncate group-hover:text-white">
              Admin Concern
            </p>
            <p class="text-xs text-zinc-500 truncate">Super Administrator</p>
          </div>
          <Icon
            icon="lucide:log-out"
            class="w-4 h-4 text-zinc-600 group-hover:text-red-400 transition"
          />
        </button>
      </div>
    </aside>

    <main class="flex-1 pl-64">
      <div class="p-8 min-h-screen">
        <div v-if="$route.path !== '/admin/dashboard'" class="mb-2">
          <nav class="flex text-sm text-zinc-500 space-x-2">
            <router-link to="/admin/dashboard" class="hover:text-zinc-300 transition"
              >Dashboard</router-link
            >
            <span>&gt;</span>
            <span class="text-zinc-200">{{ route.meta.title || 'Halaman' }}</span>
          </nav>
        </div>

        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </main>
    <GlobalAlert />
  </div>
</template>

<style scoped>
/* Gaya Scrollbar untuk Sidebar */
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #27272a; /* zinc-800 */
  border-radius: 4px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #3f3f46; /* zinc-700 */
}

/* Transisi Halaman */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
