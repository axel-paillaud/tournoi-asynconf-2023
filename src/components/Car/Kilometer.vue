<script setup>
import { ref } from 'vue';

const emit = defineEmits({
    updateKilometer: ( kilometer ) => {
        if (!isNaN(kilometer) && kilometer >= 0) {
            return true;
        }
        else {
            return false;
        }
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
            step="5000"
            min="0"
        />
    </div>
</template>

