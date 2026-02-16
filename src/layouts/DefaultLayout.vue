<script setup lang="ts">
import TheNavbar from '@/components/shared/TheNavbar.vue'
import TheFooter from '@/components/shared/TheFooter.vue'
</script>

<template>
  <TheNavbar />

  <main class="min-h-screen">
    <slot />
  </main>

  <TheFooter />
</template>
