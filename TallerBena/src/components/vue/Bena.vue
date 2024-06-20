<script setup>
import { ref } from 'vue';

const cont = ref(0);
const codigo = ref('');
const modulos = ref([{ "name": "Modulo 1" }, { "name": "Modulo 2" }, { "name": "Modulo 3" }]);
const codigos = ref([
  [{ "codigo": "192099" }],
  [{ "codigo": "192098" }],
  [{ "codigo": "192097" }]
]);

const moduloselec = ref('Modulo 1');

function agregar() {
  const index = modulos.value.findIndex(modulo => modulo.name === moduloselec.value);
    codigos.value[index].push({ "codigo": codigo.value });
    codigo.value = ''; 
  
}

</script>
<template>
  <div class="flex grid-3 m-auto items-center justify-evenly h-96">
    <div class="rounded-md py-1 px-4 mb-1 bg-blue-400" v-for="(rec, i) in modulos" :key="i">
      <p class="text-center mb-6 text-slate-700 bg-green-500 p-3 rounded">{{ rec.name }}</p>
      <p v-for="(des, j) in codigos[i]" :key="j">
        {{ des.codigo }}
      </p>
    </div>
  </div>
  <div class="flex justify-evenly">
    <div>
      <input class="bg-blue-700 mr-2 rounded" type="text" v-model="codigo">
      Ingrese el código
    </div>
    <div>{{ cont }} Turno</div>
    <div>
      <select v-model="moduloselec" class="rounded-lg border-gray-400 border-2 h-10 font-semibold pl-3 w-36">
        <option v-for="modulo in modulos">
          {{ modulo.name }}
        </option>
      </select>
    </div>
    <button @click="agregar"
      class="rounded-lg bg-purple-600 hover:bg-white hover:text-red-700 text-white h-10 font-semibold w-36 p-1 text-center">
      Agregar Turno
    </button>
  </div>
</template>
