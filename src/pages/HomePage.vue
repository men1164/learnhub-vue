<script setup lang="ts">
import BannerComp from '../components/BannerComp.vue'
import ContentCard from '../components/ContentCard.vue'
</script>

<template>
  <BannerComp />
  <div class="flex flex-col items-end mx-32 my-9">
    <div
      class="bg-orange-500 p-3 rounded-lg text-white hover:bg-orange-600 text-lg"
    >
      Create New Content
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-stretch justify-stretch my-9 h-auto"
    >
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
    </div>
  </div>
</template>
