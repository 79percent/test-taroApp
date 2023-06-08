import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.less'

export default function BrandZone() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='brand-zone'>
      <Text>Hello world!</Text>
    </View>
  )
}
