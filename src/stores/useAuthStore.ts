import { defineStore } from 'pinia'
import { ref } from 'vue'
import { CredentialDTO, LoginDTO, RegisterDTO } from '../types/dto'
import axios, { AxiosError } from 'axios'

const token = localStorage.getItem('token')
const user = localStorage.getItem('user')

const useAuthStore = defineStore('auth', () => {
  const isLoggedIn = ref<boolean>(!!token)
  const username = ref<string | null>(user)

  const register = async (registerBody: RegisterDTO) => {
    try {
      await axios.post(
        'https://api.learnhub.thanayut.in.th/user',
        registerBody,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
    } catch (err) {
      if (err instanceof AxiosError) throw new Error(err.response?.data.message)
    }
  }

  const login = async (loginBody: LoginDTO) => {
    try {
      const res = await axios.post<CredentialDTO>(
        'https://api.learnhub.thanayut.in.th/auth/login',
        loginBody,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

      isLoggedIn.value = true
      username.value = loginBody.username
      localStorage.setItem('token', res.data.accessToken)
      localStorage.setItem('user', loginBody.username)
    } catch (err) {
      if (err instanceof AxiosError) throw new Error(err.response?.data.message)
    }
  }

  const logout = () => {
    localStorage.clear()
    isLoggedIn.value = false
    username.value = null
  }

  return { isLoggedIn, username, login, logout, register }
})

export default useAuthStore
