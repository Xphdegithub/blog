<template>
  <div class="header--wraper" :class="{'scroll--after': isScroll}" ref="header">
    <div class="header-log--wraper">
      总有人间一两风，填我十万八千梦
    </div>
    <div class="header-options--wraper">
      <div class="switch-model--wraper">
        <IconComp
          iconName='moon'
          :iconSize='20'
        />
      </div>
      <div class="search--wraper">
        <IconComp
          iconName='search'
        />
        <input type="text" name="" id="" ref="search"/>
      </div>
      <ul class="header-nav--wraper">
        <li class="nav-item--wraper nav-item--active">首页</li>
        <li class="nav-item--wraper">标签</li>
        <li class="nav-item--wraper">笔记</li>
        <li class="nav-item--wraper">生活</li>
        <li class="nav-item--wraper">关于我</li>
      </ul>
    </div>
  </div>
</template>

<script>
import IconComp from '@/components/IconComp'
export default {
  components: {
    IconComp,
  },
  props: {
    isScroll: {
      type: Boolean,
      default: true,
    }
  },
  methods: {
    changeStyle(styleArr) {
      console.log(styleArr);
      if(!Array.isArray(styleArr)) {
        return;
      }
      styleArr.forEach(item => {
        this.$refs["header"].style[item.styleName] = item.styleVal;
        if(item.styleName === 'color') {
          this.$refs["search"].style["border"] = `1px solid ${item.styleVal}`;
        }
      });
    }
  },
  mounted() {
    this.$bus.$on('changeHeaderStyle', this.changeStyle);
    // this.changeStyle()
  }
};
</script>

<style lang="less" scoped>
@import url("~@/assets/less/layout.less");
.header--wraper {
  width: 100%;
  height: 60px;
  .center--flex();
  justify-content: space-between;
  background: transparent;
  .header-log--wraper {
    width: 500px;
    height: 100%;
    font-size: 20px;
    font-weight: bolder;
    .center--flex();
  }
  .header-options--wraper {
    width: auto;
    height: 100%;
    .center--flex();
    justify-content: flex-end;
    box-sizing: border-box;
      padding: 0 20px;
    .switch-model--wraper {
      margin-right: 15px;
    }
    .search--wraper {
      width: 160px;
      height: 100%;
      .center--flex();
      position: relative;
      .icon--wraper {
        .center-position--vertical();
        left: 10px;
      }
      input {
        width: 100%;
        height: 32px;
        border-radius: 16px;
        border: none;
        box-sizing: border-box;
        padding: 0 10px 0 30px;
        outline: none;
      }
    }
    .header-nav--wraper {
      .center--flex();
      justify-content: flex-start;
      .nav-item--wraper {
        padding: 0 10px;
        position: relative;
        cursor: pointer;
        &::after {
          content: '';
          display: none;
          width: calc(100% - 20px);
          height: 3px;
          background: #46bd87;
          .center-positon();
          top: 25px;
        }
        &.nav-item--active::after {
          display: block;
        }
      }
    }
  }
  &.scroll--after {
    color: #000;
    background: #fff;
  }
}
</style>
