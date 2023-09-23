<template>
  <div dir="rtl" v-if=" lang === 'ar' "
    class="flex flex-col min-h-screen font-Roboto bg-weather-primary ">
    <SiteNavigation />
    <HomeView />
  </div>
  <div class="flex flex-col min-h-screen font-Roboto bg-weather-primary " v-if=" lang === 'en' ">
    <SiteNavigation />
    <HomeView />
  </div>
</template>

<script setup>

import SiteNavigation from "./components/SiteNavigation.vue"
import HomeView from "./views/HomeView.vue"

const lang = localStorage.getItem( "lang" )
</script>

<style>
.page-enter-active {
  transition: 600ms ease all;
}

.page-enter-from {
  opacity: 0;
}
</style>
