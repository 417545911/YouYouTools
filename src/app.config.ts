export default {
  pages: [
    'pages/home/index',
    'pages/discover/index',
    'pages/favorite/index',
    'pages/tool/index',
    'pages/setting/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: true,
    color: '#0D110F',
    selectedColor: '#3fa6ad',
    backgroundColor: '#fff',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/home/index',
        text: '首页',
        iconPath: 'assets/tabbar/home.png',
        selectedIconPath: 'assets/tabbar/home_active.png'
      },
      {
        pagePath: 'pages/discover/index',
        text: '发现',
        iconPath: 'assets/tabbar/discover.png',
        selectedIconPath: 'assets/tabbar/discover_active.png'
      },
      {
        pagePath: 'pages/favorite/index',
        text: '常用',
        iconPath: 'assets/tabbar/favorite.png',
        selectedIconPath: 'assets/tabbar/favorite_active.png'
      },
      {
        pagePath: 'pages/tool/index',
        text: '工具',
        iconPath: 'assets/tabbar/tool.png',
        selectedIconPath: 'assets/tabbar/tool_active.png'
      },
      {
        pagePath: 'pages/setting/index',
        text: '设置',
        iconPath: 'assets/tabbar/setting.png',
        selectedIconPath: 'assets/tabbar/setting_active.png'
      }
    ]
  }
}
