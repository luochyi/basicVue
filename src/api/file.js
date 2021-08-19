export const imagePath = process.env.VUE_APP_URL + '/file/image'
export const filePath = process.env.VUE_APP_URL + '/file/file'
export const cdnImage = (imagePath) => { return imagePath === '' ? '' : process.env.VUE_APP_CDN + imagePath }
export const upHeaders = () => {
  return {
    'device-type': 'web',
    'manage-token': localStorage.getItem('manage-token')
  }
}
