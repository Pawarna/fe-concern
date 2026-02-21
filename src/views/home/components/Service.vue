<template>
  <section id="services" class="py-32 px-6 bg-black relative overflow-hidden selection:bg-white selection:text-black">
    <div class="absolute inset-0 z-0 opacity-20 pointer-events-none">
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:100px_100px]"></div>
    </div>

    <div class="max-w-7xl mx-auto relative z-10">
      <div class="flex flex-col md:flex-row justify-between items-end mb-24 gap-8" data-aos="fade-up">
        <div class="max-w-2xl">
          <div class="inline-flex items-center gap-2 mb-6 text-zinc-600">
            <span class="text-[10px] font-bold uppercase tracking-[0.4em]">Core Capabilities</span>
            <div class="h-[1px] w-12 bg-zinc-800"></div>
          </div>
          <h2 class="text-5xl md:text-6xl font-black text-white tracking-tighter uppercase">
            SOLUSI <span class="text-transparent text-outline-white italic">DIGITAL</span>
          </h2>
        </div>
        <p class="text-zinc-500 max-w-sm text-sm uppercase tracking-widest leading-6">
          Kami menyediakan infrastruktur teknologi tingkat tinggi untuk skalabilitas bisnis masa depan.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-t border-white/10">
        <div
          class="group p-10 border-r border-b border-white/10 hover:bg-white transition-all duration-500 cursor-crosshair"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="flex justify-between items-start mb-16">
            <span class="text-[10px] font-black text-zinc-700 group-hover:text-black transition-colors tracking-widest">[ 01 ]</span>
            <svg class="w-8 h-8 text-white group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="square" stroke-width="1" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </div>
          <h3 class="text-lg font-black text-white group-hover:text-black transition-colors uppercase tracking-tighter mb-4">Web Application</h3>
          <p class="text-zinc-500 group-hover:text-zinc-700 transition-colors text-xs leading-6 uppercase tracking-wider">
            Sistem Dashboard, ERP, dan CRM dengan arsitektur modular yang sangat terukur.
          </p>
        </div>

        <div
          class="group p-10 border-r border-b border-white/10 hover:bg-white transition-all duration-500 cursor-crosshair"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div class="flex justify-between items-start mb-16">
            <span class="text-[10px] font-black text-zinc-700 group-hover:text-black transition-colors tracking-widest">[ 02 ]</span>
            <svg class="w-8 h-8 text-white group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="square" stroke-width="1" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-lg font-black text-white group-hover:text-black transition-colors uppercase tracking-tighter mb-4">Frontend Dev</h3>
          <p class="text-zinc-500 group-hover:text-zinc-700 transition-colors text-xs leading-6 uppercase tracking-wider">
            Antarmuka modern responsif dengan performa tinggi menggunakan Next.js & Tailwind.
          </p>
        </div>

        <div
          class="group p-10 border-r border-b border-white/10 hover:bg-white transition-all duration-500 cursor-crosshair"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div class="flex justify-between items-start mb-16">
            <span class="text-[10px] font-black text-zinc-700 group-hover:text-black transition-colors tracking-widest">[ 03 ]</span>
            <svg class="w-8 h-8 text-white group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="square" stroke-width="1" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h3 class="text-lg font-black text-white group-hover:text-black transition-colors uppercase tracking-tighter mb-4">Backend Dev</h3>
          <p class="text-zinc-500 group-hover:text-zinc-700 transition-colors text-xs leading-6 uppercase tracking-wider">
            Integrasi API kompleks, database terdistribusi, dan keamanan sistem berlapis.
          </p>
        </div>

        <div
          class="group p-10 border-r border-b border-white/10 hover:bg-white transition-all duration-500 cursor-crosshair"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div class="flex justify-between items-start mb-16">
            <span class="text-[10px] font-black text-zinc-700 group-hover:text-black transition-colors tracking-widest">[ 04 ]</span>
            <svg class="w-8 h-8 text-white group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="square" stroke-width="1" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h3 class="text-lg font-black text-white group-hover:text-black transition-colors uppercase tracking-tighter mb-4">IT Consultant</h3>
          <p class="text-zinc-500 group-hover:text-zinc-700 transition-colors text-xs leading-6 uppercase tracking-wider">
            Strategi transformasi digital dan audit infrastruktur untuk efisiensi maksimal.
          </p>
        </div>
      </div>

      <div class="mt-20 flex flex-col md:flex-row items-center justify-between border-b border-white/10 pb-10">
        <div class="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-700 mb-6 md:mb-0">
          Ready to scale your business?
        </div>
        <RouterLink
          to="/services"
          class="group flex items-center gap-6 text-white hover:text-zinc-400 transition-colors"
        >
          <span class="text-xs font-black uppercase tracking-[0.5em]">Explore All Detail</span>
          <div class="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:translate-x-2 transition-all">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="square" stroke-width="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.text-outline-white {
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
}
</style>