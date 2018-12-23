import React from 'react';
import { Heading, Text } from 'spectacle';
import bg4 from '../assets/bg4.jpg';

export default class RegularComponent extends React.Component {
  render() {
    console.log(bg4);
    return (
      <div style={{ backgroundImage: '../assets/bg4.jpg'}}>
        <Heading>前端异常监控</Heading>
        <br />
        <Text>Zhuo.Li</Text>
      </div>
    )
  }
}
