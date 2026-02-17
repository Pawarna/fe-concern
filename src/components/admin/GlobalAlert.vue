<script setup lang="ts">
import { useAlertStore } from '@/stores/alert'
import { Icon } from '@iconify/vue'

const alert = useAlertStore()
</script>

<template>
  <Transition
    enter-active-class="transform transition duration-300 ease-out"
    enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4"
    enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="alert.show"
      class="fixed top-5 right-5 z-[100] w-full max-w-sm overflow-hidden rounded-xl bg-[#18181b] border border-zinc-800 shadow-2xl pointer-events-auto p-4"
    >
      <div class="flex items-center gap-3">
        <Icon
          :icon="alert.type === 'success' ? 'lucide:check-circle' : 'lucide:alert-circle'"
          :class="alert.type === 'success' ? 'text-green-500' : 'text-red-500'"
          class="w-6 h-6"
        />
        <p class="text-sm font-medium text-zinc-200">{{ alert.message }}</p>
      </div>
    </div>
  </Transition>

  <Transition name="fade">
    <div
      v-if="alert.showConfirm"
      class="fixed inset-0 z-[110] flex items-center justify-center p-4"
    >
      <div
        class="absolute inset-0 bg-black/80 backdrop-blur-sm"
        @click="alert.showConfirm = false"
      ></div>

      <div
        class="relative bg-[#18181b] border border-zinc-800 rounded-2xl w-full max-w-sm p-6 shadow-2xl text-center"
      >
        <div
          class="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-500/20"
        >
          <Icon icon="lucide:alert-triangle" class="w-8 h-8 text-red-500" />
        </div>

        <h3 class="text-xl font-bold text-white mb-2">{{ alert.title }}</h3>
        <p class="text-sm text-zinc-400 mb-8">{{ alert.message }}</p>

        <div class="flex gap-3">
          <button
            @click="alert.showConfirm = false"
            class="flex-1 px-4 py-2.5 rounded-lg border border-zinc-700 text-zinc-300 hover:bg-zinc-800 transition font-medium"
          >
            Batal
          </button>
          <button
            @click="alert.executeConfirm"
            class="flex-1 px-4 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold transition shadow-lg shadow-red-900/20"
          >
            Ya, Hapus
          </button>
        </div>
      </div>
    </div>
  </Transition>

  <Transition name="fade">
    <div v-if="alert.showPrompt" class="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div
        class="absolute inset-0 bg-black/80 backdrop-blur-sm"
        @click="alert.showPrompt = false"
      ></div>

      <div
        class="relative bg-[#18181b] border border-zinc-800 rounded-2xl w-full max-w-md p-6 shadow-2xl"
      >
        <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <Icon icon="lucide:link" class="w-5 h-5 text-blue-500" />
          {{ alert.title }}
        </h3>

        <input
          v-model="alert.promptValue"
          type="text"
          placeholder="https://..."
          class="w-full bg-[#09090b] border border-zinc-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-600 transition mb-6"
          @keyup.enter="alert.executePrompt"
        />

        <div class="flex gap-3 justify-end">
          <button
            @click="alert.showPrompt = false"
            class="px-4 py-2 text-zinc-400 hover:text-white transition text-sm"
          >
            Batal
          </button>
          <button
            @click="alert.executePrompt"
            class="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold transition text-sm"
          >
            Pasang Link
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
