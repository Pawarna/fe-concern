<template>
  <section id="techstack" class="py-32 px-6 bg-black relative overflow-hidden selection:bg-white selection:text-black">
    <div class="absolute inset-0 pointer-events-none opacity-10">
      <div class="w-full h-[1px] bg-white animate-[scan_4s_linear_infinite]"></div>
    </div>

    <div class="max-w-7xl mx-auto relative z-10">
      <div class="flex flex-col md:flex-row items-end justify-between mb-24 gap-8" data-aos="fade-up">
        <div class="max-w-xl">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-2 h-2 bg-white rotate-45"></div>
            <span class="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-500">Tech Inventory v2.0</span>
          </div>
          <h2 class="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
            ENGINE <span class="text-transparent text-outline-white italic">STACK</span>
          </h2>
        </div>
        <p class="text-zinc-500 max-w-xs text-[11px] uppercase tracking-[0.2em] leading-6 text-right">
          Menggunakan arsitektur <span class="text-white">production-ready</span> untuk keamanan dan integritas data maksimal.
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-white/5 border-l border-t">
        <div 
          class="group p-10 border-r border-b border-white/5 hover:bg-white transition-all duration-700 relative overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="relative z-10">
            <div class="mb-10 text-white group-hover:text-black transition-colors duration-500 font-black text-3xl tracking-tighter italic">
              NXT
            </div>
            <h3 class="text-[11px] font-black text-zinc-500 group-hover:text-black transition-colors uppercase tracking-widest mb-1">Next.js</h3>
            <p class="text-[9px] text-zinc-700 group-hover:text-zinc-600 transition-colors uppercase tracking-widest">Frontend & SSR</p>
          </div>
          <div class="absolute bottom-[-20%] right-[-10%] text-black/5 text-6xl font-black group-hover:text-black/10 transition-all pointer-events-none">JS</div>
        </div>

        <div 
          class="group p-10 border-r border-b border-white/5 hover:bg-white transition-all duration-700 relative overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div class="relative z-10">
            <div class="mb-10 text-white group-hover:text-black transition-colors duration-500 font-black text-3xl tracking-tighter italic">
              NST
            </div>
            <h3 class="text-[11px] font-black text-zinc-500 group-hover:text-black transition-colors uppercase tracking-widest mb-1">NestJS</h3>
            <p class="text-[9px] text-zinc-700 group-hover:text-zinc-600 transition-colors uppercase tracking-widest">Scalable Backend</p>
          </div>
          <div class="absolute bottom-[-20%] right-[-10%] text-black/5 text-6xl font-black group-hover:text-black/10 transition-all pointer-events-none">TS</div>
        </div>

        <div 
          class="group p-10 border-r border-b border-white/5 hover:bg-white transition-all duration-700 relative overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div class="relative z-10">
            <div class="mb-10 text-white group-hover:text-black transition-colors duration-500 font-black text-3xl tracking-tighter italic">
              PYT
            </div>
            <h3 class="text-[11px] font-black text-zinc-500 group-hover:text-black transition-colors uppercase tracking-widest mb-1">Python</h3>
            <p class="text-[9px] text-zinc-700 group-hover:text-zinc-600 transition-colors uppercase tracking-widest">AI & Processing</p>
          </div>
          <div class="absolute bottom-[-20%] right-[-10%] text-black/5 text-6xl font-black group-hover:text-black/10 transition-all pointer-events-none">AI</div>
        </div>

        <div 
          class="group p-10 border-r border-b border-white/5 hover:bg-white transition-all duration-700 relative overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div class="relative z-10">
            <div class="mb-10 text-white group-hover:text-black transition-colors duration-500 font-black text-3xl tracking-tighter italic">
              FLT
            </div>
            <h3 class="text-[11px] font-black text-zinc-500 group-hover:text-black transition-colors uppercase tracking-widest mb-1">Flutter</h3>
            <p class="text-[9px] text-zinc-700 group-hover:text-zinc-600 transition-colors uppercase tracking-widest">Mobile Engine</p>
          </div>
          <div class="absolute bottom-[-20%] right-[-10%] text-black/5 text-6xl font-black group-hover:text-black/10 transition-all pointer-events-none">APP</div>
        </div>

        <div 
          class="group p-10 border-r border-b border-white/5 hover:bg-white transition-all duration-700 relative overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div class="relative z-10">
            <div class="mb-10 text-white group-hover:text-black transition-colors duration-500 font-black text-3xl tracking-tighter italic">
              SQL
            </div>
            <h3 class="text-[11px] font-black text-zinc-500 group-hover:text-black transition-colors uppercase tracking-widest mb-1">Postgres</h3>
            <p class="text-[9px] text-zinc-700 group-hover:text-zinc-600 transition-colors uppercase tracking-widest">Data Integrity</p>
          </div>
          <div class="absolute bottom-[-20%] right-[-10%] text-black/5 text-6xl font-black group-hover:text-black/10 transition-all pointer-events-none">DB</div>
        </div>

        <div 
          class="group p-10 border-r border-b border-white/5 hover:bg-white transition-all duration-700 relative overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div class="relative z-10">
            <div class="mb-10 text-white group-hover:text-black transition-colors duration-500 font-black text-3xl tracking-tighter italic">
              AWS
            </div>
            <h3 class="text-[11px] font-black text-zinc-500 group-hover:text-black transition-colors uppercase tracking-widest mb-1">Cloud</h3>
            <p class="text-[9px] text-zinc-700 group-hover:text-zinc-600 transition-colors uppercase tracking-widest">Infrastructure</p>
          </div>
          <div class="absolute bottom-[-20%] right-[-10%] text-black/5 text-6xl font-black group-hover:text-black/10 transition-all pointer-events-none">OPS</div>
        </div>
      </div>

      <div class="mt-20 flex justify-center overflow-hidden">
        <div class="flex gap-20 whitespace-nowrap animate-marquee">
          <span v-for="i in 10" :key="i" class="text-[10px] font-black text-zinc-800 uppercase tracking-[1em]">
            Scalable — Secure — Production Ready — Optimized — Scalable — Secure — Production Ready — Optimized
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.text-outline-white {
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
}

@keyframes scan {
  from { transform: translateY(-100vh); }
  to { transform: translateY(100vh); }
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-marquee {
  animation: marquee 30s linear infinite;
}
</style>