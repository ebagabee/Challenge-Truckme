<template>
  <HeaderComponent />
  <BannerComponent />

  <main>
    <AboutComponent />
    <ServicesTableComponent />
  </main>
</template>

<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue';
import BannerComponent from './components/BannerComponent.vue';
import AboutComponent from './components/AboutComponent.vue';
import ServicesTableComponent from './components/ServicesTableComponent.vue';
</script>