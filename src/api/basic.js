import { axios } from './auth'

// 项目列表
export const login = (params) => {
  return axios({
    url: '/login',
    method: 'post',
    data: params
  })
}
