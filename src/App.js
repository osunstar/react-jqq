import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Layout, Menu, Icon } from "antd";
import SiderCustom from "./components/SiderCustom";
import HeaderCustom from "./components/HeaderCustom";
import AboutMe from "./components/pages/AboutMe";
import LoveMusic from "./components/pages/music/LoveMusic";
import CentralManage from "./components/centers/CentralManage"
import User from "./components/centers/User"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <span>首页</span>,
    main: AboutMe
  },
  {
    path: "/lovemusic",
    sidebar: () => <span>喜欢歌曲</span>,
    main: LoveMusic
  },
  {
    path: "/pro1",
    exact: true,
    sidebar: () => <span>中心管理规定</span>,
    main: CentralManage
  },
  {
    path: "/pro2",
    exact: true,
    sidebar: () => <span>产品2</span>,
    main: User
  },
  {
    path: "/pro3",
    exact: true,
    sidebar: () => <span>产品3</span>,
    main: AboutMe
  }
];

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <SiderCustom />
          <Layout>
            <HeaderCustom />
            <Content style={{ margin: "24px 16px 0" }}>
              <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                  />
                ))}
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2016 Created by Ant UED
            </Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default App;
