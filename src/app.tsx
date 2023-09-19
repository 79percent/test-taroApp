import { PropsWithChildren } from 'react'
import Taro, { useLaunch } from '@tarojs/taro';
import { ProviderWrapper } from "@/.plugin/plugin-model/runtime";
import './app.less';

Taro.loadFontFace({
  global: true,
  family: 'PingFangSC-Regular', //Css中引用使用的字体名
  source: 'url("https://636c-cloud1-3g58dt5918f473f4-1300421929.tcb.qcloud.la/assets/fonts/PingFang.ttf?sign=a92a6b146f808506f7e3d6d952426e2c&t=1685690978")',
})

function App({ children }: PropsWithChildren) {

  useLaunch(() => {
    console.log('App launched.')
  })

  // children 是将要会渲染的页面
  return <ProviderWrapper>{children}</ProviderWrapper>;
}

export default App
