<script setup>
import { ref, watch, computed } from 'vue';
import { scoreType, scoreEnergy, ratePassenger, computeKilometer, computeYear } from '@/composables/scores.js';
const props = defineProps({
    car: Object,
    type: String,
    energy: String,
    kilometer: Number,
    year: Number,
});

const rate = ref(0);
const score = ref(0);

watch(props.car, (oldCar, newCar) => {
    rate.value = ratePassenger[newCar.passenger];
    score.value = scoreType[newCar.type] + scoreEnergy[newCar.energy];

    // if (newCar.kilometer <= 10000) score.value += 9;
    // else if (newCar.kilometer <= 15000) score.value += 7;
    // else if (newCar.kilometer <= 20000) score.value += 5;
    // else if (newCar.kilometer <= 25000) score.value += 3;
    // else score.value += 1;

    score.value += computeKilometer(newCar.kilometer);
    score.value += computeYear(newCar.year);

    // if (newCar.year <= 1970) score.value += 1;
    // else if (newCar.year <= 1990) score.value += 2;
    // else if (newCar.year <= 1980) score.value += 2;
    // else if (newCar.year <= 2000) score.value += 4;
    // else if (newCar.year <= 2000) score.value += 5;
    // else score.value += 7;

});

const updatedRate = computed(() => {
    if (score.value <= 10) return parseFloat((rate.value + 3).toFixed(2)); 
    else if (score.value <= 15) return parseFloat((rate.value + 2.74).toFixed(2)); 
    else if (score.value <= 25) return parseFloat((rate.value + 2.52).toFixed(2)); 
    else if (score.value <= 33) return parseFloat((rate.value + 2.10).toFixed(2)); 
    else return parseFloat(rate.value + 1.85).toFixed(2); 

});

</script>

<template>
    <div class="rate-container">
        <div v-if="!car.type">
            <p>Veuillez remplir tout les champs du formulaire pour calculer votre taux d'emprunt.</p>
        </div>
        <div v-else>
            <p>Votre taux d'emprunt :</p>
            <p class="rate-value" v-if="updatedRate">{{ updatedRate }} %</p>
        </div>
    </div>
</template>

<style scoped>
.rate-container {
    width: 200px;
}
.rate-value {
    font-family: oswald;
    font-size: 68px;
    white-space: nowrap;
}

</style>
