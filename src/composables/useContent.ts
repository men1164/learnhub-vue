import { ref } from 'vue'
import { ContentDTO, UpdateContentDTO } from '../types/dto'
import axios, { AxiosError } from 'axios'

const useContent = (id: string) => {
  const content = ref<ContentDTO | null>(null)
  const error = ref<string>('')

  axios
    .get<ContentDTO>(`https://api.learnhub.thanayut.in.th/content/${id}`)
    .then((res) => (content.value = res.data))
    .catch((err) => (error.value = err))

  const editContent = async (updateBody: UpdateContentDTO) => {
    const token = localStorage.getItem('token')

    try {
      await axios.patch(
        `https://api.learnhub.thanayut.in.th/content/${id}`,
        updateBody,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      )
    } catch (err) {
      if (err instanceof AxiosError) throw new Error(err.response?.data.message)
    }
  }

  return { content, error, editContent }
}

export default useContent
