import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, RootPortal, CoverView, Input } from "@tarojs/components";
import styles from './index.module.less';

const NewInfo = () => {
  return (
    <View className={styles.newInfo}>
      <View className={styles.newInfoTitle}>最新资讯</View>
      <View className={styles.newItem}>

      </View>
    </View>
  )
}

export default NewInfo;