import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.less'

export default function RankingList() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='ranking-list'>
      <Text>Hello world!</Text>
    </View>
  )
}
