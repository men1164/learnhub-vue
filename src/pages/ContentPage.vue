<script setup lang="ts">
import YouTube from 'vue3-youtube'
import useContent from '../composables/useContent'
import useAuthStore from '../stores/useAuthStore'

const props = defineProps<{ id: string }>()
const store = useAuthStore()

const { content, error } = useContent(props.id)
</script>

<template>
  <div v-if="!content">Loading...</div>
  <div
    v-if="content"
    class="flex flex-col justify-center items-center gap-4 text-center mx-auto my-20 max-w-3xl bg-gray-100 shadow-lg p-8 rounded-xl"
  >
    <p class="text-3xl font-bold text-orange-500">
      {{ content.videoTitle }}
    </p>
    <p class="text-xl text-gray-600">{{ content.creatorName }}</p>
    <YouTube :src="content.videoUrl" />
    <p class="text-xl text-gray-600">{{ content.comment }}</p>
    <p class="text-xl text-gray-600">by {{ content.postedBy.name }}</p>
    <p class="text-xl text-gray-600">Rating: {{ content.rating }}</p>
    <router-link
      v-if="content.postedBy.username === store.username"
      class="text-orange-500 font-semibold"
      :to="{ name: 'Edit', params: { id: content.id } }"
    >
      Edit
    </router-link>
  </div>
  <div v-else-if="error" class="text-center mt-5 text-red-500 font-bold">
    {{ error }}
  </div>
</template>
