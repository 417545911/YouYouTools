export default {
  pages: [
    'pages/home/index',
    'pages/more/index'
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
        pagePath: 'pages/more/index',
        text: '更多',
        iconPath: 'assets/tabbar/more.png',
        selectedIconPath: 'assets/tabbar/more_active.png'
      }
    ]
  }
}
