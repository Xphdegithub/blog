<template>
  <div 
    class="icon--wraper"
    :style="iconSizeWithStyle"  
  >
      <i :class="iconNameWithClass"></i>
  </div>
</template>

<script>
import IconMap from './IconMap';
export default {
  props: {
    iconName: {
      type: String,
      required: true,
    },
    iconSize: {
      type: Number,
      default: 12,
    },
    iconColor: {
      type: String,
      default: '#000',
    }
  },
  computed: {
    iconNameWithClass() {
      if(!IconMap[this.iconName]) {
        return '';
      }
      return `${IconMap[this.iconName].type} ${IconMap[this.iconName].name}`
    },
    iconSizeWithStyle() {
      return {
        width: `${this.iconSize}px`,
        height: `${this.iconSize}px`,
        fontSize: `${this.iconSize}px`,
        color: `${this.iconColor}`
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .icon--wraper {
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      font-size: inherit;
    }
  }
</style>