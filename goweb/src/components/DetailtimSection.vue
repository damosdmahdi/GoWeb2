<script setup>
import { ref } from 'vue'

defineProps({
  member: {
    type: Object,
    required: true,
  },
})
const emit = defineEmits(['close'])

// Ref untuk menargetkan div yang bisa di-scroll
const scrollContainer = ref(null)

// Fungsi untuk scroll ke atas
function scrollToTop() {
  if (scrollContainer.value) {
    scrollContainer.value.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

<template>
  <div
    @click.self="emit('close')"
    class="fixed inset-0 bg-black/60 z-40 flex items-start md:items-center justify-center p-4"
  >
    <div
      class="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[95vh] flex flex-col relative"
    >
      <div
        class="flex justify-between items-center p-4 md:p-6 border-b border-gray-200 sticky top-0 bg-white z-10 rounded-t-xl"
      >
        <h2 class="text-xl md:text-2xl font-bold text-gray-900">Detail Tim</h2>
        <button @click="emit('close')" class="text-gray-400 hover:text-gray-800 p-1">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div ref="scrollContainer" class="flex-grow overflow-y-auto p-6 md:p-8 relative">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2 space-y-8">
            <div class="text-center">
              <div
                class="bg-purple-100 w-48 h-48 rounded-xl flex items-center justify-center mx-auto"
              >
                <svg class="w-16 h-16 text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mt-4">{{ member.name }}</h3>
              <p class="text-purple-600 font-semibold">{{ member.role }}</p>
            </div>

            <div>
              <h4 class="font-bold text-lg mb-3 flex items-center text-gray-800">
                <svg
                  class="h-5 w-5 mr-2 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Informasi Kontak
              </h4>
              <div class="bg-slate-50/70 p-4 rounded-lg space-y-3 text-sm">
                <div class="flex items-center">
                  <span class="w-24 font-medium text-gray-500">Email</span>
                  <span class="text-gray-700">{{ member.contact.email }}</span>
                </div>
                <div class="flex items-center">
                  <span class="w-24 font-medium text-gray-500">Telp</span>
                  <span class="text-gray-700">{{ member.contact.phone }}</span>
                </div>
                <div class="flex items-center">
                  <span class="w-24 font-medium text-gray-500">LinkedIn</span>
                  <a
                    :href="`https://linkedin.com/in/${member.contact.linkedin}`"
                    target="_blank"
                    class="text-blue-600 hover:underline"
                    >{{ member.contact.linkedin }}</a
                  >
                </div>
                <div class="flex items-center">
                  <span class="w-24 font-medium text-gray-500">Github</span>
                  <a
                    :href="`https://github.com/${member.contact.github}`"
                    target="_blank"
                    class="text-blue-600 hover:underline"
                    >{{ member.contact.github }}</a
                  >
                </div>
              </div>
            </div>

            <div>
              <h4 class="font-bold text-lg mb-3 flex items-center text-gray-800">
                <svg
                  class="h-5 w-5 mr-2 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Tentang Saya
              </h4>
              <p class="text-sm text-gray-600 leading-relaxed">{{ member.shortBio }}</p>
            </div>

            <div>
              <h4 class="font-bold text-lg mb-3 flex items-center text-gray-800">
                <svg
                  class="h-5 w-5 mr-2 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
                Keahlian
              </h4>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="skill in member.skills"
                  :key="skill"
                  class="bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full"
                  >{{ skill }}</span
                >
              </div>
            </div>

            <div>
              <h4 class="font-bold text-lg mb-3 flex items-center text-gray-800">
                <svg
                  class="h-5 w-5 mr-2 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-9.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                </svg>
                Pendidikan
              </h4>
              <p class="text-sm text-gray-600">{{ member.education }}</p>
            </div>

            <div>
              <h4 class="font-bold text-lg mb-3 flex items-center text-gray-800">
                <svg
                  class="h-5 w-5 mr-2 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m7-4l-3-3a4.002 4.002 0 00-5.656 0l-3 3a4.002 4.002 0 000 5.656l3 3a4.002 4.002 0 005.656 0l3-3a4.002 4.002 0 000-5.656z"
                  />
                </svg>
                Pencapaian
              </h4>
              <ul class="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li v-for="ach in member.achievements" :key="ach">{{ ach }}</li>
              </ul>
            </div>
          </div>

          <div class="lg:col-span-1 flex flex-col space-y-4">
            <div class="bg-blue-100/60 text-blue-800 p-4 rounded-lg text-left">
              <p class="text-3xl font-bold">{{ member.stats.projects }}</p>
              <p class="text-sm">Proyek</p>
            </div>
            <div class="bg-green-100/60 text-green-800 p-4 rounded-lg text-left">
              <p class="text-3xl font-bold">{{ member.stats.experience }}</p>
              <p class="text-sm">Pengalaman</p>
            </div>
            <div class="bg-purple-100/60 text-purple-800 p-4 rounded-lg text-left">
              <p class="text-3xl font-bold">{{ member.stats.roleDuration }}</p>
              <p class="text-sm">{{ member.role }}</p>
            </div>
          </div>
        </div>

        <button
          @click="scrollToTop"
          class="absolute bottom-6 right-6 bg-purple-500 hover:bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 hover:-translate-y-1"
        >
          <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
