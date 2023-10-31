<script setup>
import { ref } from 'vue';

const emit = defineEmits({
    updateKilometer: ( type ) => {
        if (Number(type)) return true;
        else return false;
    }
});

const kilometer = ref(null);

const updateKilometer = (event) => {
    kilometer.value = event.target.value;
    emit('updateKilometer', kilometer.value);
}
</script>

<template>
    <div class="label-container">
        <label for="kilometer">Kilométrage annuel</label>
    </div>
    <div class="input-container">
        <input 
            @input="updateKilometer($event)"
            class="input-field" 
            name="kilometer" 
            id="kilometer" 
            type="number" 
            step="5000"/>
    </div>
</template>

