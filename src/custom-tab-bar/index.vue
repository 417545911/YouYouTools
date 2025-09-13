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
        :src="
          tabStore.currentTab === index ? item.selectedIconPath : item.iconPath
        "
      />
      <view
        class="tab-text"
        :style="{
          color: tabStore.currentTab === index ? selectedColor : color,
        }"
        >{{ item.text }}</view
      >
    </view>
  </view>
</template>

<script setup lang="ts">
import Taro from "@tarojs/taro";
import { useTabBarStore } from "@/stores/tabbar";

const tabStore = useTabBarStore();

const color = "#333333";
const selectedColor = "#000000";
const list = [
  {
    pagePath: "/pages/home/index",
    selectedIconPath: "/assets/tabbar/home_active.png",
    iconPath: "/assets/tabbar/home.png",
    text: "首页",
  },
  {
    pagePath: "/pages/discover/index",
    text: "发现",
    iconPath: "/assets/tabbar/discover.png",
    selectedIconPath: "/assets/tabbar/discover_active.png",
  },
  {
    pagePath: "/pages/favorite/index",
    text: "常用",
    iconPath: "/assets/tabbar/favorite.png",
    selectedIconPath: "/assets/tabbar/favorite_active.png",
  },
  {
    pagePath: "/pages/tool/index",
    text: "工具",
    iconPath: "/assets/tabbar/tool.png",
    selectedIconPath: "/assets/tabbar/tool_active.png",
  },
  {
    pagePath: "/pages/setting/index",
    text: "设置",
    iconPath: "/assets/tabbar/setting.png",
    selectedIconPath: "/assets/tabbar/setting_active.png",
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
  height: 60px;
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
  width: 20%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.tab-bar-item .tab-image {
  display: block;
  width: 24px;
  height: 24px;
}

.tab-bar-item .tab-text {
  font-size: 10px;
}
</style>
