<template>
  <HeaderComponent />
  <BannerComponent />

  <main>
    <AboutComponent />
    <ServicesTableComponent />
    <ContactFormComponent />
    <!-- <GalleryComponent /> -->
  </main>
</template>

<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue';
import BannerComponent from './components/BannerComponent.vue';
import AboutComponent from './components/AboutComponent.vue';
import ServicesTableComponent from './components/ServicesTableComponent.vue';
import ContactFormComponent from './components/ContactFormComponent.vue';
// import GalleryComponent from './components/GalleryComponent.vue';
</script>