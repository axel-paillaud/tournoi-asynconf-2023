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
    margin-bottom: 64px;
}

main {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
}

@media screen and (max-width: 768px) {
    main {
        padding: 16px;
        flex-direction: column;
        gap: 32px;
    }
}
 
</style>
