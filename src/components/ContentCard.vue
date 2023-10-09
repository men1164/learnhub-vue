<script setup lang="ts">
import { ContentDTO } from '../types/dto'

defineProps<{ content: ContentDTO }>()
</script>

<template lang="">
  <div class="flex flex-col bg-gray-100 rounded-xl shadow-lg overflow-hidden">
    <img :src="content.thumbnailUrl" class="w-full aspect-video object-cover" />
    <div class="flex flex-col gap-4 p-4 justify-between h-full">
      <div class="flex flex-col gap-2">
        <p class="font-semibold text-md text-gray-500">
          {{ content.videoTitle }}
        </p>
        <p class="text-gray-500">{{ content.creatorName }}</p>
        <p class="text-gray-500 italic">{{ content.comment }}</p>
      </div>
      <p class="text-md text-gray-500">{{ content.postedBy.name }}</p>
    </div>
  </div>
</template>
