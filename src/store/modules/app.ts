import {defineStore} from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    user: uni.getStorageSync('user') || {},
    token: uni.getStorageSync('token') || '',
    loading: false
  }),
  actions: {
    login (payload: any) {
      this.user = payload
      this.token = payload.token
      uni.setStorageSync('user', this.user)
      uni.setStorageSync('token', this.token)
    },
    logout () {
      this.user = {}
      this.token = ''
      uni.removeStorageSync('user')
      uni.removeStorageSync('token')
    }
  }
})
