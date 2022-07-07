<template>
  <view>
    <van-popup v-model:show="show"
               :close-on-click-overlay="false"
               close-icon="close"
               round
               :style="{backgroundColor:'rgba(0,0,0,0)'}"
               teleport="body">
      <div :style="{width:fullWidth+'px',height:fullHeight+'px'}">
        <div class="img_box">
          <div :style="{marginTop:'110px',textAlign:'center'}">
            <p>健身房打卡成功</p>
            <p>房价上涨</p>
            <div>200</div>
            <button class="modal-button"
                    @click="closePopup">我知道啦</button>
          </div>
          <!-- <div class='button-container'>
            <button class="modal-button"
                    @click="closePopup">我知道啦</button>
          </div> -->
        </div>
      </div>
    </van-popup>
  </view>
</template>

<script>
import { Popup } from 'vant';
import { Button } from 'vant';
import { Cascader } from 'vant';

export default {
  name: 'Popup',
  components: {
    vanPopup: Popup,
    vanButton: Button,
    vanCascader: Cascader
  },
  data () {
    return {
      show: true,
      imgUrl: '~@/assets/CommonShow.png',
      fullWidth: 330,
      fullHeight: 447
      // fullWidth: document.documentElement.clientWidth,
      // fullHeight: document.documentElement.clientHeight
    }
  },
  created () {
    let img = new Image()
    img.src = this.imgUrl
    img.onload = () => {
      console.log("img:", img.width, img.height)
      // resolve(
      //   console.log("img:", img.width, img.height)
      //   // this.fullWidth = img.width
      //   // this.fullHeight = img.height
      // )
    }
    console.log(this.fullWidth, this.fullHeight)
    // window.addEventListener('resize', this.handleResize)
  },
  // beforeDestroy: function () {
  //   window.removeEventListener('resize', this.handleResize)
  // },
  methods: {
    handleResize (event) {
      this.fullWidth = document.documentElement.clientWidth
    },
    showPopup () {
      console.log("showPopup", this.show)
      this.show = true;
    },
    closePopup () {
      console.log("closePopup", this.show)
      this.show = false;
    }
  }

}
</script>

<style>
.img_box {
  width: 100%;
  height: 100%;
  background-image: url('~@/assets/CommonShow.png');
  /* background-image: url(imageUrl); */
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  /* z-index: -1; */
}
.button-container {
  /* position: absolute;
  top: 80%; */
  text-align: center;
}
.modal-button {
  display: block;
  margin: 0 auto;
  background: linear-gradient(45deg, #97b6e2, #8ce8fa);
  border-radius: 20px;
  border: 0px;
  /* width: 80%; */
  padding: 5px 20px;
}
</style>
