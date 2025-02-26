<template>
  <section class="max-w-2/3 mx-auto">
    <a href="/" class="flex flex-row items-center mt-6 gap-x-2.5">
      <img
        src="../assets/chevron-left.svg"
        alt="chevron-left"
        class="w-[10px] h-[18px]"
      />
      <p class="font-semibold">Kembali</p>
    </a>
    <div class="relative w-full mx-auto">
      <img
        src="https://placehold.co/600x400.png"
        alt=""
        class="w-full mt-6 max-h-[200px] opacity-50 brightness-[10%] object-cover rounded-[10px]"
      />
      <div
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
      >
        <h1 class="text-center text-white text-[40px] leading-6 font-extrabold">
          E-MAS
        </h1>
        <p class="mt-7 text-3xl text-white text-center">
          Akses investasi emas mudah dalam genggaman
        </p>
      </div>
    </div>
    <div class="mt-5">
      <h2 class="font-semibold text-4xl">Gambaran Umum</h2>
      <p class="mt-4 leading-[150%] text-xl">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus,
        consectetur numquam. Voluptatum aliquid fugit perferendis amet nobis
        assumenda quo sint?
      </p>
    </div>
    <hr class="text-[#D9D9D9] mt-6" />
    <div>
      <h2 class="font-semibold text-4xl mt-6">Keunggulan</h2>
      <ul class="flex flex-row gap-5 mt-[30px]">
        <li
          v-for="excellence in excellences"
          :key="excellence.id"
          class="w-full bg-[#00A39D] rounded-[10px] p-5 text-white"
        >
          <span class="font-bold">{{ excellence.id }}</span>
          <h3 class="font-bold mt-4">{{ excellence.heading }}</h3>
          <p class="mt-4">{{ excellence.desc }}</p>
        </li>
      </ul>
    </div>
    <div>
      <button
        class="flex flex-row justify-between bg-[#F7AF2E] text-white px-[30px] py-3 rounded-[10px] ml-auto cursor-pointer hover:brightness-[85%] transition-all my-[50px] font-semibold"
      >
        Ajukan Sekarang <span class="ml-[84px]">&rarr;</span>
      </button>
    </div>
  </section>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const excellences = [
  {
    id: "01",
    heading: "Terjangkau",
    desc: "Investasi terjangkau",
  },
  {
    id: "02",
    heading: "Tertidur",
    desc: "Investasi tertidur",
  },
  {
    id: "03",
    heading: "Terkaya",
    desc: "Investasi terkaya",
  },
  {
    id: "04",
    heading: "Terlelap",
    desc: "Investasi terlelap",
  },
];
</script>

<style></style>
