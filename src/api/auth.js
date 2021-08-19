import { GetAxios } from '@/utils/request'
import router from '../router'
router.beforeEach((to, from, next) => {
  // 全局前置守卫
  if (to.path === '/about' || to.path === '/register') {
    next()
  } else {
    // 验证token
    if (localStorage.getItem('manage-token') !== null) {
      next()
    } else {
      next({
        path: '/about'
      })
    }
  }
})
export const axios = GetAxios((config) => {
  // 在发送请求之前做些什么
  config.headers['device-type'] = 'web'
  config.headers['manage-token'] = localStorage.getItem('manage-token')
  return config
}, process.env.VUE_APP_URL, response => {
  if (response.status === 200) {
    if (response.headers['content-type'].indexOf('application/json') !== -1) {
      if (response.data.code === 10000) {
        // 登录失败 跳转到登陆页面
        // 跳转到登录页
        router.push({ path: 'about' })
      } else {
        return response.data
      }
    } else {
      // 文件流
    }
  }
  return response.data
})
