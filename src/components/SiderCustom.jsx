import React, { Component } from "react";
import logo from "../logo.svg";
import { Layout, Menu, Icon } from "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
        <div className="logo">
       
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
          <Menu.Item key="user">
            <Icon type="user" />
            <Link to="/">首页</Link>
          </Menu.Item>
          <SubMenu
            key="music"
            title={
              <span>
                <Icon type="heart-o" />
                <span>音乐模块</span>
              </span>
            }
          >
            <Menu.Item key="lovemusic">
              <Link to="/lovemusic">喜欢歌曲</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                <span>产品</span>
              </span>
            }
          >
            <Menu.Item key="pro1">
              <Link to="/pro1">产品1</Link>
            </Menu.Item>
            <Menu.Item key="pro2">
              <Link to="/pro2">产品2</Link>
            </Menu.Item>
            <Menu.Item key="pro3">
              <Link to="/pro3">产品3</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}

export default App;
