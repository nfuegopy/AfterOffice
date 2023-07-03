<template>
    <div>
        <div class="person-number">  Persona {{ props.numberOfPerson  }} </div>
        <div class="person-to-pay"> {{  
         new Intl.NumberFormat("en-US", {
        style: "currency",
    currency: "USD"
    }).format(props.totalPerPerson)
        }} </div>
        <div class="paid">
        <input type="checkbox" name="" id="" @change="handleChange"> Pagar
        </div>
    </div>
    </template>
    
    <script setup>
    import { defineProps, ref } from 'vue';
       import { pay } from '../store/store';
       const props = defineProps({
  id: String,
  numberOfPerson: Number,
  totalPerPerson: Number,
  paid: Boolean,
});

    const paid = ref(false);
    
    function handleChange(e){
  paid.value = e.target.checked;
  pay(props.id, paid.value);
}

    
    function formatCurrency(value) {
        if (typeof value !== 'number') {
            console.error('Error: totalPerPerson must be a number');
            return '';
        }
    
        return new Intl.NumberFormat("es-PY", {
    style: "currency",
    currency: "PYG"
}).format(value);
    }
    </script>
    
    <style scoped>
div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5em;
    border: 1px solid #ddd;
    border-radius: 4px;
}

.person-number {
    font-size: 1.2em;
    font-weight: bold;
}

.person-to-pay {
    color: #6c757d;
}

.paid {
    display: flex;
    align-items: center;
}

.paid input {
    margin-right: .5em;
}
</style>
