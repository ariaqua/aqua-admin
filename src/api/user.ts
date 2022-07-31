import { UserInfo } from '@/types/user'
import request from '@/utils/request'
import { AxiosPromise } from 'axios'

export interface LoginData {
  username: string
  password: string
}

export function login(data: LoginData): AxiosPromise<UserInfo> {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token: string): AxiosPromise<UserInfo> {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout'
  })
}
