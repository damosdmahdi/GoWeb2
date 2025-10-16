<script setup>
import { ref } from 'vue'
import DetailTimModal from './DetailtimSection.vue'
// import { onMounted } from 'vue'
// import { tsParticles } from '@tsparticles/engine'
// import { loadSlim } from '@tsparticles/slim'

const isModalOpen = ref(false)
const selectedMember = ref(null)

const teamMembers = ref([
  {
    id: 1,
    name: 'Adri Hidayat',
    role: 'Web Developer',
    imageUrl: '',
    shortBio:
      'Halo, perkenalkan saya Adri Hidayat, seorang Web Developer yang juga memiliki ketertarikan besar pada Game Development.',
    stats: {
      projects: '100',
      experience: '5+ Tahun',
      roleDuration: '7 Tahun',
    },
    contact: {
      email: 'adri.hidayat@example.com',
      phone: '0812-3456-7890',
      linkedin: 'adri-hidayat',
      github: 'adrihidayat',
    },
    skills: ['Branding', 'Website', 'UI/UX', 'SEO'],
    education: 'S1 Ilmu Komputer - Universitas Pertamina',
    achievements: [
      'Certified AWS Solutions Architect',
      'Top Rated Freelancer on Upwork 2023',
      'Speaker at WebDev Conference 2024',
      'Published an article on CSS-Tricks',
    ],
  },
  {
    id: 2,
    name: 'Budi Santoso',
    role: 'UI/UX Designer',
    imageUrl: '',
    shortBio:
      'Desainer dengan fokus pada pengalaman pengguna yang intuitif dan menarik secara visual untuk berbagai platform digital.',
    stats: { projects: '80', experience: '4+ Tahun', roleDuration: '4 Tahun' },
    contact: {
      email: 'budi.santoso@example.com',
      phone: '0812-0000-1111',
      linkedin: 'budi-santoso',
      github: 'budisantoso',
    },
    skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping'],
    education: 'S1 Desain Komunikasi Visual - Institut Teknologi Bandung',
    achievements: ['Winner of UX Design Award 2023', 'Certified User Experience Designer'],
  },
  {
    id: 3,
    name: 'Citra Lestari',
    role: 'Project Manager',
    imageUrl: '',
    shortBio:
      'Berpengalaman dalam mengelola proyek dari konsepsi hingga peluncuran, memastikan semua berjalan tepat waktu dan sesuai anggaran.',
    stats: { projects: '50', experience: '6+ Tahun', roleDuration: '6 Tahun' },
    contact: {
      email: 'citra.lestari@example.com',
      phone: '0812-2222-3333',
      linkedin: 'citra-lestari',
      github: 'citralestari',
    },
    skills: ['Agile', 'Scrum', 'JIRA', 'Budgeting'],
    education: 'S1 Sistem Informasi - Universitas Indonesia',
    achievements: ['Certified ScrumMaster (CSM)', 'PMP Certification'],
  },
])

function openModal(member) {
  selectedMember.value = member
  isModalOpen.value = true
}

function closeModal() {
  isModalOpen.value = false
}
</script>

<template>
  <section class="bg-[#F8F9FA] py-20 relative overflow-hidden">
    <div id="tsparticles" class="absolute inset-0 z-0"></div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800">Tim Kami</h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
          Kami memiliki tim ahli yang siap mewujudkan visi digital Anda
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="member in teamMembers"
          :key="member.id"
          @click="openModal(member)"
          class="bg-white rounded-xl shadow-md overflow-hidden border border-blue-200 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
        >
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

          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900">{{ member.name }}</h3>
            <p class="text-purple-600 text-sm font-semibold mb-3">{{ member.role }}</p>
            <p class="text-gray-500 text-sm mb-5">{{ member.shortBio }}</p>
            <p class="text-blue-600 font-semibold">Lihat Detail</p>
          </div>
        </div>
      </div>
    </div>

    <DetailTimModal v-if="isModalOpen" :member="selectedMember" @close="closeModal" />
  </section>
</template>
