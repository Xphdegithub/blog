<template>
  <div class="banner--wraper">
    <div class="banner-text--wraper">
      <div class="avatar"></div>
      <div class="banner-text--container">
        <Avatar :size='80'/>
        <div class="text--wraper">
          <h1>优雅，永不过时！</h1>
          <h2>Elegant and timeless</h2>
        </div>
      </div>
    </div>
    <img src="../../assets/img/banner2.jpg" alt="">
  </div>
</template>

<script>
import Avatar from '@/components/Avatar'
export default {
  components: {
    Avatar,
  }
}
</script>

<style lang="less" scoped>
@import url("~@/assets/less/layout.less");
  .banner--wraper {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    .banner-text--wraper {
      .center-positon();
      color: #fff;
      // font-size: 22px;
      // background-image: linear-gradient(to right bottom, red, #000);
      // -webkit-text-fill-color: transparent;
      // -webkit-background-clip: text;
    }
    .banner-text--container {
      .center--flex();
      justify-content: space-between;
      .text--wraper {
        h1 {
          font-size: 26px;
          margin-bottom: 15px;
        }
        h2 {
          font-size: 20px;
        }

      }
    }
    img {
      width: 100%;
      height: 100%;
      user-select: none;
    }
  }
</style>