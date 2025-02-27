<template>
  <div class="relative">
    <swiper
      :modules="[Autoplay, Pagination]"
      :slides-per-view="1"
      :autoplay="{ delay: 5000 }"
      class="w-full max-w-lg"
    >
      <swiper-slide v-for="(item, index) in items" :key="index">
        <div class="overflow-hidden mt-[60px]">
          <a :href="`products/${item.alias}`" target="_blank" class="group">
            <img
              :src="item.image_uri"
              :alt="item.alias"
              class="w-full h-full object-cover rounded-[10px]"
            />
            <div class="p-4">
              <h3
                class="text-lg font-semibold text-[#00A39D] flex justify-center group-hover:underline decoration-2 decoration-[#00A39D]"
              >
                {{ item.name }}
              </h3>
              <p class="text-sm text-gray-600 flex justify-center">
                {{ item.desc }}
              </p>
            </div>
          </a>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>
