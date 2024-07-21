import axios from 'axios'

axios.interceptors.request.use((config) => {
  if (config && config.headers) {
    config.baseURL = import.meta.env.VITE_API_BASE_URL
  }
  return config
})

axios.interceptors.response.use(undefined, async (error) => {
  if (!axios.isCancel(error) && [401].includes(error?.response?.status)) {
    window.location.reload()
  }
  return Promise.reject(error)
})
