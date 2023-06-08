import Taro from "@tarojs/taro";
import { View, RootPortal, CoverView, Input, Text, Image } from "@tarojs/components";
import * as React from 'react';
import { useState, useEffect, useMemo, useCallback } from 'react';
import Popover from '@/components/Popover';
import styles from './index.module.less';

// 获取系统状态栏高度
const { statusBarHeight = 0 } = Taro.getSystemInfoSync();
// 获取小程序右上角胶囊的大小
const { 
  height, 
  top, 
  left
} = Taro.getMenuButtonBoundingClientRect();
// 计算出小程序导航栏的整体高度，这里要加上系统状态栏的高度
const navBarHeight = height + (top - statusBarHeight) * 2 + statusBarHeight;
const customNavigationBarContentHeight = navBarHeight - statusBarHeight;

export const barHeightInfo = {
  navigationBarHeight: navBarHeight,
  navigationBarContentHeight: customNavigationBarContentHeight,
};

const CustomNavigationBar = () => {
  const [city, setCity] = useState('杭州市');

  const getCity = useCallback(async () => {
    const location = await Taro.getLocation({
      type: 'gcj02',
    });
    const {
      latitude,
      longitude,
    } = location;
    const res = await Taro.request({
      url: `https://apis.map.qq.com/ws/geocoder/v1/?location=${latitude},${longitude}&key=Y2HBZ-SM4EZ-7DAX3-ZW2QP-5FCZ5-YBBEC&get_poi=0`,
    });
    if(res.statusCode === 200){
      setCity(res.data.result.address_component.city)
    }
  }, []);
  
  useEffect(() => {
    getCity();
  }, [getCity]);

  return (
    <View 
      className={styles.customNavigationBar}
      style={{
        height: `${navBarHeight}px`,
        paddingTop: `${statusBarHeight}px`,
      }}
    >
      <View 
        className={styles.customNavigationBarContent}
        style={{
          width: `${left}px`,
          height: `${customNavigationBarContentHeight}px`,
        }} 
      >
        <View className={styles.icon}>
          <Image 
            className={styles.image}
            svg
            src='https://636c-cloud1-3g58dt5918f473f4-1300421929.tcb.qcloud.la/assets/home/icon_dingwei.svg?sign=54ec7d93364998be92568182ca7598a0&t=1685692459' 
          />
        </View>
        <Text className={styles.city}>{city}</Text>
        <View className={styles.icon}>
          <Image 
            className={styles.image}
            src='https://636c-cloud1-3g58dt5918f473f4-1300421929.tcb.qcloud.la/assets/home/icon_xiaoxi%20(1).svg?sign=f509de597e0644a47faf8716ed4d9ed8&t=1685692472' 
          />
          <View className={styles.badge}></View>
        </View>
      </View>
    </View>
  );
};

export default CustomNavigationBar;
