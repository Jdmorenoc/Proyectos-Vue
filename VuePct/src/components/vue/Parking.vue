<script setup>
import { computed, ref } from 'vue';

// Datos de los carriles de carros
const carSlots = ref([
  { active: true, value: 1000 },
  { active: true, value: 1100 },
  { active: true, value: 1200 },
  { active: true, value: 1300 },
  { active: true, value: 1400 },
  { active: true, value: 1500 }
]);

// Datos de los carriles de motos
const bikeSlots = ref([
  { active: true, value: 200 },
  { active: true, value: 200 },
  { active: true, value: 200 }
]);

// Total inicial
const total = ref(0);

// Función para cambiar el estado de un carril de carro
const toggleCarSlot = (index) => {
  const car = carSlots.value[index];
  car.active = !car.active;
  if (car.active) {
    total.value += car.value;
  }
};

// Función para cambiar el estado de un carril de moto
const toggleBikeSlot = (index) => {
  const bike = bikeSlots.value[index];
  bike.active = !bike.active;
  if (bike.active) {
    total.value += bike.value;
  }
};

// Funcion para reiniciar le valor total sumado
const restartTotal = computed(function () {
    total.value -= total.value;
})

</script>

<template>
  <div class="container mx-auto p-4" >
    <h1 class="text-3xl font-bold mb-4">Parqueadero</h1>

    <!-- Carriles de carros -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-2">Carriles de Carros</h2>
      <div class="grid grid-cols-3 gap-4">
        <div v-for="(car, index) in carSlots" :key="index">
          <div @click="toggleCarSlot(index)" :class="car.active ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500  hover:bg-red-600'" class="w-20 h-20 flex justify-center items-center text-white rounded-md cursor-pointer">
            {{ car.active ? 'Libre' : 'Ocupado' }}
          </div>
        </div>
      </div>
    </div>

    <!-- Carriles de motos -->
    <div>
      <h2 class="text-xl font-semibold mb-2">Carriles de Motos</h2>
      <div class="grid grid-cols-3 gap-4">
        <div v-for="(bike, index) in bikeSlots" :key="index"  >
          <div @click="toggleBikeSlot(index)" :class="bike.active ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500  hover:bg-red-600'" class="w-20 h-20 flex justify-center items-center text-white rounded-md cursor-pointer">
            {{ bike.active ? 'Libre' : 'Ocupado' }}
          </div>
        </div>
      </div>
    </div>

    <!-- Total -->
    <div class=" mt-12" >
        <div>
            <h2 class="text-xl font-semibold">Total a pagar</h2>
            <p class="text-2xl font-bold text-blue-700">Total: {{ total }}</p>
        </div>
    </div>
    <!-- Reiniciar Total -->
    <div> 
        <button @click="restartTotal" class="p-4 bg-yellow-500 rounded mt-5">Reiniciar Total</button>
    </div>

</div>
</template>