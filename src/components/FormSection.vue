<template>
  <main class="w-full px-4 mt-10 mb-[50px]">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <div
          class="flex items-center justify-center lg:justify-normal mb-6 lg:ml-[200px]"
        >
          <img
            src="../assets/sc-logo-form.png"
            alt="Bank Syariah Indonesia"
            class="h-11 w-auto"
          />
        </div>
        <div
          class="bg-white rounded-2xl p-6 border border-black max-w-md mx-auto lg:ml-[200px]"
        >
          <form @submit.prevent="submitForm" class="flex flex-col gap-4">
            <div class="flex flex-col">
              <label class="block text-sm text-black-600 mb-1"
                >Jenis Kelamin</label
              >
              <select
                v-model="form.gender"
                @change="clearError('gender')"
                :class="[
                  form.gender ? 'text-black' : 'text-gray-400',
                  'w-full border rounded-lg p-2 text-sm',
                  errors.gender ? 'border-red-500' : 'border-gray-400',
                ]"
                required
              >
                <option disabled value="" hidden class="text-gray-400">
                  Pilih jenis kelamin
                </option>
                <option value="1" class="text-black">Laki-Laki</option>
                <option value="0" class="text-black">Perempuan</option>
              </select>
              <p v-if="errors.gender" class="text-red-500 text-xs mt-1">
                {{ errors.gender }}
              </p>
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
                :class="
                  (form.age
                    ? 'border-black text-black'
                    : 'border-gray-400 text-gray-800',
                  errors.age ? 'border-red-500' : 'border-gray-400')
                "
                placeholder="Masukkan umur anda (Tahun)"
                @keydown="allowOnlyNumbers"
                required
              />
              <p v-if="errors.age" class="text-red-500 text-xs mt-1">
                {{ errors.age }}
              </p>
            </div>
            <div class="flex flex-col">
              <label class="block text-sm text-black-600 mb-1">Pekerjaan</label>
              <select
                v-model="form.job"
                @change="clearError('job')"
                :class="[
                  'w-full rounded-lg p-2 text-sm border', // Pastikan 'border' selalu ada
                  form.job ? 'text-black' : 'text-gray-400',
                  errors.job ? 'border-red-500' : 'border-gray-400',
                ]"
                required
              >
                <option value="" disabled hidden class="text-gray-400">
                  Pilih jenis pekerjaan Anda
                </option>
                <option value="0" class="text-black">Pelajar</option>
                <option value="1" class="text-black">Mahasiswa</option>
                <option value="2" class="text-black">Pegawai</option>
                <option value="3" class="text-black">PNS / ASN / BUMN</option>
                <option value="4" class="text-black">Wirausaha</option>
              </select>
              <p v-if="errors.job" class="text-red-500 text-xs mt-1">
                {{ errors.job }}
              </p>
            </div>
            <div class="flex flex-col">
              <label class="block text-sm text-black-600 mb-1">Gaji</label>
              <select
                v-model="form.salary"
                @change="clearError('salary')"
                :class="[
                  form.salary ? 'text-black' : 'text-gray-400',
                  'w-full border rounded-lg p-2 text-sm',
                  errors.salary ? 'border-red-500' : 'border-gray-400',
                ]"
                required
              >
                <option value="" disabled hidden class="text-gray-400">
                  Rentang penghasilan per bulan
                </option>
                <option value="0" class="text-black">&lt; 2 juta</option>
                <option value="1" class="text-black">2 juta - 5 juta</option>
                <option value="2" class="text-black">5 juta - 10 juta</option>
                <option value="3" class="text-black">10 juta - 15 juta</option>
                <option value="4" class="text-black">15 juta - 25 juta</option>
                <option value="5" class="text-black">&gt; 25 juta</option>
              </select>
              <p v-if="errors.salary" class="text-red-500 text-xs mt-1">
                {{ errors.salary }}
              </p>
            </div>
            <div class="flex flex-col">
              <label class="block text-sm text-black-600 mb-1">Domisili</label>
              <select
                v-model="form.location"
                @change="clearError('location')"
                :class="[
                  form.location ? 'text-black' : 'text-gray-400',
                  'w-full border rounded-lg p-2 text-sm',
                  errors.location ? 'border-red-500' : 'border-gray-400',
                ]"
                required
              >
                <option value="" disabled hidden class="text-gray-400">
                  Pilih provinsi domisili
                </option>
                <option
                  v-for="province in provinces"
                  :key="province.id"
                  :value="province.name"
                  class="text-black"
                >
                  {{ province.name }}
                </option>
              </select>
              <p v-if="errors.location" class="text-red-500 text-xs mt-1">
                {{ errors.location }}
              </p>
            </div>
            <div class="flex items-center space-x-2">
              <input
                type="checkbox"
                :checked="form.agree"
                @click.prevent="showModal = true"
                @change="clearError('agree')"
                required
              />
              <label class="text-xs text-gray-600">
                Dengan ini saya menyetujui
                <span
                  @click.prevent="showModal = true"
                  class="text-teal-500 underline cursor-pointer"
                >
                  Kebijakan Privasi
                </span>
              </label>
            </div>
            <p v-if="errors.agree" class="text-red-500 text-xs mt-1">
              {{ errors.agree }}
            </p>
            <div
              v-if="showModal"
              class="fixed inset-0 bg-black/30 flex justify-center items-center z-50 p-4"
            >
              <div
                class="bg-white rounded-2xl pb-6 px-6 w-[700px] h-[498px] shadow-lg relative"
              >
                <div class="bg-white z-10 min-h-[80px] pt-4">
                  <button
                    @click="showModal = false"
                    class="absolute right-3 text-gray-500 hover:text-gray-700 text-lg cursor-pointer"
                  >
                    <img
                      src="../assets/close-circle.svg"
                      width="32"
                      height="32"
                    />
                  </button>
                  <h3 class="text-2xl font-bold mb-4 text-center">
                    Kebijakan Privasi
                  </h3>
                </div>
                <div class="h-[400px] overflow-y-scroll">
                  <div
                    class="text-sm text-gray-600 leading-relaxed space-y-4 px-4"
                  >
                    <p>
                      Dengan menggunakan layanan ini, Anda menyetujui
                      pengumpulan, penggunaan, dan penyimpanan data pribadi Anda
                      sesuai dengan ketentuan berikut:
                    </p>
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
                      <li>
                        Penyimpanan data menggunakan enkripsi dan teknologi
                        keamanan terkini.
                      </li>
                      <li>
                        Pembatasan akses hanya kepada pihak yang berwenang.
                      </li>
                      <li>
                        Tidak membagikan data secara individual tanpa izin
                        pengguna.
                      </li>
                    </ul>
                    <p><strong>4. Penyimpanan dan Penghapusan Data</strong></p>
                    <ul class="list-disc list-inside ml-4">
                      <li>
                        Data akan disimpan selama 5 tahun untuk tujuan yang
                        disebutkan di atas.
                      </li>
                      <li>
                        Data yang sudah disimpan selama 5 tahun akan dihapus.
                      </li>
                    </ul>
                    <p><strong>5. Penggunaan Data oleh Pihak Ketiga</strong></p>
                    <ul class="list-disc list-inside ml-4">
                      <li>
                        Data yang dikumpulkan tidak akan dijual atau dibagikan
                        kepada pihak ketiga tanpa izin pengguna.
                      </li>
                    </ul>
                    <p><strong>6. Hak Pengguna</strong></p>
                    <ul class="list-disc list-inside ml-4">
                      <li>Memeriksa data mereka yang tersimpan.</li>
                      <li>Meminta perubahan atau penghapusan data.</li>
                      <li>Mengetahui bagaimana data mereka digunakan.</li>
                    </ul>
                    <p><strong>7. Perubahan Ketentuan</strong></p>
                    <p>
                      Kami berhak memperbarui syarat dan ketentuan ini
                      sewaktu-waktu. Pengguna disarankan untuk meninjau halaman
                      ini secara berkala untuk perubahan terbaru.
                    </p>
                  </div>
                  <div class="flex items-center space-x-2 mt-4">
                    <input
                      type="checkbox"
                      v-model="form.agree"
                      @change="showModal = !form.agree"
                      required
                    />
                    <label class="text-xs text-gray-600"
                      >Dengan ini saya menyetujui ketentuan yang telah
                      disebutkan di atas.</label
                    >
                  </div>
                </div>
              </div>
            </div>
            <button
              type="button"
              @click="handleClick"
              :class="[
                'w-full text-sm font-medium py-2 rounded-lg text-white focus:font-semibold h-[54px] transition duration-200',
                'cursor-pointer',
                isFormValid ? 'hover:bg-[#00A39D] hover:font-semibold' : '',
              ]"
              :style="{ backgroundColor: isFormValid ? '#00A39D' : '#00A39D' }"
            >
              Lihat Rekomendasi Sekarang
            </button>
            <AlertModal
              :closeModal="closeModal"
              :showAlertModal="showAlertModal"
            />
          </form>
        </div>
      </div>
      <div>
        <Carousel v-if="!recommendations.length" :items="carouselItems" />
        <div v-else class="mr-[30px] rounded-2xl p-6 mt-[45px]">
          <div
            class="flex items-center bg-[#00A39D] rounded-[10px] py-4 px-6 gap-x-8"
          >
            <div>
              <p class="text-white text-center">Kamu adalah...</p>
              <p class="text-white font-extrabold text-2xl text-center">
                {{ segmentation.name }}
              </p>
            </div>
            <div class="min-h-20 w-[2px] bg-white" />
            <p class="text-white font-semibold text-sm">
              {{ segmentation.desc }}
            </p>
          </div>
          <div class="flex justify-between gap-x-2 my-4 max-w-fit mx-auto">
            <div
              v-for="(product, index) in recommendations.slice(0, 3)"
              :key="index"
              @click="postUserChoice(product.name)"
              class="rounded-lg border border-gray-200 overflow-hidden cursor-pointer transition duration-200 hover:bg-[#00A39D] group w-[200px] h-[230px]"
            >
              <a :href="`products/${product.alias}`" target="_blank">
                <img
                  :src="product.image_uri"
                  alt="Rekomendasi"
                  class="w-full h-[110px] object-cover"
                />
                <div class="p-2 mx-[8px]">
                  <div class="flex justify-between items-center">
                    <h5
                      class="font-medium text-xs text-gray-800 group-hover:text-white"
                    >
                      {{ product.name }}
                    </h5>
                    <span class="text-gray-600 text-xs group-hover:text-white"
                      >&rarr;</span
                    >
                  </div>
                  <p class="text-[10px] text-gray-600 group-hover:text-white">
                    {{ product.desc }}
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div class="flex justify-between gap-x-2 max-w-fit mx-auto">
            <div
              v-for="(product, index) in recommendations.slice(3, 7)"
              :key="index"
              @click="postUserChoice(product.name)"
              class="rounded-lg border border-gray-200 overflow-hidden cursor-pointer transition duration-200 hover:bg-[#00A39D] group w-[160px] h-[190px]"
            >
              <a :href="`products/${product.alias}`" target="_blank">
                <img
                  :src="product.image_uri"
                  alt="Rekomendasi"
                  class="w-full h-[110px] object-cover"
                />
                <div class="p-2 mx-[8px]">
                  <div class="flex justify-between items-center">
                    <h5
                      class="font-medium text-xs text-gray-800 group-hover:text-white"
                    >
                      {{ product.name }}
                    </h5>
                    <span class="text-gray-600 text-xs group-hover:text-white"
                      >&rarr;</span
                    >
                  </div>
                  <p class="text-[10px] text-gray-600 group-hover:text-white">
                    {{ product.desc }}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { reactive, ref, onMounted, computed } from "vue";
import Carousel from "./Carousel.vue";
import AlertModal from "./AlertModal.vue";
import axios from "axios";

const showModal = ref(false);
const showAlertModal = ref(false);
const isChoiceClicked = ref(false);
const user_input_id = ref(null);
const form = reactive({
  gender: "",
  age: "",
  job: "",
  salary: "",
  location: "",
  agree: false,
});
const provinces = ref([]);
const recommendations = ref([]);
const carouselItems = ref([]);
const segmentation = ref("");

const getAllProducts = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/products`
    );

    carouselItems.value = response.data.datas;
  } catch (error) {
    throw new Error("Something went wrong");
  }
};

const getAllProvinces = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/provinces`
    );
    if (response.status !== 200) {
      throw new Error("Failed to fetch provinces");
    }
    provinces.value = response.data.datas;
  } catch (error) {
    throw new Error("Something went wrong");
  }
};

onMounted(getAllProvinces);
onMounted(getAllProducts);

const allowOnlyNumbers = (e) => {
  const allowedKeys = ["Backspace", "ArrowLeft", "ArrowRight", "Tab", "Delete"];
  if (!/[0-9]/.test(e.key) && !allowedKeys.includes(e.key)) e.preventDefault();
};

const isFormValid = computed(() =>
  Object.values(form).every((value) => value !== "" && value !== false)
);

const handleClick = async () => {
  if (isFormValid.value) {
    await submitForm();
  } else {
    showAlertModal.value = true;
  }
};

const postUserChoice = async (choice) => {
  try {
    const requestBody = {
      user_input_id: user_input_id.value,
      choice: choice,
    };

    if (!isChoiceClicked.value) {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/user-choices`,
        requestBody
      );

      isChoiceClicked.value = true;
    }
  } catch (error) {
    throw new Error("Something went wrong");
  }
};

const submitForm = async () => {
  try {
    const requestBody = {
      job: parseInt(form.job),
      age: parseInt(form.age),
      province: form.location.toLowerCase(),
      gender: parseInt(form.gender),
      salary: parseInt(form.salary),
    };

    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/recommendations`,
      requestBody
    );

    if (response.status !== 201) {
      throw new Error("Something went wrong");
    }

    segmentation.value = response.data.segmentation;
    recommendations.value = response.data.products.slice(0, 7);
    user_input_id.value = response.data.user_input_id;
  } catch (err) {
    console.error("Error fetching recommendations:", err);
  }
};

const errors = reactive({
  gender: "",
  age: "",
  job: "",
  salary: "",
  location: "",
  agree: "",
});

const validateForm = () => {
  errors.gender = form.gender ? "" : "Silakan pilih jenis kelamin Anda";
  if (!form.age) {
    errors.age = "Silakan isi umur Anda";
  } else if (form.age <= 12) {
    errors.age = "Umur harus 12 tahun ke atas";
  } else {
    errors.age = "";
  }
  errors.job = form.job ? "" : "Silakan pilih jenis pekerjaan Anda";
  errors.salary = form.salary
    ? ""
    : "Silakan pilih rentang penghasilan Anda per bulan";
  errors.location = form.location ? "" : "Silakan pilih provinsi domisili Anda";
  errors.agree = form.agree
    ? ""
    : "Silakan centang kotak persetujuan untuk melanjutkan.";
};

const closeModal = () => {
  showAlertModal.value = false;
  validateForm();
};

const clearError = (field) => {
  if (errors[field]) {
    errors[field] = "";
  }
};
</script>

<style>
body {
  font-family: "Plus Jakarta Sans", sans-serif;
  overflow-x: hidden;
}
</style>
