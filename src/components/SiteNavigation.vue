<template>
  <header class="sticky top-0 bg-weather-primary shadow-lg">
    <nav class="container flex flex-col sm:flex-row items-center gap-4 text-white py-6">
      <div class="flex items-center justify-center gap-3 font-semibold text-weather-secondary">
        <i class="fa-solid fa-list text-2xl"></i>
        <p class="text-2xl ">{{$t('Todo List')}}</p>
        <div class="flex gap-2 ml-4">
          <button @click="ar"> AR </button>
          <button @click="en"> EN </button>
        </div>
      </div>
      <div class="flex gap-3 flex-1 justify-end">
        <div class="text-xl sm:block hidden
        text-weather-secondary 
        duration-150 cursor-pointer" @click=" toggleModal ">{{$t('New Todo')}}
          <i class="fa-regular fa-square-plus"></i>
        </div>
        <div class="text-xl sm:hidden
        text-weather-secondary 
        duration-150 cursor-pointer" @click=" toggleModal ">
          <i class="fa-regular fa-square-plus "></i>
        </div>
      </div>
      <BaseModal :modalActive=" modalActive " @close-modal=" toggleModal ">
        <h1
          class="mb-8 text-center drop-shadow border-b text-weather-secondary  font-medium text-xl ">
          {{$t('New Todo')}}</h1>
        <form @submit.prevent=" addCity " class=" flex  gap-4 flex-col relative">
          <input type="text"  :placeholder="$t('I need to ...')" v-model=" newTask "
            class=" border-2 border-zinc-200 px-2 py-1.5 rounded ">
          <button class="text-white bg-green-700 max-w-[100px] px-4 self-end ">
            {{$t('Add')}}
          </button>
        </form>
      </BaseModal>
    </nav>
  </header>
</template>

<script setup>
import { uid } from "uid"
import { ref } from "vue"
import BaseModal from "./BaseModal.vue"
const newTask = ref( '' )
const addCity = async () => {


  //  localStorage
  // const savedCities = ref( [] )
  // if ( localStorage.getItem( "savedCities" ) ) {
  //   savedCities.value = JSON.parse(
  //     localStorage.getItem( "savedCities" )
  //   )
  // }
  const cityObj = {
    id: uid(),
    title: newTask.value,
  }
  // savedCities.value.push( taskObj )
  // localStorage.setItem(
  //   "savedCities",
  //   JSON.stringify( savedCities.value )
  // )
  const res = await fetch( 'http://localhost:3000/tasks', {
    method: 'POST',
    body: JSON.stringify( cityObj ),
    headers: { 'Content-Type': 'application/json' }
  } )
  if ( res.error ) {
    console.log( res.error )
  }
  modalActive.value = !modalActive.value
  location.reload()
}
const modalActive = ref( null )
const toggleModal = () => {
  modalActive.value = !modalActive.value
}
function ar () {
  localStorage.setItem( 'lang', 'ar' )
  location.reload()

}
function en () {
  localStorage.setItem( 'lang', 'en' )
  location.reload()

}
</script>
