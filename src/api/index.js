/*
 * 接口统一集成模块
 */
import * as file from './file'
import * as basic from './basic'

// 默认全部导出
export const api = {
  basic,
  file
}
