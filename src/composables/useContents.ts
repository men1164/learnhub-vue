import { ref } from 'vue'
import { ContentsDTO } from '../types/dto'
import axios from 'axios'

const useContents = () => {
  const contents = ref<ContentsDTO | null>(null)
  const error = ref<string>('')

  axios
    .get<ContentsDTO>('https://api.learnhub.thanayut.in.th/content')
    .then((res) => (contents.value = res.data))
    .catch((err) => (error.value = err))

  return { contents, error }
}

export default useContents
