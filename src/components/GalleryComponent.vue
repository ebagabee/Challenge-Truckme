<template>
    <section>
      <h2>Galeria de Imagens</h2>
      <div class="gallery">
        <button @click="prevImage">Anterior</button>
        <img :src="images[currentImage]" alt="Galeria de Imagens" />
        <button @click="nextImage">Próximo</button>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  import image1 from '@/assets/image1.png';
  import image2 from '@/assets/image2.png';
  import image3 from '../assets/image3.jpg';
  
  const images = ref([
    image1,
    image2,
    image3
  ]);
  const currentImage = ref(0);
  
  function prevImage() {
    if (currentImage.value > 0) {
      currentImage.value--;
    }
  }
  
  function nextImage() {
    if (currentImage.value < images.value.length - 1) {
      currentImage.value++;
    }
  }
  </script>
  
  <style>
  .gallery {
    display: flex;
    align-items: center;
  }
  button {
    margin: 0 1rem;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  </style>
  