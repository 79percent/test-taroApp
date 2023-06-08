import { View, Text, Swiper, SwiperItem, ScrollView } from '@tarojs/components'
import Taro, { useLoad, usePullDownRefresh } from '@tarojs/taro'
import CustomNavigationBar, { barHeightInfo } from '@/components/CustomNavigationBar';
import * as React from 'react';
import { useState, useEffect } from 'react';
import styles from './index.module.less';

export default function Home() {

  const [refresherTriggered, setRefresherTriggered] = useState(false);

  useLoad(() => {
    console.log('Page loaded.')
  })

  usePullDownRefresh(() => {
    console.log('usePullDownRefresh')
  })

  const { screenHeight } = Taro.getSystemInfoSync()

  return (
    <View className={styles.home}>
      <CustomNavigationBar /> 
      <ScrollView 
        className={styles.homeScrollView}
        style={{
          height: `${screenHeight - barHeightInfo.navigationBarHeight}px`
        }}
        scrollY
        refresherEnabled
        refresherTriggered={refresherTriggered}
        onScrollToLower={(payload) => {
          console.log('onScrollToLower', payload)
        }}
        onRefresherRefresh={() => {
          if(refresherTriggered){
            return;
          }
          setRefresherTriggered(true);
          setTimeout(() => {
            setRefresherTriggered(false);
          }, 1000);
        }}
      >
        <View className={styles.homeScrollViewContent}>
          <Swiper
            className='test-h'
            style={{height: 200}}
            indicatorColor='#999'
            indicatorActiveColor='#333'
            // vertical
            circular
            indicatorDots
            autoplay 
          >
            <SwiperItem>
              <View className='demo-text-1' style={{ backgroundColor: 'skyblue', height: 200 }}>1</View>
            </SwiperItem>
            <SwiperItem>
              <View className='demo-text-2' style={{ backgroundColor: 'green', height: 200 }}>2</View>
            </SwiperItem>
            <SwiperItem>
              <View className='demo-text-3' style={{ backgroundColor: 'blue', height: 200 }}>3</View>
            </SwiperItem>
          </Swiper>
          <View className={styles.service}>
            <View className={styles.serviceItem}></View>
            <View className={styles.serviceItem}></View>
            <View className={styles.serviceItem}></View>
            <View className={styles.serviceItem}></View>
            <View className={styles.serviceItem}></View>
          </View>
          <View className={styles.module}>
            <View className={styles.moduleItem}></View>
            <View className={styles.moduleItem}></View>
            <View className={styles.moduleItem}></View>
          </View>
          <View className={styles.card}>
            <View className={styles.cardLeft}></View>
            <View className={styles.cardRight}>
            </View>
          </View>
          <View className={styles.boxList}>
            <View className={styles.boxItem}>Taro.startPullDownRefresh</View>
            <View className={styles.boxItem}>2</View>
            <View className={styles.boxItem}>3</View>
            <View className={styles.boxItem}>4</View>
            <View className={styles.boxItem}>5</View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
