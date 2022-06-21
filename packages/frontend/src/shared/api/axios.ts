import axios from 'axios'

import { BASE_URL } from '@shared/config'

axios.defaults.baseURL = BASE_URL ?? ''

export default axios
