<template>
    <main class="w-full px-4 mt-10 mb-[50px]">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
  
        <!-- Form Section -->
        <div>
          <div class="flex items-center mb-6 ml-[200px]">
            <img src="../assets/Frame 8.png" alt="Bank Syariah Indonesia" class="h-11 w-auto" />
          </div>
  
          <div class="bg-white rounded-2xl p-6 border border-black max-w-md mx-auto ml-[200px]">
            <form @submit.prevent="submitForm" class="flex flex-col gap-4">
  
              <div class="flex flex-col">
    <label class="block text-sm text-black-600 mb-1">Jenis Kelamin</label>
    <select
      v-model="form.gender"
      @change="clearError('gender')"
      :class="[form.gender ? 'text-black' : 'text-gray-400', 'w-full border rounded-lg p-2 text-sm']"
      required
    >
      <option disabled value="" hidden class="text-gray-400">Pilih jenis kelamin</option>
      <option value="1" class="text-black">Laki-Laki</option>
      <option value="0" class="text-black">Perempuan</option>
    </select>
    <p v-if="errors.gender" class="text-red-500 text-xs mt-1">{{ errors.gender }}</p>
  </div>

  <div class="flex flex-col">
    <label class="block text-sm text-black-600 mb-1">Umur</label>
    <input
      type="text"
      v-model.number="form.age"
      @input="clearError('age')"
      inputmode="numeric"
      pattern="[0-9]*"
      class="w-full rounded-lg p-2 text-sm border focus:ring-0 focus:border-[#00A39D]"
      :class="form.age ? 'border-black text-black' : 'border-gray-400 text-gray-800'"
      placeholder="Masukkan umur anda (Tahun)"
      @keydown="allowOnlyNumbers"
      required
    />
    <p v-if="errors.age" class="text-red-500 text-xs mt-1">{{ errors.age }}</p>
  </div>

  <div class="flex flex-col">
    <label class="block text-sm text-black-600 mb-1">Pekerjaan</label>
    <select
      v-model="form.job"
      @change="clearError('job')"
      :class="[form.job ? 'text-black' : 'text-gray-400', 'w-full border rounded-lg p-2 text-sm']"
      required
    >
      <option value="" disabled hidden class="text-gray-400">Pilih jenis pekerjaan Anda</option>
      <option value="0" class="text-black">Pelajar</option>
      <option value="1" class="text-black">Mahasiswa</option>
      <option value="2" class="text-black">Pegawai</option>
      <option value="3" class="text-black">PNS / ASN / BUMN</option>
      <option value="4" class="text-black">Wirausaha</option>
    </select>
    <p v-if="errors.job" class="text-red-500 text-xs mt-1">{{ errors.job }}</p>
  </div>

  <div class="flex flex-col">
    <label class="block text-sm text-black-600 mb-1">Gaji</label>
    <select
      v-model="form.salary"
      @change="clearError('salary')"
      :class="[form.salary ? 'text-black' : 'text-gray-400', 'w-full border rounded-lg p-2 text-sm']"
      required
    >
      <option value="" disabled hidden class="text-gray-400">Rentang penghasilan per bulan</option>
      <option value="0" class="text-black">&lt; 2 juta</option>
      <option value="1" class="text-black">2 juta - 5 juta</option>
      <option value="2" class="text-black">5 juta - 10 juta</option>
      <option value="3" class="text-black">10 juta - 15 juta</option>
      <option value="4" class="text-black">15 juta - 25 juta</option>
      <option value="5" class="text-black">&gt; 25 juta</option>
    </select>
    <p v-if="errors.salary" class="text-red-500 text-xs mt-1">{{ errors.salary }}</p>
  </div>

  <div class="flex flex-col">
    <label class="block text-sm text-black-600 mb-1">Domisili</label>
    <select
      v-model="form.location"
      @change="clearError('location')"
      :class="[form.location ? 'text-black' : 'text-gray-400', 'w-full border rounded-lg p-2 text-sm']"
      required
    >
      <option value="" disabled hidden class="text-gray-400">Pilih provinsi domisili</option>
      <option v-for="province in provinces" :key="province.id" :value="province.text" class="text-black">
        {{ province.text }}
      </option>
    </select>
    <p v-if="errors.location" class="text-red-500 text-xs mt-1">{{ errors.location }}</p>
  </div>

  <div class="flex items-start space-x-2">
    <input
      type="checkbox"
      :checked="form.agree"
      @click.prevent="showModal = true"
      @change="clearError('agree')"
      class="mt-1"
      required
    />
    <label class="text-xs text-gray-600">
      Dengan ini saya menyetujui
      <a @click.prevent="showModal = true" href="#" class="text-teal-500 underline cursor-pointer">Kebijakan Privasi</a>
    </label>
  </div>
  <p v-if="errors.agree" class="text-red-500 text-xs mt-1">{{ errors.agree }}</p>
  
              <!-- Modal -->
              <div v-if="showModal" class="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
                <div class="bg-white rounded-2xl p-6 w-[700px] h-[498px] shadow-lg relative overflow-y-auto">
                  <div class="sticky top-[-25px] bg-white z-10 pb-6">
                    <button @click="showModal = false" class="absolute right-3 text-gray-500 hover:text-gray-700 text-lg">✕</button>
                    <h3 class="text-base font-semibold mb-4 text-center">Kebijakan Privasi</h3>
                  </div>
                  <div class="text-sm text-gray-600 leading-relaxed space-y-4">
                    <p>Dengan menggunakan layanan ini, Anda menyetujui pengumpulan, penggunaan, dan penyimpanan data pribadi Anda sesuai dengan ketentuan berikut:</p>
                    <p><strong>1. Data yang Dikumpulkan</strong></p>
                    <ul class="list-disc list-inside ml-4">
                      <li>Umur</li>
                      <li>Jenis Kelamin</li>
                      <li>Range Gaji</li>
                      <li>Jenis Pekerjaan</li>
                      <li>Domisili</li>
                    </ul>
                    <p><strong>2. Tujuan Pengumpulan Data</strong></p>
                    <ul class="list-disc list-inside ml-4">
                      <li>Analisis statistik dan pengembangan layanan.</li>
                      <li>Personalisasi rekomendasi untuk pengguna.</li>
                    </ul>
                    <p><strong>3. Keamanan Data</strong></p>
                    <ul class="list-disc list-inside ml-4">
                      <li>Penyimpanan data menggunakan enkripsi dan teknologi keamanan terkini.</li>
                      <li>Pembatasan akses hanya kepada pihak yang berwenang.</li>
                      <li>Tidak membagikan data secara individual tanpa izin pengguna.</li>
                    </ul>
                    <p><strong>4. Penyimpanan dan Penghapusan Data</strong></p>
                    <ul class="list-disc list-inside ml-4">
                      <li>Data akan disimpan selama 5 tahun untuk tujuan yang disebutkan di atas.</li>
                      <li>Data yang sudah disimpan selama 5 tahun akan dihapus.</li>
                    </ul>
                    <p><strong>5. Penggunaan Data oleh Pihak Ketiga</strong></p>
                    <ul class="list-disc list-inside ml-4">
                      <li>Data yang dikumpulkan tidak akan dijual atau dibagikan kepada pihak ketiga tanpa izin pengguna.</li>
                    </ul>
                    <p><strong>6. Hak Pengguna</strong></p>
                    <ul class="list-disc list-inside ml-4">
                      <li>Memeriksa data mereka yang tersimpan.</li>
                      <li>Meminta perubahan atau penghapusan data.</li>
                      <li>Mengetahui bagaimana data mereka digunakan.</li>
                    </ul>
                    <p><strong>7. Perubahan Ketentuan</strong></p>
                    <p>Kami berhak memperbarui syarat dan ketentuan ini sewaktu-waktu. Pengguna disarankan untuk meninjau halaman ini secara berkala untuk perubahan terbaru.</p>
                  </div>
                  <div class="flex items-start space-x-2 mt-4">
                    <input 
                      type="checkbox" 
                      v-model="form.agree" 
                      @change="showModal = !form.agree" 
                      class="mt-1" 
                      required 
                    />
                    <label class="text-xs text-gray-600">Dengan ini saya menyetujui ketentuan yang telah disebutkan di atas.</label>
                  </div>
                </div>
              </div>
  
              <button
                type="button"
                @click="handleClick"
                :class="[
                  'w-full text-sm font-medium py-2 rounded-lg text-white focus:font-semibold h-[54px] transition duration-200',
                  'cursor-pointer',
                  isFormValid ? 'hover:bg-[#00A39D] hover:font-semibold' : ''
                ]"
                :style="{ backgroundColor: isFormValid ? '#00A39D' : '#00A39D' }"
              >
                Lihat Rekomendasi Sekarang
              </button>

              <!-- Modal Alert -->
              <div v-if="showAlertModal" class="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
                <div class="bg-white rounded-2xl p-6 w-[90%] max-w-md shadow-lg flex flex-col items-center justify-center text-center relative group transition duration-200">
                  <button @click="closeModal" class="absolute top-4 right-4 text-gray-400 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  <img src="../assets/maaf-icon.png" alt="Bank Syariah Indonesia" class="h-[112px] w-[112px]" />
                  <h2 class="text-lg font-medium text-gray-800">Yuk, Lengkapi Dulu!</h2>
                  <p class="text-sm text-gray-600">Pastikan semuanya terisi agar bisa lanjut, ya!</p>

                  <div class="mt-6 w-full flex justify-center">
                    <button @click="closeModal" class="px-4 py-2 bg-[#00A39D] text-white rounded-lg cursor-pointer">
                      Lengkapi Sekarang
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
  
        <!-- Section yang bergantian -->
        <div>
          <Carousel v-if="!recommendations.length" :items="carouselItems" />
  
          <div v-else class="mr-[30px] border border-black-100 rounded-2xl p-6 mt-[45px]">
  <h4 class="text-lg font-semibold text-gray-800 mb-3 pb-1 text-center">
    Kami Menemukan Produk Terbaik untuk Kamu
  </h4>

  <!-- Baris pertama: 3 produk teratas -->
  <div class="flex justify-between gap-x-2 mb-4 max-w-fit mx-auto">
    <div
      v-for="(product, index) in recommendations.slice(0, 3)"
      :key="index"
      @click="handleClick(product)" 
      class="rounded-lg border border-gray-200 overflow-hidden cursor-pointer transition duration-200 hover:bg-[#00A39D] group" 
      style="width: 200px; height: 230px;"
    >
      <img src="../assets/logo-bsi.png" alt="Rekomendasi" class="w-full h-[150px] object-cover" />
      <div class="p-2 mx-[8px]">
        <div class="flex justify-between items-center">
          <h5 class="font-medium text-xs text-gray-800 group-hover:text-white">{{ product }}</h5>
          <span class="text-gray-600 text-base group-hover:text-white">&gt;</span>
        </div>
        <p class="text-[10px] text-gray-600 group-hover:text-white">Solusi keuangan sesuai pilihanmu</p>
      </div>
    </div>
  </div>

  <!-- Baris kedua: 4 produk berikutnya -->
  <div class="flex justify-between gap-x-2 max-w-fit mx-auto">
    <div
      v-for="(product, index) in recommendations.slice(3, 7)"
      :key="index + 3"
      @click="handleClick(product)"
      class="rounded-lg border border-gray-200 overflow-hidden cursor-pointer transition duration-200 hover:bg-[#00A39D] group"
      style="width: 160px; height: 190px;"
    >
      <img src="../assets/logo-bsi.png" alt="Rekomendasi" class="w-full h-[110px] object-cover" />
      <div class="p-2 mx-[8px]">
        <div class="flex justify-between items-center">
          <h5 class="font-medium text-xs text-gray-800 group-hover:text-white">{{ product }}</h5>
          <span class="text-gray-600 text-base group-hover:text-white">&gt;</span>
        </div>
        <p class="text-[10px] text-gray-600 group-hover:text-white">Solusi keuangan sesuai pilihanmu</p>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </main>
  </template>
  
  <script setup>
          import { reactive, ref, onMounted, computed } from 'vue';
          import Carousel from './Carousel.vue';

          const showModal = ref(false);
          const showAlertModal = ref(false);

          const form = reactive({ gender: '', age: '', job: '', salary: '', location: '', agree: false });
          const provinces = ref([]);
          const recommendations = ref([]);

          const carouselItems = ref([
            { image: new URL('../assets/logo-bsi.png', import.meta.url).href, title: 'BSI Simpanan Pelajar', description: 'Menabung jadi SimPel' },
            { image: new URL('../assets/logo-bsi.png', import.meta.url).href, title: 'Tabungan Haji BSI', description: 'Mudahkan Impian Haji' },
            { image: new URL('../assets/logo-bsi.png', import.meta.url).href, title: 'Investasi Emas BSI', description: 'Masa Depan Lebih Baik' }
          ]);

          const fetchProvinces = async () => {
            try {
              const response = await fetch('http://localhost:3000/province');
              if (!response.ok) throw new Error('Failed to fetch provinces');
              provinces.value = (await response.json()).result;
            } catch (error) {
              console.error('Error fetching provinces:', error);
            }
          };

          onMounted(fetchProvinces);

          const allowOnlyNumbers = (e) => {
            const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab', 'Delete'];
            if (!/[0-9]/.test(e.key) && !allowedKeys.includes(e.key)) e.preventDefault();
          };

          const isFormValid = computed(() => Object.values(form).every(value => value !== '' && value !== false));

          
          const handleClick = async () => {
            if (isFormValid.value) {
              await submitForm();
            } else {
              showAlertModal.value = true;
            }
          };

          const submitForm = async () => {
            try {
              const response = await fetch('http://localhost:3000/recommendations', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  job: form.job,
                  age: form.age,
                  province: form.location.toLowerCase(),
                  gender: form.gender,
                  salary: form.salary
                })
              });

              if (!response.ok) throw new Error('Failed to fetch recommendations');
              recommendations.value = (await response.json()).products.slice(0, 7);
            } catch (err) {
              console.error('Error fetching recommendations:', err);
            }
          };

          const errors = reactive({
            gender: '',
            age: '',
            job: '',
            salary: '',
            location: '',
            agree: ''
          });

          const validateForm = () => {
            errors.gender = form.gender ? '' : 'Silakan pilih jenis kelamin Anda';
            errors.age = form.age ? '' : 'Umur harus 12 tahun ke atas';
            errors.job = form.job ? '' : 'Silakan pilih jenis pekerjaan Anda';
            errors.salary = form.salary ? '' : 'Silakan pilih rentang penghasilan Anda per bulan';
            errors.location = form.location ? '' : 'Silakan pilih provinsi domisili Anda';
            errors.agree = form.agree ? '' : 'Silakan centang kotak persetujuan untuk melanjutkan.';
          };

          const closeModal = () => {
            showAlertModal.value = false;
            validateForm();
          };

          const clearError = (field) => {
            if (errors.value[field]) errors.value[field] = "";
          };

          </script>
  
  
  <style>
  body { font-family: 'Plus Jakarta Sans', sans-serif; overflow-x: hidden; }
  </style>
  
  