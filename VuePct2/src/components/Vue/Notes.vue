<script setup> 

import { ref, computed } from "vue";

const txt = ref('');
const Notes = ref([])

function addNote() {
    if (txt.value.trim()=== '')return 
        Notes.value.push({
            text:txt.value,
            done:false
        })
        txt.value= ''
    }

function deleteNote(index){
    Notes.value.splice(index, 1)
}


</script>

<template>

<div class="w-2/4 text-center ml-[25%] mt-[10%]">

    <h1 class="font-bold bg-green-500 py-1 rounded">Lista de Notas</h1>

    <div class="border-2 border-slate-600 bg-slate-500 mt-5 rounded ">
        <div class="text-start ml-[20%]  ">
            <div class=" bg-slate-200 rounded rounded-r-none w-3/4 mt-5 text" v-for="(nt, i) in Notes" :key="i">
                <button @dblclick="deleteNote" class="p-1 w-8 mr-3 bg-blue-400">X</button>  
                {{nt.text}}    
 
            </div>

        </div>

        <input placeholder=" Ingrese el texto" type="text" class="bg-slate-300 rounded w-2/4 rounded-r-none p-1 pl-4 mt-8" v-model="txt" @keypress.enter="addNote" "> 

        <button class="bg-green-700 rounded rounded-l-none hover:bg-green-500 p-1 w-16 mt-5 mb-5" @click="addNote" >Subir</button>

        <p class="mb-5 text-slate-300" v-show="addNote != ''">Presiona enter para enviar</p>       
    </div>
</div>
</template>