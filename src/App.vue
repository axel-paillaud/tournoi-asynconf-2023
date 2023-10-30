<script setup>
import Home from '@/components/Home.vue';
</script>

<template>
    <header>
        <h1>Générateur de taux d'emprunt</h1>
        <p class="subtitle"> Lorem ipsum dolor sit amet ! </p>
    </header>

    <main>
        <Home />
    </main>

    <footer>

    </footer>
</template>

<style scoped>
h1 {
    font-family: oswald;
    text-align: center;
    font-size: 68px;
}

.subtitle {
    text-align: center;
}

main {
    height: 100%;
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
}
</style>
