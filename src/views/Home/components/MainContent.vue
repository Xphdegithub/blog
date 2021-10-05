<template>
  <div class="main-content--wraper">
    <div class="content-left--wraper">
      <template v-for="item in articleList">
        <ArticleItem :article-data="item" :key="item.id" />
      </template>
    </div>
    <div class="content-right--wraper">
      <div class="base-info--wraper">
        <Avatar :size="80" />
        <span class="user-name">还有亿点点就写完了</span>
        <p class="article-info--wraper">
          <span class="info--title">文章</span>
          <span class="info--title">标签</span>
          <span class="info--number">666</span>
          <span class="info--number">666</span>
          <button class="btn-add-bookmark">加入书签</button>
        </p>
        <div class="contact--wraper">
          <IconComp icon-name="github" :icon-size='20' />
          <IconComp icon-name="qq" :icon-size='20' />
          <IconComp icon-name="weixin" :icon-size='20' />
        </div>
      </div>
      <div class="banner--wraper">
        <Banner :banner-data='[]'/>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticleList } from "@/services";

import ArticleItem from "@/components/Article/ArticleItem.vue";
import Avatar from "@/components/Avatar";
import IconComp from "../../../components/IconComp";
import Banner from "./Banner.vue";

export default {
  components: {
    ArticleItem,
    Avatar,
    IconComp,
    Banner,
  },
  data() {
    return {
      articleList: [],
    };
  },
  async created() {
    const { data } = await getArticleList();
    if (data.msg === "success") {
      this.articleList = data.data;
      // console.log(this.articleList);
    }
  },
};
</script>

<style lang="less" scoped>
@import "~@/assets/less/layout.less";
.main-content--wraper {
  width: 100%;
  height: auto;
  .center--flex();
  justify-content: space-between;
  align-items: flex-start;
  .content-left--wraper {
    flex: 1;
    height: auto;
  }
  .content-right--wraper {
    width: 250px;
    min-height: 500px;
    margin-left: 15px;
    border-radius: 6px;
    .center--flex(column);
    justify-content: flex-start;

    .base-info--wraper {
      width: 100%;
      border-radius: 6px;
      background: #fff;
      margin-bottom: 15px;
      padding: 10px 0;
      .center--flex(column);
      .user-name {
        font-size: 16px;
        margin-top: 15px;
        font-weight: bolder;
      }
      .article-info--wraper {
        .center--flex();
        width: 100%;
        flex-wrap: wrap;

        .info--title,
        .info--number {
          font-size: 14px;
          margin-top: 10px;
          width: 50%;
          text-align: center;
        }
        .btn-add-bookmark {
          width: 90%;
          height: 40px;
          color: #fff;
          background: #333333;
          cursor: pointer;
          margin-top: 10px;
          border: none;
          outline: none;
          border-radius: 4px;
          &:hover {
            background: #3eaf7c;
          }
        }
      }
      .contact--wraper {
        width: 100%;
        height: 60px;
        box-sizing: border-box;
        padding: 16px 24px;
        .center--flex();
        justify-content: space-around;
        /deep/.icon--wraper {
          cursor: pointer;
          i:hover {
              color: #3eaf7c !important;
          }
        }
      }
    }
    .banner--wraper {
      width: 100%;
      height: 300px;
      background: #fff;
      border-radius: 6px;
    }
  }
}
</style>
