<script setup>
import { ref } from "vue";

const pokemons = ref([])

function loadPokemons() {  

    fetch('https://pokeapi.co/api/v2/pokemon')
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data.results)

        // pokemons.value = data.results //Muestra una vez los pokemones (desventaja)

        for(let i = 0; i < data.results.length ; i++){
            console.log(i)
            pokemons.value.push(data.results[i])            
        } //Muestra los pokemones siempre que se acciones el boton
    });
}
</script>


<template>
    <div class="bg-slate-300 mb-1" v-for="(pok,i) in pokemons" :key="i">
        {{ pok.name }}
    </div>
    <button @click="loadPokemons">Cargar Pokemones</button>
</template>