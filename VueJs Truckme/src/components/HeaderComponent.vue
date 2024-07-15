<template>
  <header class="header">
    <div class="container">
      <img src="@/assets/logo.png" alt="TruckMe Logo" class="logo" />
      <button class="menu-toggle" @click="toggleMenu">
        <span class="hamburger" :class="{ open: isMenuOpen }"></span>
      </button>
      <nav class="navigation" :class="{ open: isMenuOpen }">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Serviços</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
        <button class="close-menu" @click="toggleMenu">
          <span class="close-icon">&times;</span>
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

// Fechar o menu quando clicar fora dele
window.addEventListener('click', (event) => {
  if (!event.target.closest('.header')) {
    isMenuOpen.value = false;
  }
});
</script>

<style scoped>
.header {
  background-color: white;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  /* Adicionando position relative */
  z-index: 1000;
  /* Ajustando z-index */
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  max-height: 50px;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  position: relative;
}

.hamburger {
  display: block;
  width: 25px;
  height: 3px;
  background-color: #333;
  position: relative;
  transition: background-color 0.3s;
}

.hamburger::before,
.hamburger::after {
  content: '';
  display: block;
  width: 100%;
  height: 3px;
  background-color: #333;
  position: absolute;
  transition: transform 0.3s, background-color 0.3s;
}

.hamburger::before {
  top: -8px;
}

.hamburger::after {
  bottom: -8px;
}

.menu-toggle.open .hamburger {
  background-color: transparent;
}

.menu-toggle.open .hamburger::before {
  transform: translateY(8px) rotate(45deg);
}

.menu-toggle.open .hamburger::after {
  transform: translateY(-8px) rotate(-45deg);
}

.navigation {
  display: flex;
  align-items: center;
  position: relative;
  z-index: 999;
}

.navigation ul {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

.navigation a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  transition: color 0.3s;
}

.navigation a:hover {
  color: orange;
}

.close-menu {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  position: absolute;
  top: 1rem;
  right: 1rem;
}

.close-icon {
  font-size: 2rem;
  color: #333;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .navigation {
    position: fixed;
    top: 0;
    left: 0;
    width: 50%;
    height: 100vh;
    background-color: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
    z-index: 998;

  }

  .navigation.open {
    transform: translateX(0);
  }

  .navigation ul {
    flex-direction: column;
    gap: 2rem;
  }

  .navigation a {
    font-size: 1.5rem;
  }

  .menu-toggle.open+.navigation {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-right: 1rem;
  }

  .menu-toggle.open+.navigation .close-menu {
    display: block;
  }
}
</style>
