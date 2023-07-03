<script setup>
import Label from './Label.vue'
import Person from './Person.vue';
import { getGrandTotal, store } from '../store/store';
</script>

<template>
<div class="no-items" v-if="store.personas.length === 0">Sin Personas</div>
<div class="people-view" v-if="store.personas.length > 0">
  <div class="header">
    <div>
      <Label title="Total + Propina: " :value="getGrandTotal()"/>
    </div>
    <div>
      <Label title="Falta Pagar: " :value="store.params.remaining"/>  
    </div>
  </div>
  <div class="people-container">  
    <Person 
      v-for="person in store.personas" :key="person.id"
      :id="person.id" :numberOfPerson="person.numberOfPerson"
      :totalPerPerson="person.totalPerPerson" 
      :paid="person.paid"
    />
  </div>
</div>
</template>

<style scoped>
.no-items {
    text-align: center;
    color: #000;
    font-size: 1.2em;
    font-weight: 600;
}

.people-view {
    margin-top: 2em;
    padding: 1em;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #fff;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
}

.header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1em;
    font-size: 1.4em;
    font-weight: 600;
    color: #000;
}

.people-container {
    display: grid;
    gap: 1em;
    font-style: italic;
    color: #000;
}
</style>
