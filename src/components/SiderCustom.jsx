import React, { Component } from "react";
import logo from "../logo.svg";
import { Layout, Menu, Icon } from "antd";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;


class App extends Component {
  render() {
    return (
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
          <Menu.Item key="1">
            <Icon type="user" />
            <Link to="/">首页</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <Link to="/about">关于我们</Link>
          </Menu.Item>
          <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>产品</span></span>}
            >
              <Menu.Item key=""><Link to="/pro1">产品1</Link></Menu.Item>
              <Menu.Item key=""><Link to="/pro2">产品2</Link></Menu.Item>
              <Menu.Item key=""><Link to="/pro3">产品3</Link></Menu.Item>
            </SubMenu>

        </Menu>
      </Sider>
    );
  }
}

export default App;
