import { View, WebView } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.less'

export default function Webview() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <WebView className='webview' src='https://www.baidu.com' />
  )
}
