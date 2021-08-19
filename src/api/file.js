export const imagePath = process.env.VUE_APP_URL + '/file/image'// 图片上传拼接路径
export const filePath = process.env.VUE_APP_URL + '/file/file'// 文件上传拼接路径
export const cdnImage = (imagePath) => { return imagePath === '' ? '' : process.env.VUE_APP_CDN + imagePath }
export const upHeaders = () => {
  return {
    'device-type': 'web',
    'manage-token': localStorage.getItem('manage-token')
  }
}
