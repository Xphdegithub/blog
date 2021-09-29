<template>
  <ul class="catalogue--wraper">
    <li class="catalogue-item">1</li>
    <li class="catalogue-item">2</li>
    <li class="catalogue-item">3</li>
    <li class="catalogue-item">4</li>
  </ul>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import '~@/assets/less/layout.less';
.catalogue--wraper {
  width: 300px;
  margin-left: 15px;
  border-radius: 6px;
  box-sizing: border-box;
  padding: 15px;
  min-height: 600px;
  background: blueviolet;
  .center--flex(column);
  justify-content: flex-start;
  .catalogue-item {
    width: 100%;
    height: 35px;
  }
}
</style>