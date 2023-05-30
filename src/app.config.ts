export default defineAppConfig({
  pages: ["pages/index/index", "pages/test/index"],
  window: {
    navigationBarBackgroundColor: "#ffffff",
    navigationBarTextStyle: "black",
    navigationBarTitleText: "微信接口功能演示",
    backgroundColor: "#eeeeee",
    backgroundTextStyle: "light",
  },
  tabBar: {
    custom: true,
    color: "#000",
    selectedColor: "#FF5F15",
    backgroundColor: "#ffffff",
    borderStyle: "black",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
      },
      {
        pagePath: "pages/test/index",
        text: "测试",
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
