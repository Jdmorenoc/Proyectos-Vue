<script setup>
import { ref } from 'vue'

const simpsons = ref([])

function loadPhrases() {
    fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=10')
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            simpsons.value = data
        })
}
</script>

<template>
    <div class="flex flex-col items-center">
        <button @click="loadPhrases" class="mt-10 mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400">Cargar frases de los Simpsons</button>
        <div v-for="(simp, index) in simpsons" :key="index" class="card bg-purple-300 mb-4 p-4 w-1/2 rounded-lg shadow-lg">
            <div class="flex items-center" :class="{'flex-row-reverse': simp.characterDirection === 'Right', 'flex-row': simp.characterDirection === 'Left'}">
                <img :src="simp.image" class="w-24 h-24 m-2 rounded-full border-4 border-white shadow-lg">
                <div class="ml-4">
                    <p class="text-lg font-semibold"><strong>{{ simp.character }}</strong></p>
                    <p class=" text-sm text-gray-700">{{ simp.quote }}</p>
                </div>
            </div>
        </div>
    </div>
</template>