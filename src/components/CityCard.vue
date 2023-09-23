<template>
  <div class="flex py-6 px-3 bg-weather-secondary rounded-md shadow-md " >
    <div class="flex flex-col flex-1 overflow-hidden mr-4">
      <h2 class="text-xl">{{ city.title }}</h2>
    </div>
    <div class="flex items-center gap-5 text-lg">
      <i class="fa-regular fa-pen-to-square cursor-pointer hover:scale-110 duration-200" @click="toggleModal"></i>
      <i class="fa-solid fa-trash-can hover:text-red-600 cursor-pointer hover:scale-110 duration-200" @click="deleteHandler( city.id )"></i>
    </div>
  </div>
  <BaseModal :modalActive=" modalActive " @close-modal=" toggleModal ">
    <h1 class="mb-8 text-center drop-shadow border-b text-weather-secondary  font-medium text-xl ">{{$t('Edit Todo')}}</h1>
    <form @submit.prevent=" editHandler(city) " class=" flex  gap-4 flex-col relative">
      <input type="text" name="I need to ... " placeholder="I need to ..." v-model=" city.title " 
        class=" border-2 border-zinc-200 px-2 py-1.5 rounded ">
      <button class="text-white bg-green-700 max-w-[100px] px-4 self-end ">
       {{$t('Edit')}}
      </button>
    </form>
  </BaseModal>
</template>

<script setup>
import BaseModal from './BaseModal.vue'
import { ref } from 'vue'
const modalActive = ref( null )
async function editHandler ( city ) {

  modalActive.value = !modalActive.value
  const res = await fetch( `http://localhost:3000/tasks/${ city.id }`, {
    method: 'PATCH',
    body: JSON.stringify( {
      title: city.title
    } ),
    headers: { 'Content-Type': 'application/json' }
  } )
  if ( res.error ) {
    console.log( res.error )
  }
}
async function deleteHandler ( id ) {
  const res = await fetch( `http://localhost:3000/tasks/${ id }`, {
    method: 'DELETE',
  } )
  if ( res.error ) {
    console.log( res.error )
  }
    location.reload()
}
const props = defineProps( {
  city: {
    type: Object,
    default: () => { },
  },
} )
const toggleModal = () => {
  modalActive.value = !modalActive.value
}
</script>
