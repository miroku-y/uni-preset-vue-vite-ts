<!--
 * @Author: miroku.yang
 * @Date: 2024-07-31 16:50:16
 * @LastEditors: Please set LastEditors
 * @Description: 
-->
<script setup lang="ts">
import { ref } from "vue";

const activeIndex = ref(0);

// swiper 下标发生变化时触发
const onChange = (ev: any) => {
  activeIndex.value = ev.detail.current;
};

defineProps<{
  list: any[];
}>();
</script>

<template>
  <view class="carousel">
    <swiper
      :inerval="3000"
      :autoplay="true"
      :circular="true"
      @change="onChange"
    >
      <swiper-item v-for="item in list" :key="item.id">
        <navigator
          url="/pages/index/index"
          hover-class="none"
          class="navigator"
        >
          <image :src="item.imgUrl" class="image" mode="aspectFill"></image>
        </navigator>
      </swiper-item>
    </swiper>
    <!-- 指示点 -->
    <view class="indicator">
      <text
        v-for="(item, index) in list"
        :key="item.id"
        class="dot"
        :class="{ active: index == activeIndex }"
      >
      </text>
    </view>
  </view>
</template>

<style lang="scss">
@import "./styles/XtxSwiper.scss";
</style>
