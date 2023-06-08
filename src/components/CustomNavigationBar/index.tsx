import Taro from "@tarojs/taro";
import { View, RootPortal, CoverView, Input } from "@tarojs/components";
import * as React from 'react';
import { useState, useEffect, useMemo } from 'react';
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
  const [type, setType] = useState('商品');

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
        <View 
          style={{ borderRadius: `${customNavigationBarContentHeight / 2}px` }} 
          className={styles.customNavigationBarContentSearch}
        >
          {/* 选项 */}
          <Popover 
            content={(
              <>
                <View
                  className={`${styles.customNavigationBarContentSearchTypeSelectItem} ${styles.customNavigationBarContentSearchTypeSelectItemFirst}`}
                  onTap={() => {
                    setType('商品')
                  }}
                >
                  商品
                </View>
                <View 
                  className={`${styles.customNavigationBarContentSearchTypeSelectItem} ${styles.customNavigationBarContentSearchTypeSelectItemEnd}`}
                  onTap={() => {
                    setType('店铺')
                  }}
                >
                  店铺
                </View>
              </>
            )}
          >
            <View 
              className={styles.customNavigationBarContentSearchType}
              style={{
                height: `${customNavigationBarContentHeight}px`,
              }}
            >
              {type}
            </View>
          </Popover>
          {/* 搜索你要的商品 */}
          <View className={styles.customNavigationBarContentSearchInput}>
            <Input 
              type='text' 
              placeholder='搜索你要的商品' 
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CustomNavigationBar;
