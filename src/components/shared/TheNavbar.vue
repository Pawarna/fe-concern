<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-xl border-b border-white/5"
  >
    <nav class="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
      
<RouterLink to="/" class="flex-1 flex items-center group">
  <div class="relative w-12 h-12 flex items-center justify-center overflow-visible">
    <img 
      src="@/assets/images/logo2.png" 
      alt="Concern Logo" 
      class="w-full h-full object-contain transition-transform duration-1000 ease-in-out group-hover:rotate-720 group-hover:scale-110"
    />
  </div>
  
  <span class="text-2xl font-black tracking-[0.1em] text-white ml-3  uppercase transition-all duration-500">
    CONCERN
  </span>
</RouterLink>
      <div class="hidden md:flex flex-[2] justify-center items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">
        <RouterLink to="#about" class="hover:text-white transition-colors">About</RouterLink>
        
        <div class="relative group">
          <button class="flex items-center gap-1 hover:text-white transition-colors uppercase py-2">
            Services
            <svg class="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="square" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div class="absolute top-[100%] left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
            <div class="bg-black border border-white/10 w-48 p-2 shadow-[0_10px_30px_-10px_rgba(255,255,255,0.1)] backdrop-blur-2xl">
              <RouterLink to="#services" class="block px-4 py-3 hover:bg-white hover:text-black transition-colors">Web app</RouterLink>
              <RouterLink to="#services" class="block px-4 py-3 hover:bg-white hover:text-black transition-colors">Frontend Dev</RouterLink>
              <RouterLink to="#services" class="block px-4 py-3 hover:bg-white hover:text-black transition-colors">Backend Dev</RouterLink>
              <RouterLink to="#services" class="block px-4 py-3 hover:bg-white hover:text-black transition-colors">IT consultant</RouterLink>
              <div class="border-t border-white/5 my-1"></div>
              <RouterLink to="/services" class="block px-4 py-3 hover:bg-white hover:text-black transition-colors italic">All Services</RouterLink>
            </div>
          </div>
        </div>

        <RouterLink to="#techstack" class="hover:text-white transition-colors">Stack</RouterLink>
        <RouterLink :to="{ path: '/', hash: '#news' }" class="block hover:text-white transition">
        News
      </RouterLink>
        <RouterLink to="#portfolio" class="hover:text-white transition-colors">Portofolio</RouterLink>
      </div>

      <div class="flex-1 flex justify-end">
        <RouterLink
          :to="{ path: '/', hash: '#kontak' }"
          class="px-5 py-2 border border-white/20 text-[10px] font-bold uppercase tracking-widest text-white hover:border-white hover:bg-white hover:text-black transition-all duration-500 active:scale-95"
        >
          Get in Touch
        </RouterLink>
      </div>

      <button class="md:hidden ml-4 text-white">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
      </button>
    </nav>
  </header>
</template>