<template>
  <DefaultLayout>
    <main class="min-h-screen bg-black text-zinc-400 selection:bg-white selection:text-black font-sans">
      
      <header class="pt-32 pb-20 border-b border-white/5 bg-black relative overflow-hidden">
        <div class="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div class="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
        
        <div class="max-w-6xl mx-auto px-8 relative z-10">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-2 h-2 bg-white rotate-45"></div>
            <span class="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500 italic">Legal_Protocol v1.0</span>
          </div>
          <h1 class="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none mb-6">
            TERMS <span class="text-transparent text-outline-white italic">& CONDITIONS</span>
          </h1>
          <p class="text-xs uppercase tracking-[0.2em] leading-relaxed max-w-xl text-zinc-500">
            Dokumen ini mengatur parameter operasional dan ketentuan yuridis antara <span class="text-white">Concern Studio</span> dan Klien.
          </p>
          <div class="mt-8 pt-8 border-t border-white/5 inline-block text-[9px] font-mono uppercase tracking-widest text-zinc-700">
            Last_Modified // {{ currentDate.toUpperCase() }}
          </div>
        </div>
      </header>

      <section class="py-24 relative">
        <div class="max-w-6xl mx-auto px-8 grid md:grid-cols-4 gap-16">

          <aside class="md:col-span-1 hidden md:block group">
            <nav class="sticky top-32 space-y-6">
              <div class="text-[10px] font-black text-white uppercase tracking-widest mb-8 border-l-2 border-white pl-4">Index_Table</div>
              <div class="flex flex-col gap-4 text-[10px] font-bold uppercase tracking-[0.2em]">
                <a v-for="link in ['Overview', 'Scope', 'Payment', 'Rights', 'Liability']" 
                   :key="link"
                   :href="`#${link.toLowerCase()}`" 
                   class="hover:text-white transition-colors duration-300 flex items-center gap-2 group/link"
                >
                  <span class="text-zinc-800 group-hover/link:text-zinc-500 transition-colors">//</span>
                  {{ link }}
                </a>
              </div>
            </nav>
          </aside>

          <div class="md:col-span-3 space-y-24">

            <div v-for="(section, index) in [
              { id: 'overview', title: '01. OVERVIEW', text: 'Dengan melakukan pembayaran uang muka, menyetujui proposal, atau memulai proses kerja sama, Klien dianggap telah membaca dan menyetujui seluruh protokol operasional Concern Studio.' },
              { id: 'scope', title: '02. SCOPE OF WORK', text: 'Seluruh unit pekerjaan mengacu pada proposal teknis yang telah disetujui. Permintaan di luar parameter tersebut akan diklasifikasikan sebagai modul tambahan dengan penyesuaian biaya.' },
              { id: 'payment', title: '03. PAYMENT TERMS', text: 'Down Payment (DP) wajib diselesaikan sebelum inisialisasi pengerjaan. Pelunasan akhir merupakan prasyarat mutlak sebelum penyerahan aset final atau deployment ke production server.' },
              { id: 'rights', title: '04. RIGHTS & OWNERSHIP', text: 'Hak penggunaan sistem berpindah sepenuhnya ke Klien setelah status pembayaran mencapai 100%. Concern Studio berhak menyimpan metadata proyek dalam arsip portofolio kecuali dinyatakan lain.' },
              { id: 'liability', title: '05. LIABILITY', text: 'Klien memegang tanggung jawab penuh atas integritas data dan legalitas materi yang disediakan. Concern Studio menyediakan garansi teknis untuk bug sistem dalam periode retensi yang disepakati.' }
            ]" :key="section.id" :id="section.id" class="group">
              <h2 class="text-sm font-black text-white mb-6 tracking-[0.3em] uppercase flex items-center gap-4">
                {{ section.title }}
                <div class="h-[1px] flex-1 bg-white/5 group-hover:bg-white/20 transition-colors"></div>
              </h2>
              <div class="pl-0 md:pl-12 border-l border-white/5 group-hover:border-white/20 transition-colors">
                <p class="text-sm md:text-base leading-8 text-zinc-500 group-hover:text-zinc-300 transition-colors tracking-wide">
                  {{ section.text }}
                </p>
                <div class="mt-6 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <span class="text-[8px] font-mono text-zinc-800 tracking-widest">[ ACCESS_LVL: PUBLIC ]</span>
                  <span class="text-[8px] font-mono text-zinc-800 tracking-widest">[ ENFORCED: YES ]</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section class="py-32 border-t border-white/5 bg-black text-center relative overflow-hidden">
        <div class="absolute inset-0 bg-white/[0.01] pointer-events-none"></div>
        <h3 class="text-2xl md:text-4xl font-black text-white mb-10 tracking-tighter uppercase italic">
          QUESTIONS REGARDING <br/> OUR <span class="text-transparent text-outline-white">TERMS?</span>
        </h3>
        <router-link
          to="#kontak"
          class="inline-flex items-center px-12 py-5 bg-white text-black text-[10px] font-black uppercase tracking-[0.5em] hover:invert transition-all active:scale-95 italic"
        >
          INQUIRE_NOW —>
        </router-link>
      </section>

    </main>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';

const currentDate = new Date().toLocaleDateString("id-ID", {
  year: "numeric",
  month: "long",
  day: "numeric",
})
</script>

<style scoped>
.text-outline-white {
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
}

html {
  scroll-behavior: smooth;
}

::-webkit-scrollbar { width: 3px; }
::-webkit-scrollbar-track { background: #000; }
::-webkit-scrollbar-thumb { background: #111; }
::-webkit-scrollbar-thumb:hover { background: #222; }
</style>