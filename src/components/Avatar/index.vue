<template>
  <div class="avatar--wraper" :style="avaterSty">
    <img src="../../assets/img/banner1.jpg" alt="">
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 20
    }
  },
  computed: {
    avaterSty() {
      return {
        width: `${this.size}px`,
        height: `${this.size}px`,
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import url("~@/assets/less/layout.less");
  .avatar--wraper {
    position: relative;
    border-radius: 50%;
    margin-right: 15px;
    overflow: hidden;
    img {
      .center-positon();
      width: 100%;
      height: 100%;
    }
  }
</style>