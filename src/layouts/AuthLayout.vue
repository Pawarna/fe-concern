<template>
  <div class="min-h-screen bg-slate-950 flex items-center justify-center p-6 font-sans">
    <div class="w-full max-w-md">
      <div class="text-center mb-8" data-aos="fade-down">
        <h1 class="text-3xl font-bold text-white tracking-tight">
          Concern<span class="text-concern-accent">.Admin</span>
        </h1>
        <p class="text-slate-500 mt-2">Silakan login untuk mengelola konten</p>
      </div>

      <main data-aos="zoom-in" data-aos-delay="200">
        <router-view />
      </main>

      <p class="text-center text-slate-600 text-sm mt-8">&copy; 2026 Concern.dev - Jogja Tech</p>
    </div>
  </div>
</template>
