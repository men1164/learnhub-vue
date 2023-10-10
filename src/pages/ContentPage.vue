<script setup lang="ts">
import YouTube from 'vue3-youtube'
import useContent from '../composables/useContent'
import useAuthStore from '../stores/useAuthStore'
import router from '../router'
import { ExclamationCircleOutlined } from '@ant-design/icons-vue'
import { createVNode } from 'vue'
import { Modal } from 'ant-design-vue'
import { useToast } from 'vue-toastification'

interface IContentPageProps {
  id: string
}

const props = defineProps<IContentPageProps>()
const store = useAuthStore()
const toast = useToast()

const { content, error, deleteContent } = useContent(props.id)

const showConfirm = () => {
  Modal.confirm({
    title: 'Do you want to delete this content?',
    icon: createVNode(ExclamationCircleOutlined),
    content: 'You cannot undo this action.',
    async onOk() {
      try {
        await deleteContent()

        toast.success('Delete Successful')
        router.push('/')
      } catch (err) {
        if (err instanceof Error) toast.error(err.message)
      }
    },
  })
}
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
    <div
      v-if="content.postedBy.username === store.username"
      class="flex items-center gap-x-12"
    >
      <router-link
        class="text-orange-500 font-semibold"
        :to="{ name: 'Edit', params: { id: content.id } }"
      >
        Edit
      </router-link>
      <button class="text-red-500 font-semibold" @click="showConfirm">
        Delete
      </button>
    </div>
  </div>
  <div v-else-if="error" class="text-center mt-5 text-red-500 font-bold">
    {{ error }}
  </div>
</template>
