<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
</script>

<template>
  <DefaultLayout>
    <main class="pt-20 md:pt-24 pb-32 bg-black selection:bg-white selection:text-black">
      <section class="px-6 relative overflow-hidden">
        
        <div class="absolute inset-0 pointer-events-none opacity-20">
          <div class="absolute top-0 left-0 w-full h-[1px] bg-white/10"></div>
          <div class="absolute top-[20%] left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-white/10 to-transparent"></div>
        </div>

        <div class="max-w-7xl mx-auto relative z-10">
          <div class="text-center mb-32" data-aos="fade-up">
            <div class="flex items-center justify-center gap-3 mb-6">
              <span class="w-2 h-2 bg-white rotate-45"></span>
              <span class="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-500 italic">Service Catalog v2.6</span>
            </div>
            <h1 class="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.85] mb-8">
              PRICING <br />
              <span class="text-transparent text-outline-white italic">& PACKAGES</span>
            </h1>
            <p class="text-zinc-500 max-w-xl mx-auto text-[11px] uppercase tracking-[0.2em] leading-relaxed">
              Solusi digital terintegrasi dari <span class="text-white">perancangan visual</span> hingga arsitektur sistem kompleks dengan presisi industri.
            </p>
          </div>

          <div class="mb-40">
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-10" data-aos="fade-right">
              <div>
                <h2 class="text-3xl font-black text-white uppercase tracking-tighter italic">01. UI/UX DESIGN</h2>
                <p class="text-zinc-600 text-[10px] uppercase tracking-widest mt-2">Visual Architecture & Interface Prototyping</p>
              </div>
              <div class="text-right">
                <span class="text-[10px] font-mono text-zinc-800 tracking-widest uppercase">Dept: Creative_Studio</span>
              </div>
            </div>

            <div class="grid md:grid-cols-3 border-l border-t border-white/5">
              <div class="border-r border-b border-white/5 p-10 hover:bg-white transition-all duration-700 group" data-aos="fade-up">
                <h3 class="text-xs font-black text-zinc-500 group-hover:text-black uppercase tracking-[0.3em] mb-2">Basic Tier</h3>
                <div class="text-2xl font-black text-white group-hover:text-black tracking-tighter mb-8 italic">IDR 300K <span class="text-[10px] font-normal tracking-widest">/ PAGE</span></div>
                <ul class="space-y-4 mb-12 text-[11px] uppercase tracking-widest text-zinc-500 group-hover:text-black">
                  <li>— 01 High Fidelity (Figma)</li>
                  <li>— Responsive Layout</li>
                  <li>— Single Revision Cycle</li>
                  <li>— Source Assets Included</li>
                </ul>
                <RouterLink to="#kontak" class="inline-block w-full text-center py-4 border border-white/10 group-hover:border-black text-[10px] font-black uppercase tracking-[0.3em] text-white group-hover:text-black hover:bg-black hover:text-white transition-all italic">Initiate Request</RouterLink>
              </div>

              <div class="border-r border-b border-white/5 p-10 bg-zinc-950 hover:bg-white transition-all duration-700 group relative overflow-hidden" data-aos="fade-up" data-aos-delay="100">
                <div class="absolute top-4 right-4 text-[8px] font-black uppercase tracking-widest text-white group-hover:text-black opacity-20 group-hover:opacity-100 italic">[ RECOMMENDED_NODE ]</div>
                <h3 class="text-xs font-black text-zinc-500 group-hover:text-black uppercase tracking-[0.3em] mb-2">Standard Tier</h3>
                <div class="text-2xl font-black text-white group-hover:text-black tracking-tighter mb-8 italic">IDR 800K <span class="text-[10px] font-normal tracking-widest">/ PKG</span></div>
                <ul class="space-y-4 mb-12 text-[11px] uppercase tracking-widest text-zinc-500 group-hover:text-black">
                  <li>— 03-05 Core Interfaces</li>
                  <li>— Wireframe + High Fidelity</li>
                  <li>— Foundational Style Guide</li>
                  <li>— Dual Revision Cycles</li>
                </ul>
                <RouterLink to="#kontak" class="inline-block w-full text-center py-4 bg-white text-black group-hover:bg-black group-hover:text-white text-[10px] font-black uppercase tracking-[0.3em] transition-all italic">Initiate Request</RouterLink>
              </div>

              <div class="border-r border-b border-white/5 p-10 hover:bg-white transition-all duration-700 group" data-aos="fade-up" data-aos-delay="200">
                <h3 class="text-xs font-black text-zinc-500 group-hover:text-black uppercase tracking-[0.3em] mb-2">Advanced Tier</h3>
                <div class="text-2xl font-black text-white group-hover:text-black tracking-tighter mb-8 italic">IDR 1.5M <span class="text-[10px] font-normal tracking-widest">/ PKG</span></div>
                <ul class="space-y-4 mb-12 text-[11px] uppercase tracking-widest text-zinc-500 group-hover:text-black">
                  <li>— 05+ Complex Views</li>
                  <li>— Design System Core</li>
                  <li>— Clickable Prototype</li>
                  <li>— Multi-Cycle Revisions</li>
                </ul>
                <RouterLink to="#kontak" class="inline-block w-full text-center py-4 border border-white/10 group-hover:border-black text-[10px] font-black uppercase tracking-[0.3em] text-white group-hover:text-black hover:bg-black hover:text-white transition-all italic">Initiate Request</RouterLink>
              </div>
            </div>
          </div>

          <div class="mb-40">
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-10" data-aos="fade-right">
              <div>
                <h2 class="text-3xl font-black text-white uppercase tracking-tighter italic">02. WEB DEVELOPMENT BASIC</h2>
                <p class="text-zinc-600 text-[10px] uppercase tracking-widest mt-2">Essential Digital Infrastructure for Business</p>
              </div>
              <div class="text-right">
                <span class="text-[10px] font-mono text-zinc-800 tracking-widest uppercase">Status: Production_Ready</span>
              </div>
            </div>

            <div class="grid md:grid-cols-3 border-l border-t border-white/5">
              <div v-for="(item, idx) in [
                { title: 'Landing Page', price: '2.0M', desc: 'Single-node campaign solution.' },
                { title: 'Company Profile', price: '2.5M', desc: 'Professional corporate hub.' },
                { title: 'Portfolio Hub', price: '2.0M', desc: 'Curated work showcase.' }
              ]" :key="idx" class="border-r border-b border-white/5 p-10 group hover:bg-white transition-all duration-700" data-aos="fade-up" :data-aos-delay="idx*100">
                <h3 class="text-lg font-black text-white group-hover:text-black uppercase tracking-tighter mb-4 italic">{{ item.title }}</h3>
                <div class="text-2xl font-black text-white group-hover:text-black tracking-tighter mb-2 italic">FROM {{ item.price }}</div>
                <p class="text-[10px] uppercase tracking-widest text-zinc-600 mb-8">{{ item.desc }}</p>
                <div class="h-[1px] w-full bg-white/10 group-hover:bg-black/10 mb-8"></div>
                <ul class="space-y-3 text-[10px] uppercase tracking-widest text-zinc-500 group-hover:text-black">
                  <li>[✓] Responsive Engine</li>
                  <li>[✓] Optimized Performance</li>
                  <li>[✓] SEO Core Integration</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="mb-40">
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-10" data-aos="fade-right">
              <div>
                <h2 class="text-3xl font-black text-white uppercase tracking-tighter italic">03. ADVANCED SYSTEMS</h2>
                <p class="text-zinc-600 text-[10px] uppercase tracking-widest mt-2">Complex Digital Infrastructure & Logic Engineering</p>
              </div>
              <div class="text-right">
                <span class="text-[10px] font-mono text-zinc-800 tracking-widest uppercase">System_Tier: High_Complexity</span>
              </div>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 border-l border-t border-white/5">
              <div v-for="(pkg, idx) in [
                { 
                  name: 'E-Commerce', 
                  tagline: 'Retail Logic System', 
                  price: '4.5M', 
                  specs: ['Product Management', 'Cart & Checkout', 'Admin Control Panel', 'Payment Gateway Integration'] 
                },
                { 
                  name: 'Online Course', 
                  tagline: 'LMS Infrastructure', 
                  price: '6.0M', 
                  specs: ['User Auth System', 'Content Upload Engine', 'Student Dashboard', 'Role-Based Access'] 
                },
                { 
                  name: 'Membership', 
                  tagline: 'Gated Content Node', 
                  price: '6.0M', 
                  specs: ['Secure Login System', 'Content Restriction', 'Subscription Logic', 'Member Dashboard'] 
                },
                { 
                  name: 'Custom System', 
                  tagline: 'Tailored Architecture', 
                  price: '7.0M', 
                  specs: ['Custom DB Schema', 'Complex Business Logic', 'Integrated Dashboard', 'Tech Documentation'] 
                }
              ]" :key="idx" class="group p-8 border-r border-b border-white/5 hover:bg-white transition-all duration-700 relative" data-aos="fade-up" :data-aos-delay="idx*100">
                
                <div class="flex justify-between items-start mb-12">
                  <span class="text-[9px] font-mono text-zinc-700 group-hover:text-black/40">[ SYS_ID: 0{{idx + 4}} ]</span>
                  <div class="w-2 h-2 bg-zinc-800 group-hover:bg-black group-hover:animate-ping"></div>
                </div>

                <h3 class="text-lg font-black text-white group-hover:text-black uppercase tracking-tighter mb-1">{{ pkg.name }}</h3>
                <p class="text-[9px] text-zinc-600 group-hover:text-black/60 uppercase tracking-widest mb-6 italic">{{ pkg.tagline }}</p>
                
                <div class="text-xl font-black text-white group-hover:text-black tracking-tighter mb-8 italic">
                  FROM {{ pkg.price }}
                </div>

                <div class="h-[1px] w-8 bg-white/20 group-hover:bg-black/20 mb-8 transition-all group-hover:w-full"></div>

                <ul class="space-y-3 mb-10">
                  <li v-for="spec in pkg.specs" :key="spec" class="text-[10px] uppercase tracking-wider text-zinc-500 group-hover:text-black flex items-start gap-2">
                    <span class="opacity-30 group-hover:opacity-100">//</span>
                    {{ spec }}
                  </li>
                </ul>

                <RouterLink to="#kontak" class="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-700 group-hover:text-black border-b border-zinc-900 group-hover:border-black pb-1 hover:italic transition-all">
                  Build System —>
                </RouterLink>
              </div>
            </div>
          </div>

          <div class="mb-40" data-aos="fade-up">
            <h2 class="text-xl font-black text-white uppercase tracking-[0.4em] mb-12 italic border-l-4 border-white pl-4">UNITARY SERVICES</h2>
            <div class="border border-white/10 overflow-hidden bg-zinc-950/50">
              <div class="overflow-x-auto">
                <table class="w-full text-left">
                  <thead class="bg-white text-black text-[10px] font-black uppercase tracking-widest">
                    <tr>
                      <th class="px-8 py-4 italic">Component_Service</th>
                      <th class="px-8 py-4 italic">Description_Log</th>
                      <th class="px-8 py-4 text-right italic">Base_Rate</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-white/5 text-[11px] uppercase tracking-widest text-zinc-400">
                    <tr v-for="row in [
                      { s: 'Frontend Dev', d: 'React / Next.js / Vue Systems', p: '3M - 8M' },
                      { s: 'Backend Dev', d: 'Core Logic & Database Engineering', p: '4M - 12M' },
                      { s: 'Full-Stack Custom', d: 'End-to-End Enterprise Solution', p: 'FROM 7M' },
                      { s: 'Cloud Infrastructure', d: 'Hosting & Domain Setup (1YR)', p: '500K - 1M' }
                    ]" :key="row.s" class="hover:bg-white/5 transition-colors group">
                      <td class="px-8 py-6 text-white font-bold group-hover:italic">{{ row.s }}</td>
                      <td class="px-8 py-6 text-zinc-600">{{ row.d }}</td>
                      <td class="px-8 py-6 text-right text-white font-black italic">{{ row.p }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          

          <div class="relative py-24 px-12 border border-white/10 bg-zinc-950 overflow-hidden group text-center" data-aos="zoom-in">
            <div class="absolute inset-0 bg-white opacity-0 group-hover:opacity-[0.02] transition-opacity"></div>
            <h2 class="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">SPECIFIC <span class="text-transparent text-outline-white italic">REQUIREMENTS?</span></h2>
            <p class="text-zinc-500 mb-12 max-w-xl mx-auto text-[11px] uppercase tracking-[0.3em]">Diskusikan parameter proyek Anda dengan tim teknis kami. Konsultasi awal 100% gratis.</p>
            <RouterLink to="#kontak" class="inline-flex items-center px-16 py-5 bg-white text-black text-[11px] font-black uppercase tracking-[0.5em] hover:invert transition-all active:scale-95 italic">
              INITIALIZE CONSULTATION —>
            </RouterLink>
          </div>
        </div>
      </section>
    </main>
  </DefaultLayout>
</template>

<style scoped>
.text-outline-white {
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
}

/* Custom table adjustments */
table {
  border-collapse: collapse;
}

/* Scrollbar adjustment for unitary services table */
.overflow-x-auto::-webkit-scrollbar {
  height: 4px;
}
.overflow-x-auto::-webkit-scrollbar-thumb {
  background: #222;
}
</style>