import React, { Component } from 'react';
import { Layout, Menu, Icon, Button } from 'antd';
import { WORKDATA } from "./work";
const { Header, Content, Footer, Sider } = Layout;

const Items = props => {
  const { } = props;
  return (<div>
    <span>任务: <input type="text" /></span>
  </div>)
}
const Btns = props => {
  return (<div>
    <Button type="primary" onClick={()=>props.addItems()}>
      新增计划
    </Button>
  </div>)
}
class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }
  componentDidMount() {
    this.setState({ items: WORKDATA,   loading: false });
  }
  //
  addItems = () =>{
    console.log("111")
  }
  render() {
    const { items } = this.state;
    return (
      <div>
        <Btns  addItems={this.addItems}/>
        <Items />
      </div>
    );
  }
}

export default AboutMe;
