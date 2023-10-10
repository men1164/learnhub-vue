<script setup lang="ts">
import { ref } from 'vue'
import useAuthStore from '../stores/useAuthStore'
import router from '../router'
import { useToast } from 'vue-toastification'

const store = useAuthStore()
const username = ref<string>('')
const password = ref<string>('')
const toast = useToast()

const handleSubmit = async (e: Event) => {
  e.preventDefault()
  try {
    await store.login({ username: username.value, password: password.value })

    toast.success('Login Sucessful!')
    router.push('/')
  } catch (err) {
    if (err instanceof Error) toast.error(err.message)
  }
}
</script>

<template>
  <form
    class="flex flex-col gap-6 max-w-xs bg-gray-100 rounded-xl mx-auto my-14 py-5 px-7"
    @submit="handleSubmit"
  >
    <div class="flex flex-col gap-2">
      <label>Username</label>
      <input v-model="username" class="p-3 rounded" type="text" required />
    </div>
    <div class="flex flex-col gap-2">
      <label>Password</label>
      <input v-model="password" class="p-3 rounded" type="password" required />
    </div>
    <button class="bg-orange-500 p-3 rounded-lg text-white hover:bg-orange-600">
      Login
    </button>
  </form>
</template>
