<script setup lang="ts">
const steps = [
  ['Discovery', 'Diskusi kebutuhan, goal bisnis, dan scope proyek.'],
  ['Design & Prototype', 'UI/UX design + clickable prototype untuk approval.'],
  ['Development', 'Pengembangan aplikasi sesuai desain dan kebutuhan yang telah disepakati.'],
  ['Review & Revision', 'Revisi aplikasi berdasarkan feedback dari klien.'],
  ['Deployment', 'Deploy ke production server dan konfigurasi final.'],
  ['After Sales Support', 'Maintenance, monitoring, dan dukungan teknis berkelanjutan.'],
]
</script>

<template>
  <section class="py-20 px-6 bg-concern-dark">
    <div class="max-w-5xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold" data-aos="fade-up">Workflow</h2>
      </div>

      <div class="relative">
        <!-- Vertical Line (Desktop Only) -->
        <div
          class="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-slate-700"
        ></div>

        <div
          v-for="(step, index) in steps"
          :key="index"
          class="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 mb-16"
          :class="index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <!-- Number Circle -->
          <div
            class="flex items-center justify-center w-full md:w-1/2 z-10"
            :class="index % 2 === 0 ? 'md:pr-12 md:justify-end' : 'md:pl-12 md:justify-start'"
          >
            <div
              class="w-14 h-14 md:w-16 md:h-16 rounded-full bg-concern-primary flex items-center justify-center text-xl font-bold text-white shadow-lg shadow-indigo-900/40 transition hover:scale-110"
            >
              {{ index + 1 }}
            </div>
          </div>

          <!-- Content -->
          <div class="w-full md:w-1/2" :class="index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'">
            <h3 class="text-2xl font-semibold mb-3 text-center md:text-left">
              {{ step[0] }}
            </h3>
            <p class="text-slate-400 text-center md:text-left">
              {{ step[1] }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
