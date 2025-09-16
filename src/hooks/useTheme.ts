import { ref, computed, ComputedRef, Ref } from 'vue';
import Taro from '@tarojs/taro'

// 主题类型
export type Theme = 'light' | 'dark' | 'custom';

// 主题配置接口
export interface ThemeConfig {
  '--primary-color': string;
  '--secondary-color': string;
  '--text-color': string;
  '--background-color': string;
}

export interface UseThemeReturn {
  /** 当前主题 */
  currentTheme: Ref<Theme>;
  /** 主题配置对象 */
  themeConfig: ComputedRef<ThemeConfig>;
  /** 切换主题的方法 */
  setTheme: (theme: Theme) => void;
}

// 所有主题的配置
const themes: Record<Theme, ThemeConfig> = {
  light: {
    '--primary-color': '#8cd548',
    '--secondary-color': '#8cd000',
    '--text-color': '#000000',
    '--background-color': '#ffffff'
  },
  dark: {
    '--primary-color': '#8cd548',
    '--secondary-color': '#8cd000',
    '--text-color': '#fff',
    '--background-color': '#000'
  },
  custom: {
    '--primary-color': '#8cd548',
    '--secondary-color': '#8cd000',
    '--text-color': '#000000',
    '--background-color': '#ffffff'
  },
}

// 在本地存储中使用的键名
const STORAGE_KEY = 'APP_THEME';

export function useTheme(): UseThemeReturn {

  const currentTheme = ref<Theme>((Taro.getStorageSync(STORAGE_KEY) as Theme) || 'light');
  const themeConfig = computed<ThemeConfig>(() => themes[currentTheme.value])

  /** 将主题配置应用到根元素 */
  const applyTheme = (config: ThemeConfig) => {
    const rootElement = document.documentElement || document.querySelector('page');

    Object.keys(config).forEach((key) => {

      // 使用类型断言确保 key 是 Temeconfig 的键
      const cssVar = key as keyof ThemeConfig
      rootElement?.style.setProperty(cssVar, config[cssVar])
    })
  }
  const setTheme = (theme: Theme) => {
    if (!themes[theme]) {
      console.warn("主题设置名称没找到")
      return;
    }
    currentTheme.value = theme;
    Taro.setStorageSync(STORAGE_KEY, theme)
    applyTheme(themes[theme])
  }
  // 初始化应用一次主题
  applyTheme(themeConfig.value)
  return {
    currentTheme,
    themeConfig,
    setTheme
  }
}


