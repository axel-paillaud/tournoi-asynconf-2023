<script setup>
import { ref } from 'vue';

const emit = defineEmits({
    updateType: ( type ) => {
        if (typeof(type) === 'string') return true;
        else return false;
    }
});

const type = ref(null);

const updateType = (event) => {
    type.value = event.target.value;
    emit('updateType', type.value);
}
</script>

<template>
    <div class="label-container">
        <label for="type">Type de voiture</label>
    </div>
    <div class="input-container">
        <select 
            @input="updateType($event)"
            class="input-field selector" 
            name="type" 
            id="type"
        >
            <option value="">Veuillez sélectionner un type de véhicule</option>
            <option value="light-car">Citadine</option>
            <option value="convertible-car">Cabriolet</option>
            <option value="sedan-car">Berline</option>
            <option value="heavy-car">SUV / 4x4</option>
        </select>
    </div>
</template>

