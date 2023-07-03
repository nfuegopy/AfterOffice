<script setup>
import InputForm from './InputForm.vue';
import VistaPersona from './VistaPersona.vue';
</script>

<template>
<div class="container">
    <h1 class="title">After Office Calculator VueJs</h1>
    <InputForm /> 
    <VistaPersona /> 
</div>
</template>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2em;
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    margin: 1em auto;
    max-width: 600px;
    background-color: #fafafa;
}

.title {
    font-size: 2em;
    font-weight: 600;
    color: #333;
    margin-bottom: 1em;
    text-align: center;
}
</style>
