<template>
  <main class="min-h-screen bg-white-100">
    <HeaderSection />
    <RouterView />
    <FooterSection />
  </main>
</template>

<script setup>
import { RouterView } from "vue-router";
import FooterSection from "./components/FooterSection.vue";
import HeaderSection from "./components/HeaderSection.vue";
</script>

<style>
body {
  font-family: "Plus Jakarta Sans", sans-serif;
}
</style>
