import { View, Text, WebView } from '@tarojs/components'
import Taro, { useLoad , useDidShow } from '@tarojs/taro'
import './index.less'

import type CustomTabBar from '../../custom-tab-bar';


export default function Test() {
  
  useLoad(() => {
    console.log('Page loaded.')
  })
  
  useDidShow(() => {
    const pageCtx = Taro.getCurrentInstance().page;
    const tabbar = Taro.getTabBar<CustomTabBar>(pageCtx);
    tabbar?.setSelected(1);
  })

  return (
    <View className='test'>
      <Text>测试</Text>
      {/* <WebView className='webview' src='https://www.baidu.com' /> */}
    </View>
  )
}
