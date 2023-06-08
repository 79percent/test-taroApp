import * as React from "react";
import { useState, useEffect } from "react";
import {
  View,
  RootPortal,
  CoverView,
  Input,
  Text,
  Image,
  ScrollView,
} from "@tarojs/components";
import styles from "./index.module.less";

const HotSellingOfTheSeason = () => {
  return (
    <View className={styles.hotSellingOfTheSeason}>
      <View className={styles.hotSellingOfTheSeasonTitle}>
        <Text className={styles.titleLeft}>当季热卖</Text>
        <View className={styles.titleRight}>
          <Text className={styles.titleRightText}>查看更多</Text>
          <Image className={styles.titleRightArrow} src='https://636c-cloud1-3g58dt5918f473f4-1300421929.tcb.qcloud.la/assets/home/arrow_right.svg?sign=cb315217a8dc0f4d0f0ec71ad3393f74&t=1686116886' ></Image>
        </View>
      </View>
      <ScrollView className={styles.hotSellingOfTheSeasonContent} scrollX>
        {new Array(10).fill('').map((_, index) => (
          <View key={index} style={{ marginLeft: index === 0 ? 0 : 20 }} className={styles.contentItem}></View>
        ))}
      </ScrollView>
    </View>
  );
};

export default HotSellingOfTheSeason;
