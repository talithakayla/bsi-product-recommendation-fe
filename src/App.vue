<template>
  <div class="min-h-screen bg-white-100">
    <HeaderSection />
    <HeroSection />
    <FormSection />
  </div>
</template>

<script setup>
import HeaderSection from './components/HeaderSection.vue';
import HeroSection from './components/HeroSection.vue';
import FormSection from './components/FormSection.vue';
</script>

<style>
body {
  font-family: 'Plus Jakarta Sans', sans-serif;
}
</style>