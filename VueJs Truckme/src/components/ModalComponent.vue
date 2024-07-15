<template>
    <div class="modal" v-if="isVisible">
        <div class="modal-content">
            <p>{{ message }}</p>
            <button @click="closeModal">Fechar</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, defineProps, getCurrentInstance } from 'vue';

const props = defineProps({
    isVisible: Boolean,
    message: String,
});

const { emit } = getCurrentInstance();

const closeModal = () => {
    emit('close');
};
</script>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background-color: #fff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
}

button {
    margin-top: 1rem;
    background-color: #ff9900;
    color: #fff;
    border: none;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #e68a00;
}
</style>