<template>
  <main class="container text-white">
    <div class="flex flex-col gap-4">
      <Suspense>
        <CityList />
        <template #fallback>
          <CityCardSkeleton />
        </template>
      </Suspense>
    </div>
  </main>
</template>

<script setup>
import CityCardSkeleton from "../components/CityCardSkeleton.vue"
import CityList from "../components/CityList.vue"

</script>

<style lang="scss" scoped></style>
