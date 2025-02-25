<template>
  <div class="max-w-md mx-auto mt-10 p-6 border rounded-2xl shadow-lg">
    <h2 class="text-2xl font-semibold mb-4 text-center">Formulir Kontak</h2>
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label class="block mb-1 font-medium">Nama:</label>
        <input
          v-model="form.nama"
          type="text"
          class="w-full p-2 border rounded-lg"
          placeholder="Masukkan nama"
          required
        />
      </div>
      <div>
        <label class="block mb-1 font-medium">Email:</label>
        <input
          v-model="form.email"
          type="email"
          class="w-full p-2 border rounded-lg"
          placeholder="Masukkan email"
          required
        />
      </div>
      <div>
        <label class="block mb-1 font-medium">Pesan:</label>
        <textarea
          v-model="form.pesan"
          class="w-full p-2 border rounded-lg"
          rows="4"
          placeholder="Tulis pesan"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        class="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 disabled:opacity-50"
        :disabled="loading"
      >
        {{ loading ? 'Mengirim...' : 'Kirim' }}
      </button>
    </form>

    <div v-if="submitted" class="mt-6 p-4 bg-green-100 text-green-700 rounded-lg">
      <h3 class="font-semibold">Data Terkirim:</h3>
      <p><strong>Nama:</strong> {{ form.nama }}</p>
      <p><strong>Email:</strong> {{ form.email }}</p>
      <p><strong>Pesan:</strong> {{ form.pesan }}</p>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import axios from 'axios';

const form = reactive({
  nama: '',
  email: '',
  pesan: '',
});

const submitted = ref(false);
const loading = ref(false);

async function handleSubmit() {
  loading.value = true;
  try {
    const { data } = await axios.post('https://jsonplaceholder.typicode.com/posts', form);
    console.log('API Response:', data);
    submitted.value = true;
  } catch (error) {
    console.error('Error:', error);
    alert('Gagal mengirim data.');
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
label {
  font-size: 14px;
}
</style>
