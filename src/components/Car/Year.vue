<script setup>
import { ref } from 'vue';

const emit = defineEmits({
    updateYear: ( type ) => {
        if (Number(type)) return true;
        else return false;
    }
});

const year = ref(null);

const updateYear = (event) => {
    year.value = event.target.value;
    emit('updateYear', year.value);
}
</script>

<template>
    <div class="label-container">
        <label for="year">Année</label>
    </div>
    <div class="input-container">
        <input 
            @input="updateYear($event)"
            id="year"
            name="year"
            class="input-field" 
            type="number" 
            step="1" 
            min="1960" 
            max="2023" 
        />
    </div>

</template>

