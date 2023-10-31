<script setup>
import Home from '@/components/Home.vue';
import Title from '@/components/Title.vue';
</script>

<template>
    <header>
        <Title />
    </header>

    <main>
        <Home />
    </main>

    <footer>

    </footer>
</template>

<style scoped>
header {
    margin-bottom: 24px;
}

main {
    height: 100%;
    padding: 16px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 32px;
}
</style>
