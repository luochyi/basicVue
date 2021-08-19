<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  // mounted () {
  //   // 关闭浏览器窗口的时候清空浏览器缓存在localStorage的数据
  //   window.onbeforeunload = function (e) {
  //     var storage = window.localStorage
  //     storage.clear()
  //   }
  // }
}
</script>

<style >
#app{
  height: 100%;
}
*{
  margin: 0px;
  padding: 0px;
}
html,body{
  margin: 0px;
  height: 100%;
}
</style>
