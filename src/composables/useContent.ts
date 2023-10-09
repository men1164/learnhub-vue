import { ref } from 'vue'
import { ContentDTO } from '../types/dto'
import axios from 'axios'

const useContent = (id: string) => {
  const content = ref<ContentDTO | null>(null)
  const error = ref<string>('')

  axios
    .get<ContentDTO>(`https://api.learnhub.thanayut.in.th/content/${id}`)
    .then((res) => (content.value = res.data))
    .catch((err) => (error.value = err))

  return { content, error }
}

export default useContent
