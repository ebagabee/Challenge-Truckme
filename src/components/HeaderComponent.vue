<template>
    <header>
        <div class="logo">
            <!-- <img src="@/assets/logo.png" alt="TruckMe Logo" /> -->
        </div>

        <nav>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>

                <li>
                    <a href="#">Sobre</a>
                </li>

                <li>
                    <a href="#">Serviços</a>
                </li>

                <li>
                    <a href="#">Contato</a>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup lang="ts"></script>

<style>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #776d6d;
    color: white;
}

nav ul {
    display: flex;
    list-style: none;
}

nav ul li {
    margin: 0 1rem;
}

nav ul li a {
    color: white;
    text-decoration: none;
    font-size: 20px;
    transition: all .3s ease-in-out;
}

nav ul li a:hover {
    color: orangered;
}
</style>