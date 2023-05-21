import api from '@/api'
import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'AppStore',
  state: () => ({}),
  getters: {},
  actions: {
    createUser(userData: { email: string; password: string }) {
      return api.authenticateUser(userData.email, userData.password).then((data) => {
        localStorage.setItem('uid', data.uid)
      })
    }
  }
})
