<script setup>

import { ref,computed } from "vue";

const ver = ref(' ')
const show = computed(function () {
    if (ver.value) {
        show = 'No tenes mensajes' 
    } else {
        show = 'Tienes mensajes por leer'
    }
    return show
})
</script>



<template>
    <ul :class='{"bg-green-200 p-2 text-center": ver }' v-show="ver">
        <li class="flex-grid">
            {{ver}}
        </li>
    </ul>
    <!-- <button @click="ver=!ver" class="bg-slate-300">enviar</button> -->

    <input v-model="show" type="text" placeholder="Inserte texto">
    <label class="inline-block" >
        <!-- {{ ver ? ' ':'No tienes mensajes' }} -->
       {{ show }} 
        </label>
</template>