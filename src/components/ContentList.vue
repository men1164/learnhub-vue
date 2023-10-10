<script setup lang="ts">
import { ContentsDTO } from '../types/dto'
import ContentCard from './ContentCard.vue'

interface IContentListProps {
  contents: ContentsDTO
}

defineProps<IContentListProps>()
</script>

<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-stretch justify-stretch my-9 h-auto"
  >
    <ContentCard
      v-for="content in contents.data"
      :key="content.id"
      :content="content"
    />
  </div>
</template>
