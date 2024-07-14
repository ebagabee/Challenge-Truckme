<template>
    <section class="banner">
        <div class="banner-overlay"></div>
        <div class="banner-content">
            <h1>BOAS VINDAS AO TRUCKME</h1>
            <p>Sua solução em transporte de qualidade.</p>
        </div>
    </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.banner {
    position: relative;
    background: url('@/assets/banner-background.png');
    background-size: contain;
    background-position: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #dbd3d3;
}

.banner-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.397);
}

.banner-content {
    position: relative;
    z-index: 1;
    max-width: 800px;
    padding: 2rem;
}

.banner h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    font-weight: bold;
}

.banner p {
    font-size: 1.8rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}
</style>