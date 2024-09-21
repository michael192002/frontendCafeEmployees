import React, { useState } from 'react';
import {
  AppstoreOutlined,
  CalendarOutlined,
  LinkOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Divider, Menu, Switch } from 'antd';
const items = [
  {
    key: '1',
    icon: <MailOutlined />,
    label: 'Cafes',
  },
  {
    key: '2',
    icon: <CalendarOutlined />,
    label: 'Employees',
  },
  {
    key: 'sub1',
    label: 'Others',
    icon: <AppstoreOutlined />,
    children: [
    ],
  },
];
const MenuNav = () => {
  const [mode, setMode] = useState('inline');
  const [theme, setTheme] = useState('light');
  const changeMode = (value) => {
    setMode(value ? 'vertical' : 'inline');
  };
  const changeTheme = (value) => {
    setTheme(value ? 'dark' : 'light');
  };
  return (
    <>
      <Menu
        style={{
          width: 256,
          boxShadow : " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);" //https://www.w3schools.com/css/css3_shadows_box.asp
        }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode={mode}
        theme={theme}
        items={items}
      />
    </>
  );
};
export default MenuNav;