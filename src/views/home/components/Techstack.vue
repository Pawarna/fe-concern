<template>
  <section id="techstack" class="py-24 px-6 bg-concern-dark relative overflow-hidden">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-20" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">Our Tech Stack</h2>
        <p class="text-slate-400 max-w-2xl mx-auto text-lg">
          Kami menggunakan teknologi modern, scalable, dan production-ready untuk memastikan
          performa dan keamanan terbaik.
        </p>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        <!-- React / Next -->
        <div
          class="group p-6 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 hover:border-concern-accent transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-cyan-900/40 text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div
            class="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-2xl bg-concern-accent/10 group-hover:bg-concern-accent/20 transition text-3xl"
          >
            ⚛️
          </div>

          <h3 class="text-sm font-semibold">React / Next.js</h3>
          <p class="text-xs text-slate-400 mt-2">Modern frontend & SSR</p>
        </div>

        <!-- Node -->
        <div
          class="group p-6 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 hover:border-concern-primary transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-indigo-900/40 text-center"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div
            class="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-2xl bg-concern-primary/10 group-hover:bg-concern-primary/20 transition text-3xl"
          >
            🟢
          </div>

          <h3 class="text-sm font-semibold">Node.js / NestJS</h3>
          <p class="text-xs text-slate-400 mt-2">Scalable API backend</p>
        </div>

        <!-- Python -->
        <div
          class="group p-6 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-purple-900/40 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div
            class="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-2xl bg-purple-600/10 group-hover:bg-purple-600/20 transition text-3xl"
          >
            🐍
          </div>

          <h3 class="text-sm font-semibold">Python / FastAPI</h3>
          <p class="text-xs text-slate-400 mt-2">AI & high-performance API</p>
        </div>

        <!-- Mobile -->
        <div
          class="group p-6 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 hover:border-concern-accent transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-cyan-900/40 text-center"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          <div
            class="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-2xl bg-concern-accent/10 group-hover:bg-concern-accent/20 transition text-3xl"
          >
            📱
          </div>

          <h3 class="text-sm font-semibold">Flutter / React Native</h3>
          <p class="text-xs text-slate-400 mt-2">Cross-platform mobile</p>
        </div>

        <!-- Database -->
        <div
          class="group p-6 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 hover:border-concern-primary transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-indigo-900/40 text-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div
            class="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-2xl bg-concern-primary/10 group-hover:bg-concern-primary/20 transition text-3xl"
          >
            🐘
          </div>

          <h3 class="text-sm font-semibold">PostgreSQL</h3>
          <p class="text-xs text-slate-400 mt-2">Relational database</p>
        </div>

        <!-- Cloud -->
        <div
          class="group p-6 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 hover:border-concern-accent transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-cyan-900/40 text-center"
          data-aos="fade-up"
          data-aos-delay="350"
        >
          <div
            class="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-2xl bg-concern-accent/10 group-hover:bg-concern-accent/20 transition text-3xl"
          >
            ☁️
          </div>

          <h3 class="text-sm font-semibold">AWS / Vercel</h3>
          <p class="text-xs text-slate-400 mt-2">Cloud & deployment</p>
        </div>
      </div>
    </div>
  </section>
</template>
