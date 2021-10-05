<template>
  <div class="banner--container">
    <ul class="banner-bar--wraper banner-bar--vertical">
      <li class="banner-bar--item"></li>
      <li class="banner-bar--item"></li>
    </ul>
    <ul
      class="banner-item--wraper"
      ref="banner-content"
      @transitionend="continueScroll"
    >
      <li class="banner-item">
        <div class="text-wraper">
          <p class="title">得成比目何辞死</p>
          <p class="sub-title">只羡鸳鸯不羡仙</p>
        </div>
        <img src="../../../assets/img/banner1.jpg" alt="" />
      </li>
      <li class="banner-item">
        <div class="text-wraper">
          <p class="title">得成比目何辞死</p>
          <p class="sub-title">只羡鸳鸯不羡仙</p>
        </div>
        <img src="../../../assets/img/banner1.jpg" alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    bannerData: {
      type: Array,
      required: true,
      default: [],
    },
  },
  data() {
    return {
      timer: null,
    };
  },
  mounted() {
    this.startScroll(this.$refs["banner-content"]);
  },
  beforeDestroy() {
    clearTimeout(this.timer);
  },
  methods: {
    startScroll(bannerRef) {
      const bannerMaxHeight = bannerRef.scrollHeight;
      const bannerItemHeight = bannerRef.offsetHeight;
      let bannerScrollHeight =
        Math.abs(parseInt(bannerRef.style.marginTop)) || 0;
      let nextScrollHeight = bannerScrollHeight + bannerItemHeight;
      if (nextScrollHeight >= bannerMaxHeight) {
        bannerRef.style.marginTop = `0px`;
      } else {
        bannerRef.style.marginTop = `-${nextScrollHeight}px`;
      }
      console.log(bannerMaxHeight, bannerItemHeight, nextScrollHeight);
    },
    continueScroll() {
      this.timer = setTimeout(() => {
        this.startScroll(this.$refs["banner-content"]);
      }, 1000);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/assets/less/layout.less";
.banner--container {
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  .banner-bar--wraper {
    position: absolute;
    width: 30px;
    z-index: 999;
    .center--flex(column);
    // background: red;
    // 目前只用到了垂直的Banner，故没加水平的，日后用到水平的后再进行完善
    &.banner-bar--vertical {
      right: 0;
      top: 0;
      bottom: 0;
      .banner-bar--item {
        width: 2px;
        height: 25px;
        margin-bottom: 5px;
        background: #fff;
        &:nth-last-of-type(1) {
          margin-bottom: 0;
        }
      }
    }
    &.banner-bar--horizontal {
    }
  }
  .banner-item--wraper {
    width: 100%;
    height: 100%;
    transition: all 1s linear;
    .banner-item {
      width: 100%;
      height: 100%;
      position: relative;
      .text-wraper {
        position: absolute;
        color: #fff;
        z-index: 999;
        width: 100%;
        bottom: 0;
        padding: 25px 15px;
        .center--flex(column);
        align-items: flex-start;
        .title {
          font-size: 20px;
        }
        .sub-title {
          margin-top: 15px;
          font-size: 14px;
        }
      }
      img {
        // width: 100%;
        height: 100%;
        .center-positon();
      }
    }
  }
}
</style>
