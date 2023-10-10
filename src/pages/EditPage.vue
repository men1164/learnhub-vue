<script setup lang="ts">
import { ref, watch } from 'vue'
import useContent from '../composables/useContent'
import { useToast } from 'vue-toastification'
import router from '../router'

interface IEditPageProps {
  id: string
}

const props = defineProps<IEditPageProps>()

const { content, editContent } = useContent(props.id)
const toast = useToast()
const comment = ref<string>('')
const rating = ref<number>(0)

// * To pre-filled comment and stars with the original data
watch(content, () => {
  if (content.value) {
    comment.value = content.value.comment
    rating.value = content.value.rating
  }
})

const handleSubmit = async (e: Event) => {
  e.preventDefault()

  try {
    await editContent({ comment: comment.value, rating: rating.value })

    toast.success('Edit Succesful!')
    router.push('/')
  } catch (err) {
    if (err instanceof Error) toast.error(err.message)
  }
}
</script>

<template>
  <div v-if="!content">Loading...</div>
  <form
    v-if="content"
    class="flex flex-col gap-6 max-w-lg bg-gray-100 rounded-xl mx-auto my-14 py-5 px-7"
    @submit="handleSubmit"
  >
    <h1 class="font-bold text-3xl text-orange-500 text-center">Edit</h1>
    <div class="flex flex-col gap-2">
      <label>Comment:</label>
      <input v-model="comment" class="p-3 rounded" type="text" required />
    </div>
    <div class="flex items-center gap-2">
      <label>Rating:</label>
      <input
        v-model="rating"
        class="p-3 rounded"
        type="number"
        required
        min="0"
        max="5"
      />
    </div>
    <button class="bg-orange-500 p-3 rounded-lg text-white hover:bg-orange-600">
      Edit
    </button>
  </form>
</template>
