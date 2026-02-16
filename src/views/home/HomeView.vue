<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Service from './components/Service.vue'
import Workflow from './components/Workflow.vue'
import Techstack from './components/Techstack.vue'
import Contact from './components/Contact.vue'
</script>
<template>
  <DefaultLayout>
    <Hero />
    <About />
    <Service />
    <Workflow />
    <Techstack />
    <Contact />
  </DefaultLayout>
</template>
