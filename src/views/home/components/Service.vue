<template>
  <section id="services" class="py-24 px-6 bg-concern-dark relative overflow-hidden">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-20" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">What We Do</h2>
        <p class="text-slate-400 max-w-2xl mx-auto text-lg">
          Kami membantu bisnis berkembang melalui solusi digital modern dan scalable.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <!-- Web App -->
        <div
          class="group relative p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 hover:border-concern-primary transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-indigo-900/40"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div
            class="w-16 h-16 flex items-center justify-center rounded-2xl bg-concern-accent/10 mb-6 text-3xl group-hover:bg-concern-accent/20 transition"
          >
            🌐
          </div>

          <h3 class="text-xl font-semibold mb-4">Web Application</h3>
          <p class="text-slate-400">
            Dashboard, ERP, CRM, dan sistem internal perusahaan dengan arsitektur scalable.
          </p>
        </div>

        <!-- Frontend -->
        <div
          class="group relative p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 hover:border-concern-primary transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-cyan-900/40"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div
            class="w-16 h-16 flex items-center justify-center rounded-2xl bg-concern-primary/10 mb-6 text-3xl group-hover:bg-concern-primary/20 transition"
          >
            💻
          </div>

          <h3 class="text-xl font-semibold mb-4">Frontend Development</h3>
          <p class="text-slate-400">
            UI modern dan responsif menggunakan teknologi seperti React, Next.js, dan Tailwind.
          </p>
        </div>

        <!-- Backend -->
        <div
          class="group relative p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-purple-900/40"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div
            class="w-16 h-16 flex items-center justify-center rounded-2xl bg-purple-600/10 mb-6 text-3xl group-hover:bg-purple-600/20 transition"
          >
            ⚙️
          </div>

          <h3 class="text-xl font-semibold mb-4">Backend Development</h3>
          <p class="text-slate-400">
            API, database, authentication, dan integrasi sistem dengan performa optimal.
          </p>
        </div>

        <!-- UI/UX -->
        <div
          class="group relative p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 hover:border-concern-accent transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-cyan-900/40"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div
            class="w-16 h-16 flex items-center justify-center rounded-2xl bg-concern-accent/10 mb-6 text-3xl group-hover:bg-concern-accent/20 transition"
          >
            🎨
          </div>

          <h3 class="text-xl font-semibold mb-4">UI/UX Design</h3>
          <p class="text-slate-400">
            Research, wireframe, prototype hingga high-fidelity design yang fokus pada user
            experience.
          </p>
        </div>
      </div>

      <!-- CTA (DI LUAR GRID, lebih clean) -->
      <div class="text-center mt-20">
        <RouterLink
          to="/services"
          class="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-semibold text-lg bg-gradient-to-r from-concern-accent to-cyan-500 hover:from-cyan-500 hover:to-concern-accent text-slate-900 transition-all duration-300 shadow-2xl shadow-cyan-900/40 transform hover:scale-105"
        >
          Lihat Detail

          <svg
            class="w-6 h-6 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
