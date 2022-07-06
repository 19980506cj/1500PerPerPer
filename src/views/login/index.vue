<template>
  <div class="page-container">
    <div class="img_box">
      <div class="page-bottom">
        <input v-model="phoneValue"
               @input="handleInput(1)"
               type="number"
               @blur="animate()"
               placeholder="请输入手机号"
               max="11">

        <!-- <button></button> -->
      </div>
    </div>
  </div>
</template>

<script>
import { Field } from 'vant';
export default {
  name: 'Login',
  data () {
    return {
      phoneValue: ""
    }
  },
  methods: {
    animate () {
      var re = /^1\d{10}$/;
      let str = this.phoneValue;
      if (re.test(str)) {
        alert('成功')
      } else {
        alert('抱歉手机号不合法')
      }
    }
  }
}
</script>

<style style="less" scoped>
.page-container {
  width: 100%;
  height: 100%;
}
.img_box {
  width: 100%;
  height: 100%;
  background-image: url('~@/assets/login_bg.png');
  background-size: cover;
  position: absolute;
  z-index: -1;
  background-repeat: no-repeat;
}
.page-bottom {
  width: 100%;
  position: absolute;
  bottom: 50px;
}
</style>
