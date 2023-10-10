<script setup lang="ts">
import { ref } from 'vue'
import useAuthStore from '../stores/useAuthStore'
import router from '../router'
import { useToast } from 'vue-toastification'
import { AxiosError } from 'axios'

const store = useAuthStore()
const toast = useToast()
const usernameInput = ref<string>('')
const nameInput = ref<string>('')
const passwordInput = ref<string>('')

const handleRegister = async (e: Event) => {
  e.preventDefault()

  try {
    await store.register({
      username: usernameInput.value,
      name: nameInput.value,
      password: passwordInput.value,
    })
    await store.login({
      username: usernameInput.value,
      password: passwordInput.value,
    })

    toast.success('Registered and Logged In!')
    router.push('/')
  } catch (err) {
    if (err instanceof AxiosError) toast.error(err.response?.data.message)
  }
}
</script>

<template>
  <form
    class="flex flex-col gap-6 max-w-xs bg-gray-100 rounded-xl mx-auto my-14 py-5 px-7"
    @submit="handleRegister"
  >
    <div class="flex flex-col gap-2">
      <label>Username</label>
      <input v-model="usernameInput" class="p-3 rounded" type="text" required />
    </div>
    <div class="flex flex-col gap-2">
      <label>Name</label>
      <input v-model="nameInput" class="p-3 rounded" type="text" required />
    </div>
    <div class="flex flex-col gap-2">
      <label>Password</label>
      <input
        v-model="passwordInput"
        class="p-3 rounded"
        type="password"
        required
      />
    </div>
    <button class="bg-orange-500 p-3 rounded-lg text-white hover:bg-orange-600">
      Register
    </button>
  </form>
</template>
