<script setup>
import CalculationForm from '@/components/CalculationForm.vue';
import Result from '@/components/Result.vue';
import { ref, computed } from 'vue';

// Data from the calculation form
const data = ref({});
</script>

<template>
    <CalculationForm />
    <Result />
</template>

<style scoped>
p {
    font-family: lato;
}
</style>
