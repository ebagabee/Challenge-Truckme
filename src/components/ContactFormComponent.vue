<template>
    <section>
      <h2>Contato</h2>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="name">Nome</label>
          <input type="text" id="name" v-model="name" required />
        </div>
        <div>
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div>
          <label for="message">Mensagem</label>
          <textarea id="message" v-model="message" required></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
      <p v-if="submitted">Mensagem enviada com sucesso!</p>
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const name = ref('');
  const email = ref('');
  const message = ref('');
  const submitted = ref(false);
  
  function handleSubmit() {
    if (name.value && email.value && message.value) {
      submitted.value = true;
      setTimeout(() => {
        submitted.value = false;
        name.value = '';
        email.value = '';
        message.value = '';
      }, 3000);
    }
  }
  </script>
  
  <style>
  form {
    display: flex;
    flex-direction: column;
  }
  form div {
    margin-bottom: 1rem;
  }
  </style>
  