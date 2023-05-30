import { View, Text, Map, Button } from '@tarojs/components'
import Taro, { useLoad, useDidShow } from '@tarojs/taro';
import './index.less';

import type CustomTabBar from '../../custom-tab-bar';

export default function Index() {
  
  useLoad(() => {
    console.log('Page loaded.')
  })
  
  useDidShow(() => {
    const pageCtx = Taro.getCurrentInstance().page;
    const tabbar = Taro.getTabBar<CustomTabBar>(pageCtx);
    tabbar?.setSelected(0);
  })

  return (
    <View className='index'>
      <Text>Hello world!1111</Text>
      <Map longitude={120} latitude={30}></Map>
      <Button 
        plain 
        type='primary' 
        onTap={() => {
          Taro.login({
            success: function (res) {
              console.log(res);
              
              if (res.code) {
                //发起网络请求
                // Taro.request({
                //   url: 'https://test.com/onLogin',
                //   data: {
                //     code: res.code
                //   }
                // })
              } else {
                console.log('登录失败！' + res.errMsg)
              }
            }
          })
        }}
      >登录</Button>
      <Button 
        plain 
        type='primary' 
        onTap={() => {
          const cameraContext = Taro.createCameraContext()
        }}
      >拍照</Button>
      <Button 
        plain 
        type='primary' 
        onTap={() => {
          Taro.chooseImage({
            count: 1,
            success (res) {
              console.log(res);
              
              // const tempFilePaths = res.tempFilePaths
              // Taro.uploadFile({
              //   url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
              //   filePath: tempFilePaths[0],
              //   name: 'file',
              //   formData: {
              //     'user': 'test'
              //   },
              //   success (res){
              //     const data = res.data
              //     //do something
              //   }
              // })
            }
          })
        }}
      >选择图片</Button>
      <Button 
        plain 
        type='primary' 
        onTap={() => {
          Taro.chooseVideo({
            sourceType: ['album','camera'],
            maxDuration: 60,
            camera: 'back',
            success: function (res) {
              console.log(res)
            }
          })
        }}
      >选择视频</Button>
      <Button 
        plain 
        type='primary' 
        onTap={() => {
          Taro.setNavigationBarColor({
            frontColor: '#ffffff',
            backgroundColor: '#ff0000',
            animation: {
                duration: 400,
                timingFunc: 'easeIn'
            }
         })
        }}
      >按钮</Button>
      <Button 
        plain 
        type='primary' 
        onTap={() => {
          Taro.showToast({
            title: '成功',
            icon: 'success',
            duration: 2000
          })
        }}
      >按钮</Button>
      <Button 
        plain 
        type='primary' 
        onTap={() => {
          Taro.showNavigationBarLoading()
        }}
      >按钮</Button>
      <Button 
        plain 
        type='primary' 
        onTap={() => {
          Taro.showTabBarRedDot({
            index: 6
          })
        }}
      >按钮</Button>
      <Button 
        plain 
        type='primary' 
        onTap={() => {
          Taro.setBackgroundColor({
            backgroundColorTop: '#ffffff', // 顶部窗口的背景色为白色
            backgroundColorBottom: '#ffffff', // 底部窗口的背景色为白色
          })
        }}
      >按钮</Button>
      <Button 
        plain 
        type='primary' 
        onTap={() => {
          Taro.navigateTo({
            url: '/pages/test/index',
            events: {
              // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
              acceptDataFromOpenedPage: function(data) {
                console.log(data)
              },
              someEvent: function(data) {
                console.log(data)
              }
            },
            success: function (res) {
              // 通过eventChannel向被打开页面传送数据
              res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
            }
          })
        }}
      >按钮</Button>
    </View>
  )
}
