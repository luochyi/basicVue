<template>
  <div class="about">
    <h1>{{msg}}</h1>
  </div>
</template>
<script>
import { api } from '@/api'
import { utils } from '@/utils'
export default ({
  data () {
    return {
      msg: ''
    }
  },
  created () {
    // 测试时间转换工具类
    const timeTest = utils.formatDate('1629360995', 'yyyy-MM-dd')
    console.log(timeTest)
    // 测试调用接口
    api.basic.login({ userName: 'admin', pwd: '123456' }).then(res => {
      console.log(res)
    })
  }
})
</script>
