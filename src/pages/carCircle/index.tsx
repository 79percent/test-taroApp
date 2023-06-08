import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.less'

export default function CarCircle() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='car-circle'>
      <Text>Hello world!</Text>
    </View>
  )
}
