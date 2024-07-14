<template>
  <section class="contact-form">
    <h2>Entre em Contato</h2>
    <form @submit.prevent="submitForm" class="form">
      <div class="form-group">
        <label for="name">Nome:</label>
        <input type="text" id="name" v-model="formData.name" required />
        <p v-if="formErrors.name" class="error-message">{{ formErrors.name }}</p>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" required />
        <p v-if="formErrors.email" class="error-message">{{ formErrors.email }}</p>
      </div>
      <div class="form-group">
        <label for="message">Mensagem:</label>
        <textarea id="message" v-model="formData.message" rows="4" required></textarea>
        <p v-if="formErrors.message" class="error-message">{{ formErrors.message }}</p>
      </div>
      <button type="submit" class="submit-btn">Enviar</button>
      <p v-if="formError" class="error-message">{{ formError }}</p>

      <ModalComponent :is-visible="showModal" :message="modalMessage" @close="closeModal" />
    </form>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ModalComponent from './ModalComponent.vue';

const formData = ref({
  name: '',
  email: '',
  message: ''
});

const formError = ref('');
const formErrors = ref({
  name: '',
  email: '',
  message: ''
});

const showModal = ref(false);
const modalMessage = ref('');

const submitForm = () => {
  resetFormErrors();

  if (validateForm()) {
    setTimeout(() => {
      showModal.value = true;
      modalMessage.value = 'O formulário foi enviado com sucesso!';
      resetForm();
    }, 1000);
  }
};

const validateForm = () => {
  let valid = true;

  if (!formData.value.name) {
    formErrors.value.name = 'Por favor, preencha seu nome.';
    valid = false;
  }
  if (!formData.value.email) {
    formErrors.value.email = 'Por favor, preencha seu e-mail.';
    valid = false;
  } else {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.value.email)) {
      formErrors.value.email = 'Por favor, insira um e-mail válido.';
      valid = false;
    }
  }
  if (!formData.value.message) {
    formErrors.value.message = 'Por favor, escreva uma mensagem.';
    valid = false;
  }

  if (!valid) {
    formError.value = 'Por favor, corrija os erros no formulário.';
  }

  return valid;
};

const resetFormErrors = () => {
  formError.value = '';
  formErrors.value.name = '';
  formErrors.value.email = '';
  formErrors.value.message = '';
};

const resetForm = () => {
  formData.value.name = '';
  formData.value.email = '';
  formData.value.message = '';
};

const closeModal = () => {
  showModal.value = false;
};
</script>

<style scoped>
.contact-form {
  padding: 2rem;
  text-align: center;
}

.form {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1rem;
  text-align: left;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #333;
}

input,
textarea {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

textarea {
  resize: vertical;
}

.submit-btn {
  background-color: #ff9900;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #e68a00;
}

.error-message {
  color: #f44336;
  margin-top: 0.5rem;
}

.success-message {
  color: #4caf50;
  margin-top: 1rem;
}
</style>