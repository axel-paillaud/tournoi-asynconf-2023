<script setup>
import CalculationForm from '@/components/CalculationForm.vue';
import Result from '@/components/Result.vue';
import { ref, computed } from 'vue';

// Data from the calculation form
const car = ref({});

const updateCar = (payload) => {
    if (payload.type && payload.energy && payload.kilometer && payload.year && payload.passenger) {
        car.value.type = payload.type;
        car.value.energy = payload.energy;
        car.value.kilometer = Number(payload.kilometer);
        car.value.year = Number(payload.year);
        car.value.passenger = Number(payload.passenger);
    }
}
</script>

<template>
    <CalculationForm 
        @updateCar="updateCar"
    />
    <Result 
        :car="car"
    />
</template>

<style scoped>
p {
    font-family: lato;
}
</style>
