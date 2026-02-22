<template>
  <DefaultLayout>
    <main class="min-h-screen bg-black text-zinc-400 selection:bg-white selection:text-black font-sans relative overflow-x-hidden">
      
      <div class="fixed inset-0 pointer-events-none opacity-[0.03] z-0">
        <div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <header class="relative pt-40 pb-20 border-b border-white/5 z-10 bg-black">
        <div class="max-w-7xl mx-auto px-8">
          <div class="flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
            <div class="max-w-3xl">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-8 h-[1px] bg-white"></div>
                <span class="text-[10px] font-black uppercase tracking-[0.6em] text-white">Privacy Protocol v3.0</span>
              </div>
              <h1 class="text-6xl md:text-[8rem] font-black text-white tracking-tighter uppercase leading-[0.8] mb-8">
                DATA<br />
                <span class="text-transparent text-outline-white italic">PRIVACY</span>
              </h1>
              <p class="text-[10px] uppercase tracking-[0.3em] leading-relaxed text-zinc-600 max-w-lg">
                Konfigurasi perlindungan data dan integritas informasi klien pada ekosistem <span class="text-white">Concern Studio</span>.
              </p>
            </div>
            <div class="text-right hidden md:block">
              <div class="text-[9px] font-mono text-zinc-800 space-y-1 uppercase tracking-widest border-r border-white/10 pr-6">
                <p>Doc_Type: Privacy_Log</p>
                <p>Status: Final_Verified</p>
                <p>Origin: Yogyakarta_IDN</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section class="relative z-10 py-24">
        <div class="max-w-7xl mx-auto px-8 grid lg:grid-cols-12 gap-20">
          
          <aside class="lg:col-span-3 hidden lg:block">
            <nav class="sticky top-32 space-y-8">
              <div class="text-[10px] font-black text-white uppercase tracking-[0.4em] mb-10">Archive_Index</div>
              <ul class="space-y-6 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
                <li v-for="(item, i) in ['01_Collection', '02_Processing', '03_Encryption', '04_Retention', '05_User_Rights', '06_Transfer']" :key="i">
                  <a :href="'#section-'+i" class="hover:text-white transition-colors flex items-center gap-3">
                    <span class="text-zinc-800">//</span> {{ item }}
                  </a>
                </li>
              </ul>
            </nav>
          </aside>

          <div class="lg:col-span-9 space-y-28">
            
            <div id="section-0" class="group">
              <h2 class="text-xs font-black text-white mb-8 tracking-[0.4em] uppercase border-l-2 border-white pl-6 italic">01 // PENGUMPULAN DATA</h2>
              <div class="space-y-6 text-sm leading-8 tracking-wide">
                <p>Concern Studio mengekstraksi informasi identitas secara selektif untuk memvalidasi sesi kerja sama. Informasi ini mencakup namun tidak terbatas pada:</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5 uppercase font-mono text-[10px]">
                  <div class="p-6 bg-black"> <span class="text-white">IDENTITAS:</span> Nama, Email, Nomor Telepon, Afiliasi Bisnis. </div>
                  <div class="p-6 bg-black"> <span class="text-white">TEKNIS:</span> IP Address, Metadata Browser, Cookies Sesi. </div>
                </div>
              </div>
            </div>

            <div id="section-1" class="group">
              <h2 class="text-xs font-black text-white mb-8 tracking-[0.4em] uppercase border-l-2 border-white pl-6 italic">02 // PEMROSESAN INFORMASI</h2>
              <p class="text-sm leading-8 tracking-wide mb-8">Data diproses dalam lingkungan terisolasi untuk tujuan fungsionalitas sistem:</p>
              <div class="space-y-4">
                <div v-for="text in ['Otentikasi akses dashboard admin.', 'Manajemen pipeline dan roadmap proyek.', 'Pengiriman log teknis dan tagihan.', 'Optimalisasi performa antarmuka pengguna.']" 
                     :key="text" class="flex items-center gap-4 py-3 border-b border-white/5">
                  <span class="text-zinc-800 text-[10px]">>></span>
                  <span class="text-[10px] uppercase tracking-widest">{{ text }}</span>
                </div>
              </div>
            </div>

            <div id="section-2" class="group">
              <h2 class="text-xs font-black text-white mb-8 tracking-[0.4em] uppercase border-l-2 border-white pl-6 italic">03 // LAYER PROTEKSI</h2>
              <div class="grid md:grid-cols-2 gap-10">
                <div class="p-8 border border-white/10 bg-white/[0.02]">
                  <div class="text-xl font-black text-white mb-4 italic uppercase tracking-tighter">Data at Rest</div>
                  <p class="text-[11px] leading-6 uppercase text-zinc-500">Penyimpanan database menggunakan enkripsi AES-256 tingkat militer. Akses fisik ke server dibatasi secara ketat.</p>
                </div>
                <div class="p-8 border border-white/10 bg-white/[0.02]">
                  <div class="text-xl font-black text-white mb-4 italic uppercase tracking-tighter">Data in Transit</div>
                  <p class="text-[11px] leading-6 uppercase text-zinc-500">Seluruh paket data dikirimkan melalui protokol TLS 1.3 terenkripsi untuk mencegah intersepsi pihak ketiga.</p>
                </div>
              </div>
            </div>

            <div id="section-3" class="group">
              <h2 class="text-xs font-black text-white mb-8 tracking-[0.4em] uppercase border-l-2 border-white pl-6 italic">04 // RETENSI DATA</h2>
              <p class="text-sm leading-8 tracking-wide text-zinc-400">
                Kami menyimpan data hanya selama periode aktif kerja sama atau sesuai kewajiban hukum yang berlaku. Data yang tidak lagi diperlukan dalam siklus operasional akan dihancurkan secara permanen dari sistem penyimpanan utama dan cadangan.
              </p>
            </div>

            <div id="section-4" class="group">
              <h2 class="text-xs font-black text-white mb-8 tracking-[0.4em] uppercase border-l-2 border-white pl-6 italic">05 // HAK PENGGUNA</h2>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                <div class="p-4 border border-white/5 hover:text-white transition-colors"> [ ACCESS ] Hak untuk meminta salinan data. </div>
                <div class="p-4 border border-white/5 hover:text-white transition-colors"> [ RECTIFY ] Hak untuk memperbaiki data salah. </div>
                <div class="p-4 border border-white/5 hover:text-white transition-colors"> [ ERASE ] Hak untuk penghapusan permanen. </div>
              </div>
            </div>

            <div id="section-5" class="group pb-20">
              <h2 class="text-xs font-black text-white mb-8 tracking-[0.4em] uppercase border-l-2 border-white pl-6 italic">06 // TRANSFER PIHAK KETIGA</h2>
              <p class="text-sm leading-8 tracking-wide text-zinc-400">
                Concern Studio secara tegas <span class="text-white">tidak melakukan penjualan data</span> kepada pihak ketiga. Transfer informasi hanya terjadi dalam modul infrastruktur (seperti hosting provider atau gateway pembayaran) yang memiliki standar keamanan setara.
              </p>
            </div>

          </div>
        </div>
      </section>

      <footer class="py-24 border-t border-white/10 bg-black">
        <div class="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-10">
          <div class="text-left">
            <div class="text-[10px] font-black text-white uppercase tracking-[0.5em] mb-4">Questions_Inquiry</div>
            <p class="text-[10px] text-zinc-700 uppercase tracking-widest">
              Security Compliance Dept // privacy@concern.studio
            </p>
          </div>
          <div class="flex gap-12 text-[9px] font-mono text-zinc-800 uppercase tracking-widest">
            <span>Auth: 128-Bit</span>
            <span>Policy_ID: 9901-X</span>
            <span>Loc: 7.79° S, 110.37° E</span>
          </div>
          <router-link to="/" class="px-10 py-4 border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500 italic">
            Close_Archive
          </router-link>
        </div>
      </footer>

    </main>
  </DefaultLayout>
</template>

<style scoped>
.text-outline-white {
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
}

html {
  scroll-behavior: smooth;
}

::-webkit-scrollbar { width: 3px; }
::-webkit-scrollbar-track { background: #000; }
::-webkit-scrollbar-thumb { background: #222; }
</style>