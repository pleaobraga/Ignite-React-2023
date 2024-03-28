import { env } from '@/env'
import axios from 'axios'

export const api = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: true,
})

if (env.VITE_ENABLE_API_DELAY) {
  api.interceptors.request.use((config) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(config)
      }, 2000)
    })
  })
}
