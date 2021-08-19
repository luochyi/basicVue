import { axios } from './auth'

// 接口
export const login = (params) => {
  return axios({
    url: '/login',
    method: 'post',
    data: params
  })
}
