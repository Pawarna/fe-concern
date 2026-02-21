<template>
  <section id="about" class="py-32 px-6 relative overflow-hidden bg-black selection:bg-white selection:text-black">
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
      <div class="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
    </div>

    <div class="max-w-7xl mx-auto relative z-10">
      <div class="grid lg:grid-cols-2 gap-16 items-end mb-24">
        <div data-aos="fade-right">
          <div class="inline-flex items-center gap-2 mb-6">
            <div class="h-[1px] w-8 bg-white"></div>
            <span class="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">About the Studio</span>
          </div>
          <h2 class="text-5xl md:text-7xl font-black tracking-tighter leading-none text-white">
            BUILDING <br />
            <span class="text-transparent text-outline-white">EXCELLENCE</span>
          </h2>
        </div>
        
        <div data-aos="fade-left" data-aos-delay="200">
          <p class="text-lg md:text-xl text-zinc-400 leading-relaxed font-light tracking-wide italic">
            <span class="text-white font-bold not-italic">Concern Dev</span> adalah software house berbasis Yogyakarta yang mentransformasi ide kompleks menjadi solusi digital dengan presisi industrial dan performa tanpa kompromi.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 border border-white/10">
        <div 
          class="p-10 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/[0.02] transition-all group duration-500"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="mb-12 text-zinc-600 group-hover:text-white transition-colors duration-500">
            <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="square" stroke-width="1" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h3 class="text-xs font-black mb-4 uppercase tracking-[0.3em] text-white">01. Tech Mastery</h3>
          <p class="text-zinc-500 text-[13px] leading-6 uppercase tracking-wider">
            Pengembangan sistem inti dengan stack teknologi terbaru dan arsitektur yang sangat terukur.
          </p>
        </div>

        <div 
          class="p-10 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/[0.02] transition-all group duration-500"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div class="mb-12 text-zinc-600 group-hover:text-white transition-colors duration-500">
            <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="square" stroke-width="1" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-xs font-black mb-4 uppercase tracking-[0.3em] text-white">02. UI/UX Focus</h3>
          <p class="text-zinc-500 text-[13px] leading-6 uppercase tracking-wider">
            Antarmuka pengguna yang dirancang dengan presisi pixel dan estetika minimalis modern.
          </p>
        </div>

        <div 
          class="p-10 hover:bg-white/[0.02] transition-all group duration-500"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div class="mb-12 text-zinc-600 group-hover:text-white transition-colors duration-500">
            <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="square" stroke-width="1" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="text-xs font-black mb-4 uppercase tracking-[0.3em] text-white">03. IT Strategy</h3>
          <p class="text-zinc-500 text-[13px] leading-6 uppercase tracking-wider">
            Partner strategis dalam merumuskan roadmap teknologi yang efisien dan tepat sasaran.
          </p>
        </div>
      </div>

      <div class="mt-20 flex justify-between items-center border-t border-white/5 pt-10" data-aos="fade-up">
        <div class="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-700">Studio Location</div>
        <div class="text-xl font-black text-white tracking-[0.2em] italic uppercase">Yogyakarta — IDN</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.text-outline-white {
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
}
</style>