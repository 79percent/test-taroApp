export default defineAppConfig({
  entryPagePath: 'pages/home/index',
  pages: [
    "pages/home/index", // 首页
    "pages/carCircle/index", // 车友圈
    "pages/brandZone/index", // 品牌专区
    "pages/rankingList/index", // 排行榜
    "pages/my/index", // 我的
    "pages/search/index", // 搜索输入页面
    // 以下为测试页面
    "pages/index/index", 
    "pages/test/index", 
    "pages/webview/index",
    "pages/webviewtwo/index",
    "pages/shareElement/index",
  ],
  components: [
    'components/CustomNavigationBar/index',
    'components/CustomNavigationBarHome/index', // 首页导航栏组件
    'components/Popover/index', // 气泡框组件
  ],
  window: {
    navigationBarBackgroundColor: "#ffffff",
    navigationBarTextStyle: "black",
    navigationBarTitleText: "卡车CEO",
    backgroundColor: "#fff",
    backgroundTextStyle: "light",
  },
  tabBar: {
    custom: false,
    color: "#717379",
    selectedColor: "#242C40",
    backgroundColor: "#fff",
    borderStyle: "black",
    list: [
      {
        pagePath: "pages/home/index",
        text: "首页",
      },
      {
        pagePath: "pages/carCircle/index",
        text: "车友圈",
      },
      {
        pagePath: "pages/brandZone/index",
        text: "品牌专区",
      },
      {
        pagePath: "pages/rankingList/index",
        text: "排行榜",
      },
      {
        pagePath: "pages/my/index",
        text: "我的",
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
