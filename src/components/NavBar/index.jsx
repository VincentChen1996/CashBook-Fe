import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { TabBar } from 'zarm';
import { useNavigate, useLocation } from 'react-router-dom';
import s from './style.module.less';
import CustomIcon from '../CustomIcon';

// 接收一个外部传入的 showNav 属性，用于控制导航栏的显示隐藏
const NavBar = ({ showNav }) => {
  const location = useLocation()
  const { pathname } = location // 获取当前路径
  const [ activeKey, setActiveKey ] = useState(pathname);
  const navigateTo = useNavigate()

  const changeTab = (path) => {
    // 设置当前点击的高亮
    setActiveKey(path)
    // 跳转页面
    navigateTo(path)
  }

  return (
    <TabBar visible={showNav} className={s.tab} activeKey={activeKey} onChange={changeTab}>
      <TabBar.Item
        itemKey="/"
        title="账单"
        icon={<CustomIcon type="zhangdan" />}
      />
      <TabBar.Item
        itemKey="/data"
        title="统计"
        icon={<CustomIcon type="tongji" />}
      />
      <TabBar.Item
        itemKey="/user"
        title="我的"
        icon={<CustomIcon type="wode" />}
      />
    </TabBar>
  );
};

// 设置组件的指定属性，为组建添加类型检查的能力
NavBar.propTypes = {
  showNav: PropTypes.bool
}

export default NavBar;