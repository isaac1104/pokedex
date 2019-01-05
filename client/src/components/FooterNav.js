import React from 'react';
import { Divider, Icon, Layout } from 'antd';
const { Footer } = Layout;

const FooterNav = () => {
  const style = {
    textAlign: 'center',
    position: 'fixed',
    width: '100%',
    bottom: 0,
    backgroundColor: '#202225',
    color: '#fff'
  };

  return (
    <Footer style={style}>
      PokeDex ©2019 by Isaac Kwon
      <Divider type='vertical' />
      <a href='https://github.com/isaac1104'>
        <Icon type='github' />
      </a>
      <Divider type='vertical' />
      <a href='https://www.linkedin.com/in/isaac-kwon/'>
        <Icon type='linkedin' />
      </a>
    </Footer>
  );
}

export default FooterNav;
