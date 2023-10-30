<script setup>

</script>

<template>
    <form>
        <div class="label-container">
            <label for="type">Type de voiture</label>
        </div>
        <div class="input-container">
            <select class="selector" name="type" id="type">
                <option value="">Veuillez sélectionner un type de véhicule</option>
                <option value="light-car">Citadine</option>
                <option value="convertible-car">Cabriolet</option>
                <option value="sedan-car">Berline</option>
                <option value="heavy-car">SUV / 4x4</option>
            </select>
        </div>
        <div class="label-container">
            <label for="energy">Énergie</label>
        </div>
        <div class="input-container">
            <select class="selector" name="energy" id="energy">
                <option value="petrol">Veuillez sélectionner un type d'énergie</option>
                <option value="">Essence</option>
                <option value="electric">Electrique</option>
                <option value="gas">Gaz</option>
                <option value="diesel">Diesel</option>
                <option value="hybrid">Hybride</option>
            </select>
        </div>
        <div class="label-container">
            <label for="kilometer">Kilométrage annuel</label>
        </div>
        <div class="input-container">
            <input name="kilometer" id="kilometer" type="number" step="5000"/>
        </div>
        <div class="label-container">
            <label>Année</label>
        </div>
        <div class="input-container">
            <input type="number" step="1" min="1960" max="2023" />
        </div>
    </form>
</template>

<style scoped>
form {
    padding: 48px 96px;
    background-color: white;
    border-radius: 24px 0 0 24px;
    box-shadow: 6px 6px 10px 2px rgba(167, 138, 67, 0.65);
}

.label-container {
    margin-bottom: 8px;
}

.input-container {
    margin-bottom: 16px;
    width: 100%;
}

.selector {
    width: 100%;
    padding: 8px 16px;
}

.input {
    width: 100%;
}
</style>
