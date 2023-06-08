import { View, WebView } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.less'

export default function Webview() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  const handleMessage = (e) => {
    console.log(111, e)
  }

  return (
    <WebView 
      className='webview' 
      // src='https://baidu.com' 
      src='https://appstore.dev.jiuxiniot.com/jz-digital-attendance-mobile-web/#/attendanceCheck' 
      onMessage={handleMessage} 
    />
  )
}
