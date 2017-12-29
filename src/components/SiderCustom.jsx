import React, { Component } from "react";
import logo from "../logo.svg";
import { Layout, Menu, Icon } from "antd";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const { Sider } = Layout;

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
            <Link to="/bubblegum">Bubblegum</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span className="nav-text">nav 3</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="user" />
            <span className="nav-text">nav 4</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default App;
