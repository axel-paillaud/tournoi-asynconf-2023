<script setup>
import CalculationForm from '@/components/CalculationForm.vue';
import Result from '@/components/Result.vue';
import { ref, computed } from 'vue';

// Data from the calculation form
const car = ref({});

const callback = (payload) => {
    console.log(payload);
}
</script>

<template>
    <CalculationForm 
        @updateCar="callback"
    />
    <Result 
        :type="car.type" 
        :energy="car.energy"
        :kilometer="car.kilometer"
        :year="car.year"
    />
</template>

<style scoped>
p {
    font-family: lato;
}
</style>
