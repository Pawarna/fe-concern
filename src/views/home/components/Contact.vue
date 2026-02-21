<script setup lang="ts">
const contacts = [
  {
    title: 'Email',
    value: 'concern.dev07@gmail.com',
    link: 'mailto:concern.dev07@gmail.com',
    code: 'SMTP',
  },
  {
    title: 'WhatsApp',
    value: '+62 852-1143-5617',
    link: 'https://wa.me/6285211435617?text=Halo%20Concern,%20saya%20ingin%20konsultasi%20proyek',
    code: 'P2P',
  },
  {
    title: 'Instagram',
    value: '@concern.dev',
    link: 'https://instagram.com/concern.dev',
    code: 'IG',
  },
  {
    title: 'Telegram',
    value: '@concerndev',
    link: 'https://t.me/concerndev',
    code: 'TG',
  },
]
</script>

<template>
  <section id="kontak" class="py-24 px-6 bg-black relative selection:bg-white selection:text-black overflow-hidden">
    
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.01] whitespace-nowrap pointer-events-none uppercase tracking-tighter">
      Connect — Concern — Studio
    </div>

    <div class="max-w-6xl mx-auto relative z-10">
      <div class="flex flex-col md:flex-row items-end justify-between mb-20 gap-8" data-aos="fade-up">
        <div class="max-w-xl">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-2 h-[1px] bg-zinc-500"></div>
            <span class="text-[9px] font-bold uppercase tracking-[0.4em] text-zinc-600">Transmission_Node</span>
          </div>
          <h2 class="text-5xl md:text-6xl font-black text-white tracking-tighter uppercase leading-[0.9]">
            MULAI <br />
            <span class="text-transparent text-outline-white italic">KONEKSI</span>
          </h2>
        </div>
        <p class="text-zinc-600 max-w-[240px] text-[10px] uppercase tracking-[0.15em] leading-5 md:text-right">
          Siap mentransformasi visi Anda. <br/> <span class="text-zinc-400 font-bold italic">Pilih jalur transmisi.</span>
        </p>
      </div>

      <div class="border-t border-white/5" data-aos="fade-up" data-aos-delay="200">
        <div v-for="(item, index) in contacts" :key="index">
          <a
            :href="item.link"
            target="_blank"
            class="group flex flex-col md:flex-row items-start md:items-center justify-between py-8 px-2 border-b border-white/5 hover:bg-white transition-all duration-500 relative overflow-hidden"
          >
            <div class="flex items-center gap-6 md:gap-12 relative z-10">
              <span class="text-[9px] font-mono text-zinc-800 group-hover:text-black/20 transition-colors tracking-widest">
                [{{ item.code }}]
              </span>
              <h3 class="text-2xl md:text-3xl font-black text-white group-hover:text-black uppercase tracking-tighter transition-all duration-500 group-hover:italic">
                {{ item.title }}
              </h3>
            </div>

            <div class="mt-2 md:mt-0 relative z-10 flex items-center gap-4">
              <span class="text-xs md:text-sm font-medium text-zinc-600 group-hover:text-black transition-colors tracking-tight uppercase">
                {{ item.value }}
              </span>
              <svg class="w-4 h-4 text-white group-hover:text-black transition-all opacity-0 group-hover:opacity-100 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="square" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </a>
        </div>
      </div>

      <!-- <div class="mt-24 flex justify-between items-center text-[9px] font-bold uppercase tracking-[0.4em] text-zinc-800" data-aos="fade-up">
        <div>© 2026 CONCERN STUDIO</div>
        <div class="hidden md:block">7.7971° S, 110.3705° E [YOGYAKARTA]</div>
      </div> -->
    </div>
  </section>
</template>

<style scoped>
.text-outline-white {
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
}

/* Row-by-row delay dihapus untuk kesan minimal */
</style>