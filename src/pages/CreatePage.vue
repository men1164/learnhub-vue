<script setup lang="ts">
import { ref } from 'vue'
import useContents from '../composables/useContents'
import { useToast } from 'vue-toastification'
import router from '../router'

const { createContent } = useContents()
const url = ref<string>('')
const comment = ref<string>('')
const rating = ref<number>(0)
const toast = useToast()

const handleSubmit = async (e: Event) => {
  e.preventDefault()

  try {
    await createContent({
      videoUrl: url.value,
      comment: comment.value,
      rating: rating.value,
    })

    toast.success('Content Created!')
    router.push('/')
  } catch (err) {
    if (err instanceof Error) toast.error(err.message)
  }
}
</script>

<template>
  <form
    class="flex flex-col gap-6 max-w-lg bg-gray-100 rounded-xl mx-auto my-14 py-5 px-7"
    @submit="handleSubmit"
  >
    <div class="flex flex-col gap-2">
      <label>Video Url:</label>
      <input v-model="url" class="p-3 rounded" type="text" required />
    </div>
    <div class="flex flex-col gap-2">
      <label>Comment:</label>
      <input v-model="comment" class="p-3 rounded" type="text" required />
    </div>
    <div class="flex items-center gap-2">
      <label>Rating:</label>
      <input
        v-model="rating"
        type="number"
        class="p-3 rounded"
        min="0"
        max="5"
      />
    </div>
    <button class="bg-orange-500 p-3 rounded-lg text-white hover:bg-orange-600">
      Submit
    </button>
  </form>
</template>
