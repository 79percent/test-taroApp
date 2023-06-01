export default defineAppConfig({
  entryPagePath: 'pages/home/index',
  pages: [
    "pages/home/index", 
    "pages/index/index", 
    "pages/test/index", 
    "pages/webview/index",
    "pages/webviewtwo/index",
    "pages/shareElement/index",
  ],
  components: [
    'components/custom-navigation-bar/index',
    'components/popover/index',
  ],
  window: {
    navigationBarBackgroundColor: "#ffffff",
    navigationBarTextStyle: "black",
    navigationBarTitleText: "微信接口功能演示",
    backgroundColor: "#eeeeee",
    backgroundTextStyle: "light",
  },
  tabBar: {
    custom: false,
    color: "#fff",
    selectedColor: "#FF5F15",
    backgroundColor: "#000",
    borderStyle: "black",
    list: [
      {
        pagePath: "pages/home/index",
        text: "首页",
      },
      {
        pagePath: "pages/webview/index",
        text: "webview",
      },
      {
        pagePath: "pages/index/index",
        text: "index",
      },
      {
        pagePath: "pages/test/index",
        text: "测试",
      },
      {
        pagePath: "pages/shareElement/index",
        text: "shareElement",
      },
    ],
  },
  lazyCodeLoading: "requiredComponents",
  permission: {
    "scope.userLocation": {
      desc: "你的位置信息将用于小程序位置接口的效果展示",
    },
  },
});
