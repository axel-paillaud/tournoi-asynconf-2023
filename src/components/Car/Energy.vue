<script setup>
import { ref } from 'vue';

const emit = defineEmits({
    updateEnergy: ( energy ) => {
        if (typeof(energy) === 'string') return true;
        else return false;
    }
});

const energy = ref(null);

const updateEnergy = (event) => {
    energy.value = event.target.value;
    emit('updateEnergy', energy.value);
}
</script>

<template>       
    <div class="label-container">
        <label for="energy">Énergie</label>
    </div>
    <div class="input-container">
        <select 
            @input="updateEnergy($event)"
            class="input-field selector" 
            name="energy" 
            id="energy"
        >
            <option value="">Veuillez sélectionner un type d'énergie</option>
            <option value="petrol">Essence</option>
            <option value="electric">Electrique</option>
            <option value="gas">Gaz</option>
            <option value="diesel">Diesel</option>
            <option value="hybrid">Hybride</option>
        </select>
    </div>

</template>

