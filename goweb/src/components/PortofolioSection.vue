<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue' // Tambahkan onMounted dan onUnmounted

const projects = ref([
  {
    title: 'Projek1',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    tags: ['bootstrap', 'bootstrap'],
  },
  {
    title: 'Projek2',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    tags: ['vue', 'tailwind'],
  },
  {
    title: 'Projek3',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    tags: ['react', 'nextjs'],
  },
  {
    title: 'Projek4',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    tags: ['laravel', 'mysql'],
  },
])

// --- PERBAIKAN SLIDER RESPONSIVE ---
const currentIndex = ref(0)
const totalProjects = computed(() => projects.value.length)
const itemsVisible = ref(3) // Nilai default untuk desktop

// Fungsi untuk menyesuaikan jumlah item terlihat berdasarkan lebar layar
const updateItemsVisible = () => {
  if (window.innerWidth < 768) {
    // Ukuran mobile (di bawah breakpoint 'md' Tailwind)
    itemsVisible.value = 1
  } else if (window.innerWidth < 1024) {
    // Ukuran tablet (di bawah 'lg')
    itemsVisible.value = 2
  } else {
    // Ukuran desktop
    itemsVisible.value = 3
  }
  // Reset index jika melebihi batas
  if (currentIndex.value > totalProjects.value - itemsVisible.value) {
    currentIndex.value = totalProjects.value - itemsVisible.value
  }
}

// Menambahkan dan menghapus event listener saat komponen dimuat/dihancurkan
onMounted(() => {
  updateItemsVisible()
  window.addEventListener('resize', updateItemsVisible)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateItemsVisible)
})
// --- AKHIR PERBAIKAN SLIDER ---

const next = () => {
  if (currentIndex.value < totalProjects.value - itemsVisible.value) {
    currentIndex.value++
  }
}

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

const carouselStyle = computed(() => {
  // Lebar kartu sekarang dinamis berdasarkan itemsVisible
  const cardWidth = 100 / itemsVisible.value
  return {
    transform: `translateX(-${currentIndex.value * cardWidth}%)`,
  }
})
</script>

<template>
  <section class="bg-slate-50 py-20">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Portfolio Terbaru Kami</h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
          Lihat beberapa project terbaik yang telah kami kerjakan untuk klien
        </p>
      </div>

      <div class="relative">
        <div class="overflow-hidden">
          <div class="flex transition-transform duration-500 ease-in-out" :style="carouselStyle">
            <div
              v-for="(project, index) in projects"
              :key="index"
              class="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
            >
              <div class="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col">
                <div class="bg-purple-100 h-48 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-16 w-16 text-purple-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M7 11.667C7 10.428 7.421 9.243 8.162 8.307L6.75 6.895C5.456 8.52 4.75 10.745 4.75 12.667c0 4.29 2.585 7.083 6.25 7.083 3.664 0 6.25-2.793 6.25-7.083C17.25 10.745 16.544 8.52 15.25 6.895L13.838 8.307C14.579 9.243 15 10.428 15 11.667h-8zM9 11.667C9 10.985 9.172 10.334 9.5 9.778L8.088 8.366C7.302 9.406 6.833 10.536 6.833 11.667c0 3.018 1.833 4.833 4.167 4.833 2.334 0 4.167-1.815 4.167-4.833C15 10.536 14.531 9.406 13.745 8.366L12.333 9.778C12.661 10.334 12.833 10.985 12.833 11.667h-3.833z"
                    />
                  </svg>
                </div>

                <div class="py-6 flex flex-col flex-grow">
                  <div class="px-6">
                    <h3 class="text-2xl font-bold text-indigo-600 mb-3">
                      {{ project.title }}
                    </h3>
                    <p class="text-gray-600 text-base mb-4 flex-grow">
                      {{ project.description }}
                    </p>
                  </div>

                  <hr class="my-4 border-gray-300" />

                  <div class="px-6">
                    <div class="flex space-x-2">
                      <span
                        v-for="tag in project.tags"
                        :key="tag"
                        class="bg-purple-100 text-purple-700 text-sm font-medium px-3 py-1 rounded-full"
                      >
                        {{ tag }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          @click="prev"
          :disabled="currentIndex === 0"
          class="absolute top-1/2 -translate-y-1/2 left-0 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-700 hover:text-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button
          @click="next"
          :disabled="currentIndex >= totalProjects - itemsVisible"
          class="absolute top-1/2 -translate-y-1/2 right-0 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-700 hover:text-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>
