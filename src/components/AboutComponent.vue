<template>
    <section>
      <h2>Sobre nós</h2>
      <p>
        A TruckMe é uma empresa dedicada a fornecer soluções logísticas inovadoras
        <span v-if="showMore"> Mais informações sobre a empresa...</span>
      </p>
      <button @click="toggleShowMore">Leia mais</button>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const showMore = ref(false);
  
  function toggleShowMore() {
    showMore.value = !showMore.value;
  }
  </script>
  
  <style>
  section {
    padding: 2rem;
  }
  button {
    margin-top: 1rem;
  }
  </style>
  