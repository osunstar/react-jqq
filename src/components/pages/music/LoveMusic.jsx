import React, { Component } from "react";
import { Layout, Menu, Icon, Table } from "antd";
import { MUSIC_LIST } from "./musicList";
import  Progress from "./Progress"
const { Header, Content, Footer, Sider } = Layout;
let $ = require('jquery')
class LoveMusic extends Component {
  state = {
    columns: [
      {
        title: "序号",
        dataIndex: "num",
        key: "num",
        render:(text,record,index)=> index+1
      },
      {
        title: "歌曲名称",
        dataIndex: "title",
        key: "title"
      },
      {
        title: "歌手",
        dataIndex: "artist",
        key: "artist"
      }
    ],
    pager: [],
    loading: true
  };
  componentDidMount() {
    this.setState({ pager: MUSIC_LIST,   loading: false });

  }
  render() {
    const { pager,columns } = this.state;
    return (
      <div>
        <Table dataSource={pager} columns={columns} />
        <div id="#player">
         <Progress progress="2"></Progress>
        </div>
      </div>
    );
  }
}

export default LoveMusic;
