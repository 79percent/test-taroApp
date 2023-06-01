import * as React from 'react';
import { useState, useEffect, PropsWithChildren, ReactNode, useRef } from 'react';
import { View, RootPortal, CoverView } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { randomString } from '@/utils';
import './index.less';

type PopoverProps = {
  content: ReactNode;
}

const Popover = (props: PropsWithChildren & PopoverProps) => {
  const {
    children,
    content
  } = props;

  const popoverIdRef = useRef(`my_taro_popover_${randomString(6)}`);
  const [showPopover, setShowPopover] = useState(false);
  const [position, setPosition] = useState({
    top: 0,
    left: 0
  });
  const [scrollTop, setScrollTop] = useState(0);
  const [scale, setScale] = useState(0);
  
  useEffect(() => {
    const query = Taro.createSelectorQuery();
    query.select(`#${popoverIdRef.current}`).boundingClientRect((res: any) => {
      setPosition({
        top: res.top + res.height + 10,
        left: res.left
      })
    }).exec();
  }, []);

  return (
    <>
      <View 
        id={popoverIdRef.current}
        className='my-taro-popover' 
        onTap={() => {
          const query = Taro.createSelectorQuery();
          query.select(`#${popoverIdRef.current}`).boundingClientRect((res1: any) => {
            const query2 = Taro.createSelectorQuery();
            query2.selectViewport().scrollOffset((res2) => {
              setScrollTop(res2.scrollTop);
              setShowPopover(true);
              setScale(1);
            }).exec();
          }).exec();
        }}
      >
        {children}
      </View>
      {true && (
        <RootPortal>
          <View 
            className='my-taro-popover-mask' 
            style={{
              top: `${scrollTop}px`,
              zIndex: showPopover ? 999 : -1,
            }}
            onTouchMove={(e) => {
              e.stopPropagation();
              return false;
            }}
            onTap={() => {
              setShowPopover(false);
              setScale(0);
            }}
            catchMove
          >
            <View 
              className='my-taro-popover-content'
              style={{ 
                top: `${position.top}px`,
                left: `${position.left}px `,
                transform: `scale(${scale})`,
              }}
            >
              {content}
              <View className='my-taro-popover-content-triangle'></View>
            </View>
          </View>
        </RootPortal>
      )}
    </>
  )
}

export default Popover;