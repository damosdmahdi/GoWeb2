<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  if (window.scrollY > 10) {
    isScrolled.value = true
  } else {
    isScrolled.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    :class="{
      'bg-transparent text-white': !isScrolled,
      'bg-white text-gray-800 shadow-lg': isScrolled,
    }"
    class="fixed top-0 left-0 w-full z-40 transition-all duration-300 ease-in-out"
  >
    <nav class="container mx-auto p-4 flex justify-between items-center">
      <a href="#" class="text-2xl font-bold flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <span>Go Web</span>
      </a>

      <ul class="flex space-x-8 font-medium">
        <li><a href="#" class="hover:text-blue-500">Home</a></li>
        <li><a href="#" class="hover:text-blue-500">Tentang kami</a></li>
        <li><a href="#" class="hover:text-blue-500">Testimoni</a></li>
        <li><a href="#" class="hover:text-blue-500">Kontak</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
/* Tidak perlu style tambahan, semua dihandle oleh Tailwind */
</style>
