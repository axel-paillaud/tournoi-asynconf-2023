<script setup>
import Type from '@/components/Car/Type.vue';
import Energy from '@/components/Car/Energy.vue';
import Kilometer from '@/components/Car/Kilometer.vue';
import Year from '@/components/Car/Year.vue';
import { ref } from 'vue';

const emit = defineEmits(['updateCar']);

const car = ref({});

// Each form field emit data when input value change.
// We can then pass value from Home to Result component, to calculate the rate

function updateType(payload) {
    car.type = payload;
    emit('updateCar', car);
}

function updateEnergy(payload) {
    car.energy = payload;
    emit('updateCar', car);
}

function updateKilometer(payload) {
    car.kilometer = payload;
    emit('updateCar', car);
}

function updateYear(payload) {
    car.year = payload;
    emit('updateCar', car);
}
</script>

<template>
    <form class="calculation-form">
        <Type @updateType="updateType" />
        <Energy @updateEnergy="updateEnergy" />
        <Kilometer @updateKilometer="updateKilometer" />
        <Year @updateYear="updateYear" />
    </form>
</template>

<style >
.calculation-form {
    padding: 48px 96px;
    background-color: white;
    border-radius: 24px 24px 0 0;
    box-shadow: 6px 6px 10px 2px rgba(167, 138, 67, 0.65);
    color: var(--color-text);
}

.label-container {
    margin-bottom: 8px;
}

.input-container {
    margin-bottom: 32px;
    width: 100%;
}

.input-field {
    width: 100%;
    padding: 8px 16px;
    background-color: white;
    border: 1px solid #e5e7eb;
    border-radius: 4px;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    color: var(--color-text);
    font-size: 16px;
}

.selector {
    width: 100%;
    padding: 8px 16px;
}

@media screen and (max-width: 640px) {
    .calculation-form {
        padding: 32px 56px;
    }
}
</style>
