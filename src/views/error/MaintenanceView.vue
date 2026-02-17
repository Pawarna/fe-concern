<script setup lang="ts">
// Tidak butuh banyak logic, cukup tampilan informatif
</script>

<template>
  <div
    class="min-h-screen bg-slate-950 flex items-center justify-center px-6 font-sans overflow-hidden"
  >
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-concern-primary/10 rounded-full blur-[120px] pointer-events-none"
    ></div>

    <div class="text-center max-w-2xl relative z-10">
      <div class="flex justify-center mb-8" data-aos="zoom-in">
        <div class="relative">
          <div class="p-6 bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl">
            <svg
              class="w-20 h-20 text-concern-accent animate-pulse"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
          </div>
          <div
            class="absolute -top-2 -right-2 w-6 h-6 bg-concern-primary rounded-full border-4 border-slate-950"
          ></div>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-delay="200">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Sedang Dalam <span class="text-concern-accent">Perbaikan</span>
        </h1>
        <p class="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 px-4">
          Kami sedang memperbarui sistem untuk memberikan pengalaman yang lebih baik. Website
          **Concern.dev** akan segera kembali dalam beberapa saat.
        </p>

        <div
          class="max-w-xs mx-auto bg-slate-900 border border-slate-800 h-2 rounded-full overflow-hidden mb-12"
        >
          <div
            class="bg-concern-primary h-full w-2/3 animate-[progress_2s_ease-in-out_infinite]"
          ></div>
        </div>

        <div
          class="flex flex-col items-center gap-4 text-sm text-slate-500 uppercase tracking-[0.2em]"
        >
          <span>Cek update di media sosial kami</span>
          <div
            class="flex gap-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          >
            <a href="#" class="hover:text-concern-accent transition">Instagram</a>
            <a href="#" class="hover:text-concern-accent transition">Twitter</a>
            <a href="#" class="hover:text-concern-accent transition">Github</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes progress {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(200%);
  }
}
</style>
