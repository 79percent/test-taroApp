import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, RootPortal, CoverView, Input } from "@tarojs/components";
import styles from './index.module.less';

const CarefulService = () => {
  return (
    <View className={styles.carefulService}>
      <View className={styles.carefulServiceTitle}>精心服务</View>
      <View className={styles.carefulServiceGrid}>
        <View className={styles.carefulServiceGridItem}></View>
        <View className={styles.carefulServiceGridItem}></View>
        <View className={styles.carefulServiceGridItem}></View>
        <View className={styles.carefulServiceGridItem}></View>
      </View>
    </View>
  );
}

export default CarefulService;