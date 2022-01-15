import React, { useEffect, useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { MenuInfo } from 'rc-menu/lib/interface';

import { Home } from './components/Home';
import { Projects } from './components/Projects';
import Logo from './resources/profile.svg';

import './App.css';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export function App() {

  const [menuItem, setMenuItem] = useState('1');
  const [page, setPage] = useState<JSX.Element>();

  useEffect(() => {
    switch (menuItem) {
      case '1':
        setPage(<Home />);
        break;
      case '2':
        setPage(<Projects />);
        break;
      default:
        break;
    }
  }, [menuItem])


  function menuOnClick(info: MenuInfo): void {
    setMenuItem(info.key)
    // switch (info.key) {
    //   case '1':
    //     setPage(<Home />);
    //     break;
    //   case '2':
    //     setPage(<Projects />);
    //     break;
    //   default:
    //     break;
    // }
  }

  return (
    <Layout>
      <Header style={{padding: 0}} className='header'>
        <img className='logos' src={Logo} alt="Logo" />
        {/* <div className='logo'>
          <img src={Logo} alt="Logo" />
        </div> */}
        <Menu mode='horizontal' defaultSelectedKeys={[menuItem]}>
          <Menu.Item key='1' onClick={menuOnClick}>Home</Menu.Item>
          <Menu.Item key='2' onClick={menuOnClick}>Projects</Menu.Item>
          {/* <Menu.Item key='3' onClick={menuOnClick}>About</Menu.Item> */}
        </Menu>
      </Header>
      {page}
      <Layout>
        
        {/* <Sider width={200} className='site-layout-background'>
          <Menu
            mode='inline'
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
              <Menu.Item key='1' icon={<UserOutlined />}>option1</Menu.Item>
              <Menu.Item key='2' icon={<NotificationOutlined />} >option2</Menu.Item>
              <Menu.Item key='3' icon={<LaptopOutlined />} >option3</Menu.Item>
            <SubMenu key='sub2' icon={<LaptopOutlined />} title='subnav 2'>
              <Menu.Item key='5'>option5</Menu.Item>
              <Menu.Item key='6'>option6</Menu.Item>
              <Menu.Item key='7'>option7</Menu.Item>
              <Menu.Item key='8'>option8</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider> */}
      </Layout>
    </Layout>
  );
}

export default App;
