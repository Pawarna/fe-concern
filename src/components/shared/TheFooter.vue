<template>
  <footer class="bg-black border-t border-white/5 pt-20 pb-10 font-sans">
    <div class="max-w-7xl mx-auto px-8">

      <div class="grid md:grid-cols-12 gap-12 text-zinc-500">

        <div class="md:col-span-4">
          <div class="flex items-center group mb-6">
            <div class="w-6 h-6 bg-white flex items-center justify-center rotate-45 group-hover:bg-zinc-300 transition-colors">
               <div class="-rotate-45 text-black font-black text-[10px]">C</div>
            </div>
            <span class="text-xl font-black tracking-[0.3em] text-white ml-3 italic">CONCERN</span>
          </div>
          <p class="text-[13px] leading-relaxed mb-6 max-w-sm uppercase tracking-wider leading-6">
            Software house based in Yogyakarta. Delivering 
            <span class="text-white">modern digital solutions</span> with surgical precision and high-scalability.
          </p>
          <div class="text-[11px] tracking-[0.2em] uppercase text-zinc-600">
            Based in — Yogyakarta, IDN
          </div>
        </div>

        <div class="hidden md:block md:col-span-1"></div>

        <div class="md:col-span-2">
          <h4 class="text-white text-[11px] font-bold uppercase tracking-[0.3em] mb-6">Capabilities</h4>
          <ul class="space-y-3 text-[12px] uppercase tracking-widest">
            <li><a href="#services" class="hover:text-white transition-colors duration-300">Web Systems</a></li>
            <li><a href="#services" class="hover:text-white transition-colors duration-300">Mobile App</a></li>
            <li><a href="#services" class="hover:text-white transition-colors duration-300">UI/UX Design</a></li>
            <li><a href="#services" class="hover:text-white transition-colors duration-300">IT Consulting</a></li>
          </ul>
        </div>

        <div class="md:col-span-2">
          <h4 class="text-white text-[11px] font-bold uppercase tracking-[0.3em] mb-6">Company</h4>
          <ul class="space-y-3 text-[12px] uppercase tracking-widest">
            <li><a href="#about" class="hover:text-white transition-colors duration-300">About</a></li>
            <li><a href="#portfolio" class="hover:text-white transition-colors duration-300">Portfolio</a></li>
            <li><a href="#news" class="hover:text-white transition-colors duration-300">News</a></li>
            <li><a href="#kontak" class="hover:text-white transition-colors duration-300">Contact</a></li>
          </ul>
        </div>

        <div class="md:col-span-3">
          <h4 class="text-white text-[11px] font-bold uppercase tracking-[0.3em] mb-6">Connect</h4>
          <div class="space-y-1 mb-6 text-[12px] tracking-wider">
            <p class="block hover:text-white transition-colors cursor-pointer text-zinc-400">concern.dev07@gmail.com</p>
            <p class="block hover:text-white transition-colors cursor-pointer text-zinc-400">+62 852-1143-5617</p>
          </div>

          <div class="flex gap-6 mt-4">
            <a href="https://www.instagram.com/concern.dev" target="_blank" class="text-[10px] uppercase font-bold tracking-[.2em] border-b border-white/20 pb-1 hover:border-white hover:text-white transition-all">
              Instagram
            </a>
            <a href="https://t.me/concerndev" target="_blank" class="text-[10px] uppercase font-bold tracking-[.2em] border-b border-white/20 pb-1 hover:border-white hover:text-white transition-all">
              Telegram
            </a>
          </div>
        </div>

      </div>

      <div class="border-t border-white/5 my-12"></div>

      <div class="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.3em] text-zinc-600">
        <p>
          © {{ new Date().getFullYear() }} CONCERN DEV. [ ALL SYSTEMS OPERATIONAL ]
        </p>

        <div class="flex gap-8 mt-6 md:mt-0">
          <a href="#" class="hover:text-white transition-colors">Privacy</a>
          <RouterLink to="/terms-and-conditions" class="hover:text-white transition-colors">Terms</RouterLink>
          <span class="text-zinc-800">43.8151° N, 120.3202° E</span>
        </div>
      </div>

    </div>
  </footer>
</template>