<script setup>
import { ref } from 'vue'

const activeStep = ref('03')

const steps = [
  {
    number: '01',
    title: 'Konsultasi Awal & Analisis Kebutuhan',
    description:
      'Kami mulai dengan diskusi untuk memahami kebutuhan, tujuan, target audiens, serta jenis website yang diinginkan (toko online, profil perusahaan, portofolio, dll).',
  },
  {
    number: '02',
    title: 'Penawaran & Kesepakatan',
    description:
      'Setelah analisis, kami memberikan penawaran harga dan waktu pengerjaan. Jika disepakati, proses pembuatan dimulai.',
  },
  {
    number: '03',
    title: 'Pengembangan Website',
    description:
      'Kami membangun website berdasarkan desain yang telah disetujui. Proses ini meliputi coding, penambahan konten, fitur, dan pengujian.',
  },
  {
    number: '04',
    title: 'Revisi & Finalisasi',
    description:
      'Website diuji dan ditinjau bersama klien. Revisi kecil dilakukan jika diperlukan hingga website siap dipublikasikan.',
  },
  {
    number: '05',
    title: 'Peluncuran Website (Go Live)',
    description:
      'Setelah disetujui, website diunggah ke hosting dan domain klien. Situs sudah dapat diakses publik.',
  },
]
</script>

<template>
  <section class="bg-white py-20">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800">Proses Kerja Kami</h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
          Metodologi yang terstruktur untuk menghasilkan website berkualitas tinggi
        </p>
      </div>

      <div class="max-w-4xl mx-auto space-y-6">
        <div
          v-for="step in steps"
          :key="step.number"
          @click="activeStep = step.number"
          class="flex items-center bg-white p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer"
          :class="{
            'border-blue-500 shadow-lg': activeStep === step.number,
            'border-gray-100 hover:border-gray-200 hover:shadow-md': activeStep !== step.number,
          }"
        >
          <div class="flex-shrink-0 w-24 flex items-center justify-start">
            <span
              class="text-7xl font-black"
              :class="{
                'text-blue-500': activeStep === step.number,
                'text-indigo-200': activeStep !== step.number,
              }"
            >
              {{ step.number }}
            </span>
          </div>

          <div class="ml-4">
            <h3 class="text-xl font-bold text-gray-900">{{ step.title }}</h3>
            <p class="text-gray-600 mt-1">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
