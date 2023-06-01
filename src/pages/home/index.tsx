import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import CustomNavigationBar from '@/components/custom-navigation-bar';
import styles from './index.module.less';

export default function Home() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className={styles.home}>
      <CustomNavigationBar />
      <View className={styles.boxItem}>1</View>
      <View className={styles.boxItem}>2</View>
      <View className={styles.boxItem}>3</View>
      <View className={styles.boxItem}>4</View>
      <View className={styles.boxItem}>5</View>
    </View>
  )
}
