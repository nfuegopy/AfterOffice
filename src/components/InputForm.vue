<template>
    <form action="" @submit.prevent="handleSubmit">
      <div class="form-container">
        <div>
          <label for="total"><p>Total</p></label>
          <input type="number" required v-model="total">
        </div>
  
        <div>
          <label for="propina"><p>Propina %</p> </label>
          <input type="number" required v-model="propina">
        </div>
  
        <div>
          <label for="personas"><p>Personas</p></label>
          <input type="number" required v-model="personas">
        </div>
        <div>
          <input class="submit-button" type="submit" value="Calcular" :disabled="calculated"/>
          <input class="submit-button" type="button" value="Limpiar" @click="handleClear" :disabled="!calculated"/>
        </div>
      </div>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { store, calculate } from "../store/store";
  
  const total = ref(0);
  const propina = ref(0);
  const personas = ref(0);
  const calculated = ref(false);
  
  function handleSubmit() {
    store.params.total = total.value;
    store.params.propina = propina.value;
    store.params.personas = personas.value;
    calculate();
    calculated.value = true; // Deshabilita el botón después de calcular
  }
  
  function handleClear() {
    total.value = 0;
    propina.value = 0;
    personas.value = 0;
    calculated.value = false; // Habilita el botón de limpiar después de limpiar los campos
    location. reload()
  }
  </script>
  
    <style scoped>
    .form-container{
        display: grid;
        gap: 1em;
        justify-items: start;
        padding: 1em;
        border: 1px solid #ddd;
        border-radius: 4px;
        background-color: #fff;
        width: 100%;
        max-width: 500px;
        margin: 0 auto;
    }
    
    form {
        display: flex;
        flex-direction: column;
    }
    
    input[type=number] {
        width: 100%;
        padding: .5em;
        border-radius: 4px;
        border: 1px solid #050505;
    }
    
    .submit-button {
        padding: .5em 1em;
        border-radius: 4px;
        border: none;
        background-color: #6c757d;
        color: #fff;
        cursor: pointer;
        font-size: 1em;
        font-weight: 600;
        text-transform: uppercase;
    }
    p{
        color: #000;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 300;
    }
    </style>
    