<template>
  <section
    class="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-slate-950"
  >
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse"
      ></div>
      <div
        class="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-cyan-600/10 rounded-full blur-[120px] animate-pulse"
        style="animation-delay: 2s"
      ></div>
      <div
        class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"
      ></div>
    </div>

    <div class="relative z-10 max-w-6xl mx-auto text-center">
      <div
        class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 mb-8"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        <span class="relative flex h-2 w-2">
          <span
            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-concern-primary opacity-75"
          ></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-concern-primary"></span>
        </span>
        <span class="text-xs font-medium text-slate-300 tracking-wider uppercase italic"
          >Available for new projects</span
        >
      </div>

      <h1
        class="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-[1.1] mb-8"
        data-aos="zoom-out"
        data-aos-duration="1000"
      >
        Concern
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400"
          >Membangun</span
        ><br />
        Software yang
        <span class="relative inline-block">
          <span class="relative z-10 text-white">Berdampak</span>
          <span class="absolute bottom-2 left-0 w-full h-3 bg-indigo-500/30 -z-10"></span>
        </span>
      </h1>

      <!-- <p class="text-lg sm:text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light" data-aos="fade-up" data-aos-delay="400">
      Kami bukan sekadar coding. Kami membangun <span class="text-white font-normal text-slate-200">sistem bisnis</span> yang scalable dengan standar kode industri dan desain yang memikat.
    </p> -->

      <div
        class="flex flex-col sm:flex-row gap-6 justify-center items-center"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <a
          href="#kontak"
          class="group relative px-10 py-5 bg-indigo-600 text-white font-bold rounded-xl text-lg transition-all duration-300 hover:scale-105 hover:bg-indigo-500 active:scale-95 shadow-[0_0_20px_rgba(79,70,229,0.4)]"
        >
          Mulai Proyekmu
          <svg
            class="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            ></path>
          </svg>
        </a>

        <a
          href="#portfolio"
          class="px-10 py-5 border border-slate-700 hover:border-slate-500 bg-slate-900/40 text-slate-300 hover:text-white font-bold rounded-xl text-lg backdrop-blur-sm transition-all duration-300"
        >
          Lihat Portfolio
        </a>
      </div>

      <div
        class="mt-10 flex justify-center items-center gap-3"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        <div class="relative flex h-3 w-3">
          <span
            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
          ></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </div>
        <span class="text-sm font-medium text-slate-500 tracking-wide">
          Available for new projects in <span class="text-slate-300">2026</span>
        </span>
      </div>
    </div>
  </section>
</template>
