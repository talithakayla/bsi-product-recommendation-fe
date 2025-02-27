<template>
  <section class="max-w-2/3 mx-auto">
    <div class="relative w-full mx-auto">
      <img
        :src="productData.image_uri"
        alt=""
        class="w-full mt-6 max-h-[200px] opacity-100 brightness-[50%] object-cover rounded-[10px]"
      />
      <div
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
      >
        <h1 class="text-center text-white text-[40px] leading-6 font-extrabold">
          {{ productData.name }}
        </h1>
        <p class="mt-7 text-3xl text-white text-center">
          {{ productData.desc }}
        </p>
      </div>
    </div>
    <div class="mt-5">
      <h2 class="font-semibold text-4xl text-center lg:text-left">
        Gambaran Umum
      </h2>
      <p class="mt-4 leading-[150%] text-xl">
        {{ productData.details }}
      </p>
    </div>
    <hr class="text-[#D9D9D9] mt-6" />
    <div>
      <h2 class="font-semibold text-4xl mt-6 text-center lg:text-left">
        Keunggulan
      </h2>
      <ul class="flex flex-col lg:flex-row gap-5 mt-[30px]">
        <li
          v-for="(data, id) in productData.benefits"
          :key="id"
          class="w-full bg-[#00A39D] rounded-[10px] p-5 text-white"
        >
          <span class="font-bold">0{{ id + 1 }}</span>
          <h3 class="font-bold mt-4">{{ data.split("-")[0] }}</h3>
          <p class="mt-4">{{ data.split("-")[1] }}</p>
        </li>
      </ul>
    </div>
    <button
      class="flex flex-row justify-between bg-[#F7AF2E] text-white px-[30px] py-3 rounded-[10px] cursor-pointer hover:brightness-[85%] transition-all my-[50px] font-semibold mx-auto lg:ml-auto lg:mr-0"
    >
      <a
        href="https://play.google.com/store/apps/details?id=co.id.bankbsi.superapp&hl=id"
        target="_blank"
        class=""
      >
        Ajukan Sekarang <span class="ml-[84px]">&rarr;</span>
      </a>
    </button>
  </section>
</template>

<script setup>
import { useRoute } from "vue-router";
import axios from "axios";
import { onMounted, reactive, ref } from "vue";

const route = useRoute();

const productData = reactive({
  alias: "",
  benefits: "",
  desc: "",
  details: "",
  image_uri: "",
  id: 0,
  name: "",
});

const getProductData = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/products/${route.params.id}`
    );

    productData.id = response.data.datas.id;
    productData.alias = response.data.datas.alias;
    productData.benefits = response.data.datas.benefits;
    productData.desc = response.data.datas.desc;
    productData.details = response.data.datas.details;
    productData.image_uri = response.data.datas.image_uri;
    productData.name = response.data.datas.name;
  } catch (error) {
    throw new Error(error);
  }
};

onMounted(getProductData);
</script>

<style></style>
