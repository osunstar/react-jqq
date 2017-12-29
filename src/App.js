import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Layout, Menu, Icon } from "antd";
import SiderCustom from "./components/SiderCustom";
import HeaderCustom from "./components/HeaderCustom";
import AboutMe from "./components/pages/AboutMe";
import ConMe from "./components/pages/ConMe";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <span>home!</span>,
    main:  AboutMe 
  },
  {
    path: "/bubblegum",
    sidebar: () => <span>bubblegum!</span>,
    main: ConMe 
  },
  {
    path: "/shoelaces",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>
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
                  // You can render a <Route> in as many places
                  // as you want in your app. It will render along
                  // with any other <Route>s that also match the URL.
                  // So, a sidebar or breadcrumbs or anything else
                  // that requires you to render multiple things
                  // in multiple places at the same URL is nothing
                  // more than multiple <Route>s.
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
