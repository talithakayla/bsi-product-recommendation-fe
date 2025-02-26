<template>
  <div
    v-if="showAlertModal"
    class="fixed inset-0 bg-black/30 flex justify-center items-center z-50"
  >
    <div
      class="bg-white rounded-2xl p-6 w-[90%] max-w-md shadow-lg flex flex-col items-center justify-center text-center relative group transition duration-200"
    >
      <button
        @click="closeModal"
        class="absolute top-4 right-4 text-gray-400 cursor-pointer"
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
      <img
        src="../assets/maaf-icon.png"
        alt="Bank Syariah Indonesia"
        class="h-[112px] w-[112px]"
      />
      <h2 class="text-lg font-medium text-gray-800">Yuk, Lengkapi Dulu!</h2>
      <p class="text-sm text-gray-600">
        Pastikan semuanya terisi agar bisa lanjut, ya!
      </p>
      <div class="mt-6 w-full flex justify-center">
        <button
          @click="closeModal"
          class="px-4 py-2 bg-[#00A39D] text-white rounded-lg cursor-pointer"
        >
          Lengkapi Sekarang
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  showAlertModal: {
    type: Boolean,
  },
  closeModal: {
    type: Function,
  },
});
</script>

<style></style>
