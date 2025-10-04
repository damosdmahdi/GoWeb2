<script setup>
import Header from './components/NavbarSection.vue'
import HeroSection from './components/HeroSection.vue'
import LayananSection from './components/LayananSection.vue'
import PortfolioSection from './components/PortofolioSection.vue'
import ProsesKerjaSection from './components/ProseskerjaSection.vue'
import TimKamiSection from './components/TimkamiSection.vue'
</script>

<template>
  <div>
    <Header />
    <main>
      <HeroSection />
      <LayananSection />
      <PortfolioSection />
      <ProsesKerjaSection />
      <TimKamiSection />
    </main>
  </div>
</template>
<style>
body {
  margin: 0;
}
</style>
