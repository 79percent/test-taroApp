import { View, Text, Button, Image } from "@tarojs/components";
import Taro, { useLoad, usePullDownRefresh } from "@tarojs/taro";
import * as React from 'react';
import { useState, useEffect } from 'react';
// import { useModel } from 'umi';
import useIndex from '@/store/index';
import useTest from '@/models/test';
import styles from "./index.module.less";

const A = () => {
  const {
    count,
  } = useIndex((state) => (state));
  return (
    <Text>A: {count}</Text>
  )
}
const B = () => {
  const {
    count, 
  } = useIndex((state) => (state));
  return (
    <Text>B: {count}</Text>
  )
}

export default function My() {
  const [userInfo, setUserInfo] = useState<any>(null);
  // const {count, setCount} = useTest();
  const {
    count, setCount,
    // testRef,
    handleAdd,
  } = useIndex((state) => (state));
  // const { count, setCount } = useModel('test');

  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View className='my'>
      <Text>{count}</Text>
      <Button onTap={handleAdd}>+1</Button>
      <A />
      <B />
      <Button
        onTap={() => {
          Taro.getUserProfile({
            desc: "获取头像昵称",
            success: async (userProfile) => {
              console.log(111, "getUserProfile", JSON.stringify(userProfile, null, 2));
              setUserInfo(userProfile?.userInfo);
              Taro.login({
                success: async (loginRes) => {
                  console.log(222, loginRes);
                  
                  if (loginRes.code) {
                    //发起网络请求
                    const res = await Taro.request({
                      url: 'http://192.168.0.97:8909/loginByWeixin',
                      method: 'POST',
                      data: {
                        info: {
                          ...userProfile,
                          code: loginRes.code,
                        }
                      }
                    });
                    console.log(3333, res)
                  } else {
                    console.log('登录失败！' + loginRes.errMsg)
                  }
                }
              })
            },
          });
        }}
      >
        获取头像昵称
      </Button>
      <View>{userInfo?.nickName}</View>
      <Image className={styles.avatar} src={userInfo?.avatarUrl} ></Image>
      <View style={{wordBreak: 'break-word'}}>{JSON.stringify(userInfo, null , 2)}</View>
    </View>
  );
}
