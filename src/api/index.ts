import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
})

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      // Tempel token ke header Authorization
      config.headers.Authorization = `Bearer ${token}`
    }
    console.log('Token dari LocalStorage:', token)
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Misal: Jika token expired, paksa logout
      localStorage.removeItem('token')
      try {
        // Redirect user to login page
        window.location.href = '/auth/login'
      } catch (e) {
        // noop
      }
    }
    return Promise.reject(error)
  },
)
