import { View, WebView } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import * as React from 'react';
import { useState, useEffect } from 'react';
import './index.less'

export default function Webview() {
  const [hash, seHash] = useState('')

  useLoad(() => {
    console.log('Page loaded.')
  })

  const handleMessage = (e) => {
    console.log(2222, 'onMessage', e)
  }

  useEffect(() => {
    setTimeout(() => {
      seHash('aaa')
    }, 1000);
  }, []);

  return (
    <WebView 
      className='webview' 
      src='http://127.0.0.1:5500'
      // src={`http://127.0.0.1:5500/#/${hash}`} 
      onMessage={handleMessage} 
    />
  )
}
