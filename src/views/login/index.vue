<template>
  <div class="page-container">
    <div class="img_box">
      <div class="page-bottom">
        111
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
    }
  },
  methods: {
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
