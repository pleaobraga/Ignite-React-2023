import axios, { AxiosInstance } from 'axios'

// Create a new instance of Axios
export const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json', // Set the default content type
  },
})
