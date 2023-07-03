import { reactive } from "vue";
export const store = reactive({
    params: {
        total: 0,
        propina:0,
        personas:0,
        faltapagar:0,
    },
    personas:[],
});

export function getGrandTotal(){
return store.params.total * (store.params.propina / 100 + 1);
}

export function calculate(){
    store.people = [];
    const total = store.params.total;
    const propina = store.params.propina;
    const personas= store.params.personas;

    const totalPerPerson = personas !== 0 ? getGrandTotal() / personas : 0;

    console.log('getGrandTotal:', getGrandTotal());
    console.log('personas:', personas);
    console.log('totalPerPerson:', totalPerPerson);

    for(let i = 0; i < personas; i++){
        store.personas.push({
          id: crypto.randomUUID(),
          numberOfPerson: i + 1,
          totalPerPerson,
          paid: false,
        });
      }
      
calculateRemaining();
}
  

function calculateRemaining(){
    const pendienteDePago= store.personas.filter(item => !item.paid);
    const remaining = pendienteDePago.reduce((acc, item)=> (acc += item.totalPerPerson ),0);

    store.params.remaining = remaining;
}

export function pay(id, paid){
    const person = store.personas.find(item => item.id === id);
    if(person){
        person.paid = paid;
        calculateRemaining()
    }
}