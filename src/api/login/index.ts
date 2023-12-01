import { defaultRequest } from '/@/utils/http/index'

interface loginState {
  username: string
  password: string
}

export function login(params: loginState) {
  return defaultRequest.request({
    url: '/login',
    method: 'post',
    data: params
  })
}


export function test(params) {
  return defaultRequest.request({
    url: '/open-apis/authen/v1/authorize',
    method: 'get',
    data: params
  })
}
