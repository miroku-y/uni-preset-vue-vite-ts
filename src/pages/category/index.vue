<!--
 * @Author: miroku.yang
 * @Date: 2024-07-06 17:41:20
 * @LastEditors: Please set LastEditors
 * @Description: 
-->
<template>
  <view class="viewport" v-if="isFinish">
    <!-- 搜索框 -->
    <view class="search">
      <view class="input">
        <text class="icon-search">女靴</text>
      </view>
    </view>
    <!-- 左侧一级分类 -->
    <view class="categories">
      <scroll-view scroll-y class="primary">
        <view
          v-for="(item, index) in categoryList"
          :key="item.id"
          class="item"
          :class="{ active: index == activeIndex }"
          @tap="activeIndex = index"
        >
          <text class="name">
            {{ item.name }}
          </text>
        </view>
      </scroll-view>
      <!-- 右侧二级分类 -->
      <scroll-view scroll-y class="secondary">
        <!-- 焦点图 -->
        <XtxSwiper :list="bannerList"></XtxSwiper>
        <!-- 内容区域 -->
        <view class="panel" v-for="item in subCategoryList" :key="item.id">
          <view class="title">
            <text class="name">{{ item.name }}</text>
            <navigator>全部</navigator>
          </view>
          <view class="section">
            <navigator
              v-for="goods in item.goods"
              :key="goods.id"
              class="goods"
            >
              <image :src="goods.picture" class="image"></image>
              <view class="goodsName">{{ goods.name }}</view>
              <view class="price">
                <text class="symbol">¥</text>
                <text class="number">{{ goods.price }}</text>
              </view>
            </navigator>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
  <view v-else>加载中</view>
</template>

<script setup lang="ts">
import { onLoad } from "@dcloudio/uni-app";
import { computed, ref } from "vue";
import { getCategoryTopAPI } from "@/services/category";
import { getHomeBannerAPI } from "@/services/home";
import type { BannerItem } from "@/types/home";
import type { CategoryTopItem } from "@/types/category";

// 获取轮播数据
const bannerList = ref<BannerItem[]>([]);
const getBannerData = async () => {
  const res = await getHomeBannerAPI(2);
  bannerList.value = res.result;
};

// 获取分类数据
const categoryList = ref<CategoryTopItem[]>([]);
const activeIndex = ref(0);
const getCategoryTopData = async () => {
  const res = await getCategoryTopAPI();
  console.log("执行加载", res);
  categoryList.value = res.result;
};

// 是否加载完毕
const isFinish = ref(false);
// 页面加载
onLoad(async () => {
  await Promise.all([getCategoryTopData(), getBannerData()]);
  isFinish.value = true;
});

// 提前当前二级分类数据
const subCategoryList = computed(() => {
  return categoryList.value[activeIndex.value]?.children || [];
});
</script>

<style lang="scss">
@import "./styles/category.scss";
</style>
