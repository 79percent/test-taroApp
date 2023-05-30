import { Component } from "react";
import Taro from "@tarojs/taro";
import { CoverView, CoverImage } from "@tarojs/components";
import "./index.less";

export default class Index extends Component {
  state = {
    selected: 0,
    color: "#000000",
    selectedColor: "#DC143C",
    list: [
      {
        pagePath: "/pages/index/index",
        // selectedIconPath: '../images/tabbar_home_on.png',
        // iconPath: '../images/tabbar_home.png',
        text: "首页",
      },
      {
        pagePath: "/pages/test/index",
        // selectedIconPath: '../images/tabbar_cate_on.png',
        // iconPath: '../images/tabbar_cate.png',
        text: "测试",
      },
    ],
  };

  switchTab(index, url) {
    this.setSelected(index);
    Taro.switchTab({ url });
  }

  setSelected(idx: number) {
    this.setState({
      selected: idx,
    });
  }

  render() {
    const { list, selected, color, selectedColor } = this.state;

    return (
      <CoverView className='custom-tab-bar'>
        {list.map((item, index) => {
          return (
            <CoverView
              key={index}
              className='custom-tab-bar-item'
              onClick={this.switchTab.bind(this, index, item.pagePath)}
            >
              {/* <CoverImage src={selected === index ? item.selectedIconPath : item.iconPath} /> */}
              <CoverView
                style={{ color: selected === index ? selectedColor : color }}
              >
                {item.text}
              </CoverView>
            </CoverView>
          );
        })}
      </CoverView>
    );
  }
}
