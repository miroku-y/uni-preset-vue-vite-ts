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