<template>
  <div class="about">
    <h1>{{msg}}</h1>
  </div>
</template>
<script>
import { api } from '@/api'
export default ({
  data () {
    return {
      msg: ''
    }
  },
  created () {
    api.basic.login({ userName: 'admin', password: '123456' }).then(res => {
      console.log(res)
    })
  }
})
</script>
