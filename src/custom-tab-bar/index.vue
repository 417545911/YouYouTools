<template>
  <view class="tab-bar">
    <view class="tab-bar-border"></view>
    <view
      v-for="(item, index) in list"
      :key="index"
      class="tab-bar-item"
      @tap="switchTab(index, item.pagePath)"
    >
      <image
        class="tab-image"
        :src="tabStore.currentTab === index ? item.selectedIconPath : item.iconPath"
      />
      <view
        class="tab-text"
        :style="{ color: tabStore.currentTab === index ? selectedColor : color }"
        >{{ item.text }}</view
      >
    </view>
  </view>
</template>

<script setup lang="ts">
import Taro from "@tarojs/taro";
import { useTabBarStore } from "@/stores/tabbar";

const tabStore = useTabBarStore();

const color = "#000000";
const selectedColor = "#DC143C";
const list = [
  {
    pagePath: "/pages/home/index",
    selectedIconPath: "/assets/tabbar/home_active.png",
    iconPath: "/assets/tabbar/home.png",
    text: "首页",
  },
  {
    pagePath: "/pages/more/index",
    selectedIconPath: "/assets/tabbar/more_active.png",
    iconPath: "/assets/tabbar/more.png",
    text: "更多",
  },
];

function switchTab(index: number, url: string) {
  tabStore.setCurrentTab(index);
  Taro.switchTab({ url });
}
</script>

<style lang="less">
.tab-bar {
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 100px;
  background: gray;
  display: flex;
}

.tab-bar-border {
  background-color: rgba(0, 0, 0, 0.33);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 1px;
  transform: scaleY(0.5);
}

.tab-bar-item {
  width: 50%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.tab-bar-item .tab-image {
  display: block;
  width: 50px;
}

.tab-bar-item .tab-text {
  font-size: 30px;
}
</style>
