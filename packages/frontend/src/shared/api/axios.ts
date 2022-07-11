import axios from 'axios'

import { BASE_URL } from '@shared/config'

if (BASE_URL == null) {
  throw new Error('env BASE_URL is undefined')
}

axios.defaults.baseURL = BASE_URL

export default axios
