<template>
  <div id="layout">
    <BaseMap></BaseMap>
    <div id="front-UI">
      <div class="UI-top">
        <div class="UI-property">
          <img src="@/assets/我的房产.png" />
        </div>
        <div class="UI-property">
          <img src="@/assets/精力值框.png" />
        </div>
      </div>
      <div class="UI-bottom">
        <div class="UI-column">
          <img class="UI-button" src="@/assets/大地图.png" />
          <img class="UI-button" src="@/assets/排行榜.png" />
          <img class="UI-button" src="@/assets/任务.png" />
        </div>
        <div class="UI-column">
          <img class="UI-button" src="@/assets/设置.png" />
          <img class="UI-button" src="@/assets/背包.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseMap from "@/components/BaseMap";
export default {
  name: "Game",
  components: {
    BaseMap,
  },
  methods: {

  },
};
</script>

<style>
#layout {
  overflow: hidden;
  height: 100%;
  width: 100%;
  position: relative;
}
#front-UI {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.UI-top,
.UI-bottom {
  display: flex;
  padding: 0 6%;
  justify-content: space-between;
}

.UI-top {
  padding-top: 13%;
}

.UI-property {
  max-width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: end;
}

.UI-property img,
.UI-column img {
  width: 100%;
}

.UI-column {
  max-width: 23%;
  height: 100%;
}

.UI-column img {
  margin-top: 50%;
}
</style>