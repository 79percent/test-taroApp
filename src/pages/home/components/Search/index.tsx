import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, RootPortal, CoverView, CoverImage, Text } from "@tarojs/components";
import Taro, { useLoad, usePullDownRefresh } from '@tarojs/taro'
import styles from './index.module.less';

const Search = () => {

  const handleTap = () => {
    Taro.navigateTo({
      url: '/pages/search/index',
    })
  }

  return (
    <View className={styles.search} onTap={handleTap}>
      <Text className={styles.text}>请输入关键词搜索</Text>
      <CoverImage 
        className={styles.searchIcon}
        src='https://636c-cloud1-3g58dt5918f473f4-1300421929.tcb.qcloud.la/assets/home/icon_sousuo.svg?sign=ee894e574f11eea12291e95bfc2bce60&t=1685695247'
      />
    </View>
  )
}

export default Search;