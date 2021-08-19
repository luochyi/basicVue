import axios from 'axios'
export const GetAxios = (config, baseUrl, toResponse) => {
  const instance = axios.create({
    headers: {
      'content-type': 'application/json'
    }
  })

  instance.defaults.baseURL = baseUrl
  instance.defaults.withCredentials = true

  // 添加请求拦截器
  instance.interceptors.request.use(config, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  })

  // 添加响应拦截器
  instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    // console.log(response)
    return toResponse(response)
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  })
  return instance
}
