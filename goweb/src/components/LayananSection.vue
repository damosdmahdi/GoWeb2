<script setup>
import { shallowRef } from 'vue'
const services = shallowRef([
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9.75 6.75h9.75c.621 0 1.125-.504 1.125-1.125V6.375c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v10.25c0 .621.504 1.125 1.125 1.125z" /></svg>`,
    title: 'Website Custom',
    description:
      'Pembuatan website dari nol sesuai kebutuhan spesifik bisnis Anda dengan desain unik dan fungsionalitas khusus.',
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75v10.5A2.25 2.25 0 004.5 19.5z" /></svg>`,
    title: 'Biaya Terjangkau',
    description:
      'Kami menawarkan solusi web berkualitas tinggi dengan harga yang kompetitif dan transparan.',
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>`,
    title: 'Responsive Design',
    description:
      'Website yang tampil sempurna di semua perangkat, dari desktop hingga smartphone, dengan penyajian optimal.',
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>`,
    title: 'SEO Optimization',
    description:
      'Optimasi website untuk mesin pencari agar lebih mudah ditemukan oleh calon pelanggan.',
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-1.007 1.11-.95.54.056 1.007.518 1.007 1.057v.004c0 .557-.468 1.026-1.007 1.057-.55.056-1.02-.42-1.11-.957v-.004zM14.25 15.75a2.25 2.25 0 104.5 0 2.25 2.25 0 00-4.5 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 4.5a.75.75 0 000-1.5h.008a.75.75 0 000 1.5H12z" /></svg>`,
    title: 'Maintenance',
    description:
      'Layanan pemeliharaan dan update rutin untuk menjaga keamanan dan performa website Anda.',
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>`,
    title: 'Performance Boost',
    description:
      'Optimasi kecepatan loading dan efisiensi aset untuk memberi pengalaman pengguna yang maksimal.',
  },
])
</script>

<template>
  <section class="bg-slate-50 py-20">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800">Layanan Kami</h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
          Kami menyediakan solusi web development yang komprehensif untuk semua kebutuhan digital
          bisnis Anda
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="bg-white p-8 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          <div
            class="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-6"
          >
            <div v-html="service.icon"></div>
          </div>

          <h3 class="text-xl font-bold text-gray-800 mb-2">{{ service.title }}</h3>

          <p class="text-gray-600 text-base">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
