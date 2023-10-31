<script setup>
import { ref, watch } from 'vue';
const props = defineProps({
    car: Object,
    type: String,
    energy: String,
    kilometer: Number,
    year: Number,
});

</script>

<template>
    <p>Im the result</p>
    <p>{{ car.type }}</p>
    <p>{{ car.energy }}</p>
    <p>{{ car.kilometer }}</p>
    <p>{{ car.year }}</p>
</template>

<style scoped>

</style>
