import axios from 'axios'

import { BASE_URL } from '@shared/config'

if (BASE_URL === undefined) {
  throw new Error('Переменная BASE_URL незадана')
}

axios.defaults.baseURL = BASE_URL

export default axios
