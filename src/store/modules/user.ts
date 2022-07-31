import { defineStore } from "pinia"
import { ref } from "vue"

import * as Api from '@/api/user'
import { UserInfo } from "@/types"
import { TOKEN } from "@/constants"

const initialUserInfo = () => ({
  username: '',
  token: '',
  telephone: '',
  place: '',
  avatar: '',
  githubAddress: '',
  roles: []
})

const useStore = defineStore('user', () => {

  const userInfo = ref<UserInfo>(initialUserInfo())
  const token = ref(localStorage.getItem(TOKEN) || '')

  const login = (userInfo: Api.LoginData) => {
    return new Promise((resolve, reject) => {
      Api.login(userInfo).then(({ data }) => {
        token.value = data.token
        localStorage.setItem(TOKEN, data.token)
        resolve(true)
      }).catch(error => {
        reject(error)
      })
    })
  }

  const getUserInfo = (): Promise<UserInfo> => {
    return new Promise((resolve, reject) => {
      Api.getInfo(token.value).then(({ data }) => {
        userInfo.value = data
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  }

  const logout = () => {
    return new Promise((resolve, reject) => {
      Api.logout().then(() => {
        reset()
        resolve(true)
      }).catch(error => {
        reject(error)
      })
    })
  }

  const reset = () => {
    localStorage.setItem(TOKEN, '')
    // 快速清除 pinia 的数据缓存
    location.reload()
  }

  return {
    token,
    userInfo,
    login,
    getUserInfo,
    logout,
    reset
  }
})

export default useStore
