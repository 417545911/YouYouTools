import { defineStore } from "pinia";
import { ref } from 'vue'

export const useTabBarStore = defineStore('tabbar', () => {
  const currentTab = ref(0) // 当前选中的 Tab 索引

  const setCurrentTab = (index: number) => {
    currentTab.value = index
  }

  return { currentTab, setCurrentTab }
})
