<template>
  <section
    class="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-black selection:bg-white selection:text-black"
  >
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="stars-container opacity-20">
        <div v-for="n in 50" :key="'s1-'+n" class="star star-sm" :style="getRandomStyle()"></div>
      </div>
      <div class="stars-container opacity-40">
        <div v-for="n in 30" :key="'s2-'+n" class="star star-md" :style="getRandomStyle()"></div>
      </div>
      
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] bg-white/[0.02] rounded-full blur-[100px]"></div>
    </div>

    <div class="relative z-10 max-w-6xl mx-auto text-center">
      <div class="mb-6 inline-flex items-center gap-2 px-3 py-1 border border-white/10 bg-black/50 backdrop-blur-sm" data-aos="fade-down">
        <span class="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500 italic">Core System v2.0</span>
      </div>

      <h1
        class="text-6xl sm:text-8xl md:text-[9rem] font-black tracking-tighter leading-[0.85] mb-10 text-white"
        data-aos="zoom-out"
        data-aos-duration="1000"
      >
        CONCERN<br />
        <span class="text-outline-white text-transparent hover:text-white transition-all duration-700 cursor-default">STUDIO</span>
      </h1>

      <p class="text-xs sm:text-sm text-zinc-500 max-w-xl mx-auto mb-12 uppercase tracking-[0.3em] leading-relaxed font-medium" data-aos="fade-up" data-aos-delay="400">
        Membangun infrastruktur digital melalui <span class="text-white font-bold italic">presisi kode</span> dan estetika fungsional.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center" data-aos="fade-up" data-aos-delay="600">
        <a href="#kontak" class="group relative px-10 py-4 bg-white text-black font-black uppercase text-[10px] tracking-[0.3em] transition-all duration-300 hover:invert active:scale-95">
          Inisialisasi Proyek
        </a>
        <a href="#portfolio" class="px-10 py-4 border border-white/10 text-white font-black uppercase text-[10px] tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500">
          Archive
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Fungsi untuk merandom posisi bintang
const getRandomStyle = () => {
  return {
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
    animationDuration: `${2 + Math.random() * 3}s`
  }
}
</script>

<style scoped>
.text-outline-white {
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
}

/* Star Styles */
.stars-container {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.star {
  position: absolute;
  background-color: white;
  border-radius: 50%;
  animation: twinkle infinite ease-in-out;
}

.star-sm {
  width: 1px;
  height: 1px;
}

.star-md {
  width: 2px;
  height: 2px;
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
}

@keyframes twinkle {
  0%, 100% { opacity: 0; transform: scale(0.5); }
  50% { opacity: 1; transform: scale(1.2); }
}

section {
  scrollbar-width: none;
}
</style>