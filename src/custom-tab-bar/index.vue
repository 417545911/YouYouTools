<template>
  <view class="tab-bar">
    <view class="tab-bar-border"></view>
    <view
      v-for="(item, index) in list"
      :key="index"
      class="tab-bar-item"
      :class="{ 'middle-item': item.isMiddle }"
      @tap="switchTab(index, item.pagePath)"
    >
      <template v-if="item.isMiddle">
        <image
          class="middle-image"
          :src="tabStore === index ? item.selectedIconPath : item.iconPath"
        ></image>
      </template>
      <template v-else>
        <image
          class="tab-image"
          :src="
            tabStore.currentTab === index
              ? item.selectedIconPath
              : item.iconPath
          "
        />
        <view
          class="tab-text"
          :style="{
            color: tabStore.currentTab === index ? selectedColor : color,
          }"
          >{{ item.text }}</view
        >
      </template>
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
    isMiddle: true,
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
  background: #fff;
  display: flex;
}

.tab-bar-item {
  flex: 1;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-top: 1px solid rgba(0,0,0,0.2);
  &.middle-item {
    flex: none;
    position: relative;
    bottom: 20px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.2);
  }
  .tab-image {
    width: 24px;
    height: 24px;
  }
  .middle-image {
    width: 40px;
    height: 40px;
  }
  .tab-text {
    font-size: 10px;
  }
}
</style>
