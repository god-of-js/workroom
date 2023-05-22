import api from '@/api'
import Event from '@/types/Event'
import { defineStore } from 'pinia'
interface AppState {
  events: Event[]
}
export const useAppStore = defineStore({
  id: 'AppStore',
  state: (): AppState => ({
    events: []
  }),
  actions: {
    createUser(userData: { email: string; password: string }) {
      return api.authenticateUser(userData.email, userData.password).then((data) => {
        localStorage.setItem('uid', data.uid)
      })
    },
    createEvent(event: Event) {
      return api.createEvent(event).then(() => {
        this.events.push(event)
      })
    },
    getEvents() {
      return api.getEvents().then((data) => {
        this.events = data
      })
    }
  }
})
