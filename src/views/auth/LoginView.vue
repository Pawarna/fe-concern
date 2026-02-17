<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { api } from '@/api'

const router = useRouter()
const username = ref('')
const password = ref('')
const loading = ref(false)
const errorMsg = ref('')

const handleLogin = async () => {
  loading.value = true
  errorMsg.value = ''

  try {
    const res = await api.post('/login', {
      username: username.value,
      password: password.value,
    })

    if (res.data.success) {
      localStorage.setItem('token', res.data.result.token)
      api.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`

      router.push('/admin/dashboard')
    }
  } catch (err: any) {
    errorMsg.value = err.response?.data?.message || 'Koneksi ke server bermasalah'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl backdrop-blur-sm shadow-xl">
    <form @submit.prevent="handleLogin" class="space-y-6">
      <div
        v-if="errorMsg"
        class="p-3 bg-red-900/30 border border-red-700 text-red-400 text-sm rounded-lg"
      >
        {{ errorMsg }}
      </div>

      <div>
        <label class="block text-sm font-medium text-slate-300 mb-2">Username Admin</label>
        <input
          v-model="username"
          type="text"
          class="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-concern-accent transition"
          required
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-slate-300 mb-2">Password</label>
        <input
          v-model="password"
          type="password"
          class="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-concern-accent transition"
          placeholder="••••••••"
          required
        />
      </div>

      <button
        type="submit"
        :disabled="loading"
        class="w-full bg-concern-primary hover:bg-indigo-500 text-white font-semibold py-3 rounded-xl transition-all flex justify-center items-center gap-2"
      >
        <span
          v-if="loading"
          class="animate-spin border-2 border-white/20 border-t-white rounded-full h-5 w-5"
        ></span>
        {{ loading ? 'Otentikasi...' : 'Masuk Dashboard' }}
      </button>
    </form>
  </div>
</template>
