<script setup>
import { onMounted } from 'vue'
import { tsParticles } from '@tsparticles/engine'
import { loadSlim } from '@tsparticles/slim'

onMounted(async () => {
  const particleConfig = {
    fullScreen: {
      enable: false,
    },
    particles: {
      number: { value: 80 },
      color: { value: '#ffffff' },
      links: {
        enable: true,
        distance: 150,
        color: '#e0e0e0',
        opacity: 5, // Ditingkatkan agar lebih tebal
        width: 1,
      },
      shape: { type: 'circle' },
      opacity: { value: { min: 0.3, max: 0.8 } }, // Ditingkatkan agar lebih tebal
      size: { value: { min: 1, max: 5 } },
      move: { enable: true, speed: 1 },
    },
    background: {
      color: '#F8F9FA',
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'grab',
        },
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 1,
          },
        },
      },
    },
  }

  await loadSlim(tsParticles)

  await tsParticles.load({
    id: 'tsparticles',
    options: particleConfig,
  })
})
</script>

<template>
  <section class="relative min-h-screen flex items-center pt-24 bg-white overflow-hidden">
    <div id="tsparticles" class="absolute inset-0 z-0"></div>

    <div class="relative z-10 container mx-auto px-4 flex flex-col md:flex-row items-center">
      <div class="md:w-2/5 text-left mb-10 md:mb-0">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
          Mari wujudkan website keinginan anda!
        </h1>
        <p class="text-lg text-gray-600"></p>
      </div>
    </div>
  </section>
</template>
