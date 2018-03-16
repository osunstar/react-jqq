import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';


class Progress extends Component {
  render() {
    return (
      <div>
       {this.props.Progress}
        </div>
    );
  }
}

export default Progress;
