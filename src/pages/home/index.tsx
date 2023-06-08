import { View, Text, Swiper, SwiperItem, ScrollView } from '@tarojs/components'
import Taro, { useLoad, usePullDownRefresh } from '@tarojs/taro'
import CustomNavigationBarHome, { barHeightInfo } from '@/components/CustomNavigationBarHome';
import * as React from 'react';
import { useState, useEffect } from 'react';
import Search from './components/Search';
import CarefulService from './components/CarefulService';
import HotSellingOfTheSeason from './components/HotSellingOfTheSeason';
import NewInfo from './components/NewInfo';
import styles from './index.module.less';

export default function Home() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  usePullDownRefresh(() => {
    console.log('usePullDownRefresh')
  })

  const { screenHeight } = Taro.getSystemInfoSync()

  useEffect(() => {
    // Taro.login({
    //   success: function (res) {
    //     console.log('login', res);
        
    //     if (res.code) {
    //       //发起网络请求
    //       // Taro.request({
    //       //   url: 'https://test.com/onLogin',
    //       //   data: {
    //       //     code: res.code
    //       //   }
    //       // })
    //     } else {
    //       console.log('登录失败！' + res.errMsg)
    //     }
    //   }
    // })
  }, []);

  return (
    <View className={styles.home}>
      {/* 城市 导航栏 */}
      <CustomNavigationBarHome /> 
      <ScrollView 
        className={styles.homeScrollView}
        style={{
          // height: `${screenHeight - barHeightInfo.navigationBarHeight}px`
        }}
        scrollY
      >
        <View className={styles.homeContent}>
          {/* 搜索 */}
          <Search />
          {/* 精心服务 */}
          <CarefulService />
          {/* 当季热卖 */}
          <HotSellingOfTheSeason />
          {/* 最新资讯 */}
          <NewInfo />
        </View>
      </ScrollView>
    </View>
  )
}
