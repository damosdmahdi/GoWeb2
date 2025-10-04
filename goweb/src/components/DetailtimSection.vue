<script setup>
// Menerima 'member' sebagai prop dan mendefinisikan event 'close'
defineProps({
  member: {
    type: Object,
    required: true,
  },
})
const emit = defineEmits(['close'])
</script>

<template>
  <div
    @click.self="emit('close')"
    class="fixed inset-0 bg-black bg-opacity-60 z-40 flex items-center justify-center"
  >
    <div
      class="bg-white rounded-2xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-8 relative"
    >
      <button
        @click="emit('close')"
        class="absolute top-6 right-6 text-gray-400 hover:text-gray-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <h2 class="text-2xl font-bold text-gray-900 mb-8">Detail Tim</h2>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-1 space-y-6">
          <div class="bg-purple-100 h-64 rounded-xl flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-24 w-24 text-purple-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M7 11.667C7 10.428 7.421 9.243 8.162 8.307L6.75 6.895C5.456 8.52 4.75 10.745 4.75 12.667c0 4.29 2.585 7.083 6.25 7.083 3.664 0 6.25-2.793 6.25-7.083C17.25 10.745 16.544 8.52 15.25 6.895L13.838 8.307C14.579 9.243 15 10.428 15 11.667h-8zM9 11.667C9 10.985 9.172 10.334 9.5 9.778L8.088 8.366C7.302 9.406 6.833 10.536 6.833 11.667c0 3.018 1.833 4.833 4.167 4.833 2.334 0 4.167-1.815 4.167-4.833C15 10.536 14.531 9.406 13.745 8.366L12.333 9.778C12.661 10.334 12.833 10.985 12.833 11.667h-3.833z"
              />
            </svg>
          </div>
          <div class="text-center">
            <h3 class="text-2xl font-bold">{{ member.name }}</h3>
            <p class="text-indigo-500">{{ member.role }}</p>
          </div>
          <div class="bg-slate-50 p-4 rounded-lg space-y-3">
            <p class="font-semibold text-sm">Informasi Kontak</p>
            <p class="text-sm flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 mr-2 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                /></svg
              >{{ member.contact.email }}
            </p>
          </div>
        </div>

        <div class="lg:col-span-2 space-y-6">
          <div class="flex space-x-4">
            <div class="bg-blue-100 text-blue-800 p-4 rounded-lg text-center flex-1">
              <p class="text-2xl font-bold">{{ member.stats.projects }}</p>
              <p class="text-sm">Proyek</p>
            </div>
            <div class="bg-green-100 text-green-800 p-4 rounded-lg text-center flex-1">
              <p class="text-2xl font-bold">{{ member.stats.experience }}</p>
              <p class="text-sm">Pengalaman</p>
            </div>
            <div class="bg-purple-100 text-purple-800 p-4 rounded-lg text-center flex-1">
              <p class="text-2xl font-bold">{{ member.stats.roleDuration }}</p>
              <p class="text-sm">Web Developer</p>
            </div>
          </div>
          <div class="space-y-4">
            <h4 class="font-bold">Tentang Saya</h4>
            <p class="text-sm text-gray-600">{{ member.shortBio }}</p>
            <h4 class="font-bold">Keahlian</h4>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="skill in member.skills"
                :key="skill"
                class="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded"
                >{{ skill }}</span
              >
            </div>
            <h4 class="font-bold">Pendidikan</h4>
            <p class="text-sm text-gray-600">{{ member.education }}</p>
            <h4 class="font-bold">Pencapaian</h4>
            <ul class="list-disc list-inside text-sm text-gray-600 space-y-1">
              <li v-for="ach in member.achievements" :key="ach">{{ ach }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
