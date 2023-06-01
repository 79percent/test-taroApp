import { View, Text, Map, Button } from '@tarojs/components'
import Taro, { useLoad, useDidShow } from '@tarojs/taro';
import useIndex from '@/store/index';
import './index.less';

// import type CustomTabBar from '../../custom-tab-bar';

export default function Index() {

  const {
    count,
    setCount
  } = useIndex((state) => (state));
  
  useLoad(() => {
    console.log('Page loaded.')
  })
  
  // useDidShow(() => {
  //   const pageCtx = Taro.getCurrentInstance().page;
  //   const tabbar = Taro.getTabBar<CustomTabBar>(pageCtx);
  //   tabbar?.setSelected(0);
  // })

  return (
    <View className='index'>
      <Text>Hello world!1111</Text>
      <View>{count}</View>
      <Map longitude={120} latitude={30}></Map>
      <Button 
        plain 
        type='primary' 
        openType='getPhoneNumber' 
        onGetPhoneNumber={(e) => {
          console.log(e)
        }}
      >onGetPhoneNumber</Button>
      <Button 
        plain 
        type='primary' 
        onTap={() => {
          Taro.navigateTo({
            url: '/pages/webviewtwo/index',
          })
        }}
      >navigateTo</Button>
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
      >login</Button>
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
      >chooseImage</Button>
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
      >chooseVideo</Button>
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
      >setNavigationBarColor</Button>
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
      >showToast</Button>
      <Button 
        plain 
        type='primary' 
        onTap={() => {
          Taro.showNavigationBarLoading()
        }}
      >showNavigationBarLoading</Button>
      <Button 
        plain 
        type='primary' 
        onTap={() => {
          Taro.showTabBarRedDot({
            index: 6
          })
        }}
      >showTabBarRedDot</Button>
      <Button 
        plain 
        type='primary' 
        onTap={() => {
          Taro.setBackgroundColor({
            backgroundColorTop: '#ffffff', // 顶部窗口的背景色为白色
            backgroundColorBottom: '#ffffff', // 底部窗口的背景色为白色
          })
        }}
      >setBackgroundColor</Button>
    </View>
  )
}
