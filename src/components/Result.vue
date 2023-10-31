<script setup>
import { ref, watch, computed } from 'vue';
import { scoreType, scoreEnergy, scoreKilometer, scoreYear } from '@/composables/scores.js';
const props = defineProps({
    car: Object,
    type: String,
    energy: String,
    kilometer: Number,
    year: Number,
});

const rate = ref(null);
const score = ref(0);

watch(props.car, (oldCar, newCar) => {
    score.value = scoreType[newCar.type] + scoreEnergy[newCar.energy];

    if (newCar.kilometer <= 10000) score.value += 9;
    else if (newCar.kilometer <= 15000) score.value += 7;
    else if (newCar.kilometer <= 20000) score.value += 5;
    else if (newCar.kilometer <= 25000) score.value += 3;
    else score.value += 1;

    if (newCar.year <= 1970) score.value += 1;
    else if (newCar.year <= 1990) score.value += 2;
    else if (newCar.year <= 1980) score.value += 2;
    else if (newCar.year <= 2000) score.value += 4;
    else if (newCar.year <= 2000) score.value += 5;
    else score.value += 7;

    console.log(score.value);
});

const updatedRate = computed(() => {
    if (score.value <= 10) return 3; 
    else if (score.value <= 15) return 2.74; 
    else if (score.value <= 25) return 2.52; 
    else if (score.value <= 33) return 2.10; 
    else return 1.85; 

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
