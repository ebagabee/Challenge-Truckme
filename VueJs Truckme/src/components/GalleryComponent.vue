<template>
  <section class="gallery-section">
    <h2 class="gallery-title">Galeria de Imagens</h2>

    <div class="gallery">
      <transition name="fade">
        <img :key="currentImage" :src="images[currentImage]" alt="Imagem da galeria" class="gallery-image" />
      </transition>

      <div class="navigation-buttons">
        <button @click="prevImage" class="gallery-button">Anterior</button>
        <button @click="nextImage" class="gallery-button">Próximo</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import image1 from '@/assets/image1.jpg';
import image2 from '@/assets/image2.jpg';
import image3 from '@/assets/image3.jpg';

const images = ref([image1, image2, image3]);
const currentImage = ref(0);

const prevImage = () => {
  currentImage.value = (currentImage.value - 1 + images.value.length) % images.value.length;
};

const nextImage = () => {
  currentImage.value = (currentImage.value + 1) % images.value.length;
};
</script>

<style scoped>
.gallery-section {
  padding: 2rem;
  text-align: center;
}

.gallery-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

.gallery {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}

.gallery-image {
  max-width: 1200px;
  width: 100%;
  height: 40;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transition: transform 0.5s ease-in-out;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.navigation-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
  gap: 15px;
}

.gallery-button {
  background-color: #ff9900;
  color: #fff;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.gallery-button:hover {
  background-color: #e68a00;
}
</style>
