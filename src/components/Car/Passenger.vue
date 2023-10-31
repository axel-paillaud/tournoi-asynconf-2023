<script setup>
import { ref } from 'vue';

const emit = defineEmits({
    updatePassenger: ( passenger ) => {
        if (!isNaN(passenger) && passenger >= 1) return true;
        else return false;
    }
});

const passenger = ref(null);

const updatePassenger = (event) => {
    passenger.value = event.target.value;
    emit('updatePassenger', passenger.value);
}
</script>

<template>
    <div class="label-container">
        <label for="passenger">Nombre de passager</label>
    </div>
    <div class="input-container">
        <input 
            @input="updatePassenger($event)"
            id="passenger"
            name="passenger"
            class="input-field" 
            type="number" 
            step="1" 
            min="1" 
            max="4" 
        />
    </div>

</template>

