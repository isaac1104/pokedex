import React from 'react';
import { Divider, Layout } from 'antd';
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
        <i className='nes-icon github is-small' />
      </a>
      <Divider type='vertical' />
      <a href='https://www.linkedin.com/in/isaac-kwon/'>
        <i className='nes-icon linkedin is-small' />
      </a>
    </Footer>
  );
}

export default FooterNav;
