<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-xl border-b border-white/5"
  >
    <nav class="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
      
      <RouterLink to="/" class="flex-1 flex items-center group">
        <div class="relative w-7 h-7 bg-white flex items-center justify-center rotate-45 group-hover:bg-zinc-200 transition-colors duration-500">
           <div class="-rotate-45 text-black font-black text-xs">C</div>
        </div>
        <span class="text-lg font-black tracking-[0.2em] text-white ml-3">CONCERN</span>
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
              <RouterLink to="#web" class="block px-4 py-3 hover:bg-white hover:text-black transition-colors">Web Systems</RouterLink>
              <RouterLink to="#ai" class="block px-4 py-3 hover:bg-white hover:text-black transition-colors">AI Solutions</RouterLink>
              <RouterLink to="#design" class="block px-4 py-3 hover:bg-white hover:text-black transition-colors">Tech Design</RouterLink>
              <div class="border-t border-white/5 my-1"></div>
              <RouterLink to="#consulting" class="block px-4 py-3 hover:bg-white hover:text-black transition-colors italic">All Services</RouterLink>
            </div>
          </div>
        </div>

        <RouterLink to="#techstack" class="hover:text-white transition-colors">Stack</RouterLink>
        <RouterLink :to="{ path: '/', hash: '#news' }" class="block hover:text-white transition">
        News
      </RouterLink>
        <RouterLink to="#portfolio" class="hover:text-white transition-colors">Portfolio</RouterLink>
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