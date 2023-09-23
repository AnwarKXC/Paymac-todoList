<template>
  <div class="pt-4 mb-8 relative">
    <input type="text" v-model=" searchQuery " @input=" getCities " placeholder="Search for a Todo"
      class="py-2 px-3 text-weather-secondary font-medium  w-full placeholder:text-weather-secondary bg-[#9952]  border-b-2 focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004E71] rounded " />
  </div>
  <div v-for="  city  in filterdCities " :key=" city.id ">
    <citycard :city=" city " />
  </div>
  <p class=" text-weather-secondary text-center text-2xl"
    v-if=" savedCities.length === 0 && searchQuery === '' ">
    No Todos
  </p>
</template>

<script setup>
import { ref } from "vue"
import citycard from "./CityCard.vue"
let searchQuery = ref( '' )
let savedCities = ref( [] )
let filterdCities = ref( [] )

const getCities = async () => {

  // if ( localStorage.getItem( "savedCities" ) ) {
  //   savedCities.value = JSON.parse(
  //     localStorage.getItem( "savedCities" )
  //   )

  let res = await fetch( 'http://localhost:3000/tasks' )
  let data = await res.json()
  savedCities.value = data
  filterdCities.value = savedCities.value.filter( city => city.title.includes( searchQuery.value ) )
}
await getCities()

</script>
