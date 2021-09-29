// 水平布局
<template>
  <div class="layout-horizontal--wraper">
    <div class="layout-left--wraper">
      <slot name="left"></slot>
    </div>
    <div class="layout-main--wraper">
      <slot name="main"></slot>
    </div>
    <div class="layout-right--wraper">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showLeft: {
      type: Boolean,
      default: true,
    },
    mainLeft: {
      type: Boolean,
      default: true,
    },
    rightLeft: {
      type: Boolean,
      default: true,
    },
  }
};
</script>

<style lang="less" scoped>
@import '~@/assets/less/layout.less';
.layout-horizontal--wraper {
  width: 100%;
  .center--flex();
  justify-content: space-between;
  align-items: flex-start;
  .layout-left--wraper {

  }
  .layout-main--wraper {
    flex: 1;
  }
  .layout-right--wraper {

  }
}
</style>