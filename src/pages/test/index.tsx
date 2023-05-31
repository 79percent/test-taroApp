import {
  View,
  Text,
  Button,
  CoverImage,
  MovableArea,
  MovableView,
  PageContainer,
  RootPortal,
  ScrollView,
  Icon,
  Progress,
  RichText,
  Checkbox,
  Label,
  Editor,
  Form,
  Switch,
  Input,
  RadioGroup,
  Radio,
  Picker,
  Slider,
  Textarea,
  Camera,
  Image,
  Video,
  Map,
} from "@tarojs/components";
import { useState, useEffect, useRef } from 'react';
import Taro, { useLoad, useDidShow } from "@tarojs/taro";
import useTest from '@/store/test';
import useIndex from '@/store/index';
import styles from "./index.module.less";

export default function Test() {
  const {
    pageContainerShow, setPageContainerShow,
    show, setShow,
    selectorData, setSelectorData
  } = useTest((state) => (state));
  const {
    count,
    setCount
  } = useIndex((state) => (state));
  const editorCtx = useRef<any>();

  const toggle = () => {
    setShow(!show);
  };

  const countPlus = () => {
    setCount(count + 1)
  }

  const handleHidePageContainer = () => {
    setPageContainerShow(false);
  };

  const editorReady = e => {
    Taro.createSelectorQuery().select('#editor').context((res) => {
      editorCtx.current = res.context;
    }).exec()
  }

  const undo = e => {
    editorCtx.current.undo()
  }

  const formSubmit = e => {
    console.log(e)
  }

  const formReset = e => {
    console.log(e)
  }

  useLoad(() => {
    console.log("Page loaded.");
  });

  const vStyleA = {
    'backgroundColor': 'rgb(26, 173, 25)'
  }
  const vStyleB = {
    'backgroundColor': 'rgb(39,130,215)'
  }
  const vStyleC = {
    'backgroundColor': 'rgb(241,241,241)',
    color: '#333'
  }

  const list = [
    {
      value: '美国',
      text: '美国',
      checked: false
    },
    {
      value: '中国',
      text: '中国',
      checked: true
    },
    {
      value: '巴西',
      text: '巴西',
      checked: false
    },
    {
      value: '日本',
      text: '日本',
      checked: false
    },
    {
      value: '英国',
      text: '英国',
      checked: false
    },
    {
      value: '法国',
      text: '法国',
      checked: false
    }
  ]

  const slectorArr = ['美国', '中国', '巴西', '日本'];

  return (
    <View className={styles.test}>
      <Text>测试组件库</Text>
      <View>
        <Icon size='60' type='success' />
        <Icon size='60' type='info' />
        <Icon size='60' type='warn' color='#ccc' />
        <Icon size='60' type='warn' />
        <Icon size='60' type='waiting' />
        <Icon size='20' type='success_no_circle' />
        <Icon size='20' type='warn' />
        <Icon size='20' type='success' />
        <Icon size='20' type='download' />
        <Icon size='20' type='clear' color='red' />
        <Icon size='20' type='search' />
      </View>
      <View>
        <Progress percent={20} showInfo strokeWidth={6} className={styles.testProgress} />
        <Progress percent={40} strokeWidth={6} active className={styles.testProgress} />
        <Progress percent={60}  strokeWidth={6} active className={styles.testProgress} />
        <Progress percent={80}  strokeWidth={6} active activeColor='blue' className={styles.testProgress} />
      </View>
      <View>
        <RichText 
          nodes={[
            {
              name: 'div',
              attrs: {
                class: 'div_class',
                style: 'line-height: 60px; color: red;'
              },
              children: [
                {
                  type: 'text',
                  text: 'Hello World!'
                }
              ]
            }
          ]} 
        />
      </View>
      <View>
        <Button className='btn-max-w' plain type='primary'>按钮</Button>
        <Button className='btn-max-w' plain type='primary' disabled>不可点击的按钮</Button>
        <Button className='btn-max-w' plain >按钮</Button>
        <Button className='btn-max-w' plain disabled >按钮</Button>
        <Button size='mini' type='primary'>按钮</Button>
        <Button size='mini' >按钮</Button>
        <Button size='mini' type='warn'>按钮</Button>
      </View>
      <View>
        <Checkbox value='选中' checked>选中</Checkbox>
        <Checkbox style='margin-left: 20rpx' value='未选中'>未选中</Checkbox>
      </View>
      <View>
        {list.map((item, index) => {
          const { value, text, checked } = item;
          return (
            <Label for={value} key={text}>
              <Checkbox value={item.value} checked={checked}>{item.text}</Checkbox>
            </Label>
          )
        })}
      </View>
      <View>
        <Editor id='editor' className={styles.testEditor} placeholder='asdasdasd' onReady={editorReady}></Editor>
        <Button type='warn' onClick={undo}>撤销</Button>
      </View>
      <Form onSubmit={formSubmit} onReset={formReset} >
        <View className='example-body'>
          <Switch name='switch' className='form-switch'></Switch>
        </View>
        <View className='example-body'>
          <Text>可以自动聚焦的 input</Text>
          <Input type='text' placeholder='将会获取焦点' focus />
          <Text>控制最大输入长度的 input</Text>
          <Input type='text' placeholder='最大输入长度为 10' maxlength={10} />
          <Text>数字输入的 input</Text>
          <Input type='number' placeholder='这是一个数字输入框' />
          <Text>密码输入的 input</Text>
          <Input type='safe-password' password placeholder='这是一个密码输入框' />
          <Text>带小数点的 input</Text>
          <Input type='digit' placeholder='带小数点的数字键盘' />
          <Text>身份证输入的 input</Text>
          <Input type='idcard' placeholder='身份证输入键盘' />
          <Text>控制占位符颜色的 input</Text>
          <Input type='text' placeholder='占位符字体是红色的' placeholderStyle='color:red' />
        </View>
        <View>
          <RadioGroup>
            <Label className='example-body__label' for='1' key='1'>
              <Radio value='USA'>USA</Radio>
            </Label>
            <Label className='example-body__label' for='2' key='2'>
              <Radio value='CHN' checked>
                CHN
              </Radio>
            </Label>
          </RadioGroup>
        </View>
        <View>
          <Text>地区选择器</Text>
          <Picker 
            mode='selector' 
            range={selectorData.selector} 
            onChange={(e) => {
              console.log(e)
              setSelectorData({
                ...selectorData,
                selectorChecked: selectorData.selector[e.detail.value]
              })
            }}
          >
            <View className='picker'>
              当前选择：{selectorData.selectorChecked}
            </View>
          </Picker>
        </View>
        <View>
          <Text>时间选择器</Text>
          <Picker
            mode='time'
            value={selectorData.timeSel}
            onChange={(e) => {
              console.log(e)
              setSelectorData({
                ...selectorData,
                timeSel: e.detail.value
              })
            }}
          >
            <View className='picker'>
              当前选择：{selectorData.timeSel}
            </View>
          </Picker>
        </View>
        <View>
          <Text>日期选择器</Text>
          <Picker
            mode='date'
            value={selectorData.dateSel}
            onChange={(e) => {
              console.log(e)
              setSelectorData({
                ...selectorData,
                dateSel: e.detail.value
              })
            }}
          >
            <View className='picker'>
              当前选择：{selectorData.dateSel}
            </View>
          </Picker>
        </View>
        <View className='components-page'>
          <Text>设置 step</Text>
          <Slider step={1} value={50} />
          <Text>显示当前 value</Text>
          <Slider step={1} value={50} showValue />
          <Text>设置最小/最大值</Text>
          <Slider step={1} value={100} showValue min={50} max={200} />
        </View>
        <View className='components-page'>
          <Text>默认样式</Text>
          <Switch checked />
          <Switch />
          <Text>推荐展示样式</Text>
          <Switch checked />
          <Switch />
        </View>
        <View className='components-page'>
          <Text>输入区域高度自适应，不会出现滚动条</Text>
          <Textarea style='background:#000;width:80%;min-height:80px;padding:0 30rpx;color: #fff;' autoHeight  />
          <Text>这是一个可以自动聚焦的 textarea</Text>
          <Textarea style='background:#000;width:80%;height:80px;padding:0 30rpx;color: #fff;' autoFocus />
        </View>
      </Form>
      <View>系统相机</View>
      <Camera className={styles.testCamera} />
      <View>图片</View>
      <Image
        className={styles.testImage}
        src='https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67'
      />
      <View>视频</View>
      <View className='components-page'>
        <Video
          id='video'
          src='http://oos-sdqd.ctyunapi.cn/video-dev/up2305101048027285302demo.mp4'
          poster='https://img.zcool.cn/community/01c8f15aeac135a801207fa16836ae.jpg@1280w_1l_2o_100sh.jpg'
          initialTime={0}
          controls
          autoplay={false}
          loop={false}
          muted={false}
        />
      </View>
      <View>地图</View>
      <Map longitude={120} latitude={30}></Map>
      <View>CoverImage</View>
      <CoverImage
        className={styles.testCoverImage}
        src='https://tse1-mm.cn.bing.net/th/id/OIP-C.RLXQLqOuMFuWxC1F-zijHAHaGl?pid=ImgDet&rs=1'
      ></CoverImage>
      <MovableArea style='height: 200px; width: 200px; background: red;'>
        <MovableView
          style='height: 50px; width: 50px; background: blue;color: #fff;'
          direction='all'
        >
          可拖动
        </MovableView>
      </MovableArea>
      <PageContainer show={pageContainerShow} >
        <View
          className={styles.testPageContainerView}
          onTap={handleHidePageContainer}
        >
          关闭
        </View>
      </PageContainer>
      <Button onClick={toggle}>显示root-portal</Button>
      <Button onClick={countPlus}>首页{count} + 1</Button>
      {show && (
        <RootPortal>
          <View className={styles.rootPortalView}>content</View>
        </RootPortal>
      )}
      <ScrollView
        className={styles.testScrollView}
        scrollY
        scrollWithAnimation
      >
        <View style={vStyleA} className={styles.testScrollViewItem}>A</View>
        <View style={vStyleB} className={styles.testScrollViewItem}>B</View>
        <View style={vStyleC} className={styles.testScrollViewItem}>C</View>
      </ScrollView>
    </View>
  );
}
