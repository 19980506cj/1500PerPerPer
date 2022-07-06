<template>
   <div class="register" :style="{width: fullWidth+'px', height:fullHeight+'px'}">
    <div class="img_box" :style="{width: fullWidth+'px'}">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
    //保存数据，实现动态渲染
    //注意：这里没有带‘px’单位，在上面添加动态样式时，需要加上px单位！！！
      fullWidth: document.documentElement.clientWidth,
      fullHeight: document.documentElement.clientHeight

    }
  },
  methods: {
  //定义数据获取方法
    handleResize () {
      this.fullWidth = document.documentElement.clientWidth
      this.fullHeight = document.documentElement.clientHeight
    }
  },
  created () {
    window.addEventListener('resize', this.handleResize)
  },
  beforeUnmount () {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style style="less" scoped>
.register {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}
  .img_box {
    position:absolute;
    background-image:url("~@/assets/login_bg.png");
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center center;
    width:100%;
    height:100%;
  }
</style>
