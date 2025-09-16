<template>
  <view class="settings-box">
    <button @tap="switchTheme('light')">浅色主题</button>
    <button @tap="switchTheme('dark')">深色主题</button>
    <button @tap="switchTheme('custom')">默认主题</button>

    <view
      class="content"
      :style="{
        backgroundColor: themeConfig['--background-color'],
        color: themeConfig['--text-color'],
        borderColor: themeConfig['--primary-color']
      }"
    >
      当前主题: {{ currentTheme }}
    </view>
  </view>
</template>

<script setup lang="ts">
import { useTheme, Theme } from "@/hooks/useTheme";

const { setTheme, currentTheme, themeConfig } = useTheme();

const switchTheme = (theme: Theme) => {
  setTheme(theme);
};
</script>

<style lang="less">
.settings-box {
  .content {
    width: 200px;
    height: 40px;
    background: var(--background-color);
    color: var(--text-color);
    border: 1px solid var(--primary-color);
    padding: 10px;
    margin: 10px 0;
  }
}
</style>
