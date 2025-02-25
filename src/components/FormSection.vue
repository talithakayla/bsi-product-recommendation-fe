<template>
  <main class="max-w-6xl pl-[200px] mt-10 px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Form Section -->
      <div>
        <div class="flex items-center mb-6">
          <img
            src="../assets/Frame 8.png"
            alt="Bank Syariah Indonesia"
            class="h-11 w-auto"
          />
        </div>
        <div class="bg-white rounded-2xl p-6 border border-black-100">
          <form @submit.prevent="submitForm" class="space-y-4">
            <div class="flex flex-col">
              <label class="block text-sm text-gray-600 mb-1"
                >Jenis Kelamin</label
              >
              <select
                v-model="form.gender"
                class="w-full border rounded-lg p-2 text-sm text-gray-900"
                required
              >
                <option value="" disabled hidden>Pilih jenis kelamin</option>
                <option value="1">Laki-Laki</option>
                <option value="0">Perempuan</option>
              </select>
            </div>

            <div class="flex flex-col">
              <label class="block text-sm text-gray-600 mb-1">Umur</label>
              <input
                type="text"
                v-model.number="form.age"
                inputmode="numeric"
                pattern="[0-9]*"
                class="w-full border rounded-lg p-2 text-sm text-gray-900"
                placeholder="Masukkan umur anda (Tahun)"
                @keydown="allowOnlyNumbers"
                required
              />
            </div>

            <div class="flex flex-col">
              <label class="block text-sm text-gray-600 mb-1">Pekerjaan</label>
              <select
                v-model="form.job"
                class="w-full border rounded-lg p-2 text-sm text-gray-900"
                required
              >
                <option value="" disabled hidden>
                  Pilih jenis pekerjaan Anda
                </option>
                <option value="0">Pelajar</option>
                <option value="1">Mahasiswa</option>
                <option value="2">Pegawai</option>
                <option value="3">PNS / ASN / BUMN</option>
                <option value="4">Wirausaha</option>
              </select>
            </div>

            <div class="flex flex-col">
              <label class="block text-sm text-gray-600 mb-1">Gaji</label>
              <select
                v-model="form.salary"
                class="w-full border rounded-lg p-2 text-sm text-gray-900"
                required
              >
                <option value="" disabled hidden>
                  Rentang penghasilan per bulan
                </option>
                <option value="0">&lt; 2 juta</option>
                <option value="1">2 juta - 5 juta</option>
                <option value="2">5 juta - 10 juta</option>
                <option value="3">10 juta - 15 juta</option>
                <option value="4">15 juta - 25 juta</option>
                <option value="5">&gt; 25 juta</option>
              </select>
            </div>

            <div class="flex flex-col">
              <label class="block text-sm text-gray-600 mb-1">Domisili</label>
              <select
                v-model="form.location"
                class="w-full border rounded-lg p-2 text-sm text-gray-900"
                required
              >
                <option value="" disabled hidden>
                  Pilih provinsi domisili
                </option>
                <option
                  v-for="province in provinces"
                  :key="province.id"
                  :value="province.text"
                >
                  {{ province.text }}
                </option>
              </select>
            </div>

            <!-- Checkbox dan Link untuk Kebijakan Privasi -->
            <div class="flex items-start space-x-2">
              <input
                type="checkbox"
                :checked="form.agree"
                @click.prevent="showModal = true"
                class="mt-1"
                required
              />
              <label class="text-xs text-gray-600">
                Dengan ini saya menyetujui
                <a
                  @click.prevent="showModal = true"
                  href="#"
                  class="text-teal-500 underline cursor-pointer"
                >
                  Kebijakan Privasi
                </a>
              </label>
            </div>

            <!-- Modal -->
            <div
              v-if="showModal"
              class="fixed inset-0 bg-black/30 flex justify-center items-center z-50"
            >
              <div
                class="bg-white rounded-2xl p-6 w-[700px] h-[498px] shadow-lg relative overflow-y-auto"
              >
                <!-- Close Button -->
                <div class="sticky top-0 bg-white z-10 pb-6">
                  <button
                    @click="showModal = false"
                    class="absolute right-3 text-gray-500 hover:text-gray-700 text-lg"
                  >
                    ✕
                  </button>
                  <h3 class="text-base font-semibold mb-4 text-center">
                    Kebijakan Privasi
                  </h3>
                </div>

                <div class="text-sm text-gray-600 leading-relaxed space-y-4">
                  <p>
                    Dengan menggunakan layanan ini, Anda menyetujui pengumpulan,
                    penggunaan, dan penyimpanan data pribadi Anda sesuai dengan
                    ketentuan berikut:
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
                    <li>Pembatasan akses hanya kepada pihak yang berwenang.</li>
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

                <!-- Checkbox dalam modal -->
                <div class="flex items-start space-x-2 mt-4">
                  <input
                    type="checkbox"
                    v-model="form.agree"
                    @change="showModal = !form.agree"
                    class="mt-1"
                    required
                  />
                  <label class="text-xs text-gray-600"
                    >Dengan ini saya menyetujui ketentuan yang telah disebutkan
                    di atas.</label
                  >
                </div>
              </div>
            </div>

            <button
              type="submit"
              :disabled="!isFormValid"
              class="w-full text-sm font-medium py-2 rounded-lg text-white focus:font-semibold disabled:bg-gray-400"
              :style="{ backgroundColor: isFormValid ? '#00A39D' : '#9CA3AF' }"
            >
              Lihat Rekomendasi Sekarang
            </button>
          </form>
        </div>
      </div>

      <!-- Recommendation Section -->
      <div v-if="recommendations.length">
        <h4
          class="text-xl font-semibold text-gray-800 mb-4 border-b pb-2 text-center"
        >
          Kami Menemukan Produk Terbaik untuk Kamu
        </h4>
        <div class="grid grid-cols-3 gap-4">
          <div
            v-for="(product, index) in recommendations"
            :key="index"
            class="rounded-lg border border-gray-200 overflow-hidden shadow-sm"
          >
            <img
              src="../assets/emas-rekomendasi.png"
              alt="Rekomendasi"
              class="w-full h-32 object-cover"
            />
            <div class="p-2">
              <h5 class="font-medium text-sm text-gray-800">{{ product }}</h5>
              <p class="text-xs text-gray-600">
                Solusi keuangan sesuai pilihanmu
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { reactive, ref, onMounted, computed } from "vue";
import axios from "axios";

const showModal = ref(false);
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

const fetchProvinces = async () => {
  try {
    const response = await fetch(
      "https://alamat.thecloudalert.com/api/provinsi/get/"
    );
    if (!response.ok) throw new Error("Failed to fetch provinces");
    provinces.value = (await response.json()).result;
  } catch (error) {
    console.error("Error fetching provinces:", error);
  }
};

onMounted(fetchProvinces);

const allowOnlyNumbers = (e) => {
  const allowedKeys = ["Backspace", "ArrowLeft", "ArrowRight", "Tab", "Delete"];
  if (!/[0-9]/.test(e.key) && !allowedKeys.includes(e.key)) e.preventDefault();
};

const isFormValid = computed(() =>
  Object.values(form).every((value) => value !== "" && value !== false)
);

const submitForm = async () => {
  try {
    const requestBody = {
      job: parseInt(form.job),
      age: parseInt(form.age),
      province: form.location.toLowerCase(),
      gender: parseInt(form.gender),
      salary: parseInt(form.salary),
    };

    // const response = await fetch("http://localhost:3000/recommendations", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body,
    // });

    const response = await axios.post(
      "http://localhost:21099/recommendations",
      requestBody
    );

    if (response.status !== 201) {
      throw new Error("Failed to fetch recommendations");
    }

    console.log("RESPONSE", response);

    // recommendations.value = (await response.json()).products || [];
  } catch (err) {
    console.error("Error fetching recommendations:", err);
  }
};
</script>

<style>
body {
  font-family: "Plus Jakarta Sans", sans-serif;
}
</style>
