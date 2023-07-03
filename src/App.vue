<template>
  <div>
    <SplitBillView />
    
  </div>
  <footer>
      <p>Pruebas codigos de VueJs mas Info: Antonio Barrios - 0982580075</p>
    </footer>
</template>

<script setup>
import SplitBillView from './components/SplitBillView.vue'
</script>

<style scoped>
/* Estilos adicionales para el footer */
footer {
  background-color: #030303;
  padding: 10px;
  text-align: center;
  }
  p{
    font-family: Arial, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 500;
    color: #ffffff;
    font-size: 15px;
  }
</style>
