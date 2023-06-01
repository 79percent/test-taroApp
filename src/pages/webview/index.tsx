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
      src='http://127.0.0.1:5500/' 
      onMessage={handleMessage} 
    />
  )
}
