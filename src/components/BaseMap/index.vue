<template>
  <div
    ref="container"
    id="container"
    @touchstart="dragBegin"
    @touchend="dragEnd"
    @touchmove="dragging"
  >
    <div
      :style="{
        transform: `translate(${position.x + center.x}px, 
        ${position.y + center.y}px) 
        scale(${scale})`,
        transformOrigin: `${origin.x}px ${origin.y}px`,
      }"
    >
      <img id="mainload" src="@/assets/MainLoad.png" />
      <img class="building" src="@/assets/LV1.png"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseMap",
  data() {
    return {
      isDragging: false,
      origin: { x: 1912, y: 1165 },
      position: { x: -1912, y: -1165 },
      scale: 0.5,
      center: { x: 0, y: 0 },
      lastTouch: {},
    };
  },
  methods: {
    dragBegin(e) {
      console.log(e);
      this.isDragging = true;
      this.lastTouch = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    },
    dragEnd() {
      this.isDragging = false;
    },
    dragging(e) {
      let curTouch = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      let dx = curTouch.x - this.lastTouch.x;
      let dy = curTouch.y - this.lastTouch.y;
      this.lastTouch = curTouch;
      this.position.x += dx;
      this.position.y += dy;
    },
  },
  mounted() {
    const containerStyle = getComputedStyle(this.$refs.container);
    this.center.x = parseFloat(containerStyle["width"]) / 2;
    this.center.y = parseFloat(containerStyle["height"]) / 2;
  },
};
</script>

<style>
#container {
  overflow: hidden;
  position: absolute;
  background: rgb(35, 205, 227);
  height: 100%;
  width: 100%;
}
#mainload {
  height: 2160px;
  width: 3840px;
  position: absolute;
}
.building{
    position: absolute;
}
</style>