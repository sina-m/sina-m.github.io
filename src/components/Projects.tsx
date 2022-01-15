import React, { useEffect, useState } from 'react';

import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, Button, List, Avatar, Space } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, MenuUnfoldOutlined, MenuFoldOutlined, StarOutlined, LikeOutlined, MessageOutlined, EyeOutlined, ForkOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

import sortify from '../resources/sortify.svg';
import dicey from '../resources/dicey.svg';

import { MenuInfo } from 'rc-menu/lib/interface';

export function Projects() {


  const IconText = ({ icon, text }: any) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  const listData = [
    {
      href: 'https://witty-forest-045651c10.azurestaticapps.net/',
      title: `Dicey`,
      avatar: dicey,
      description:
        'Arbitrary Dice Probability Calculator',
      content:
        'A simple probability calculator that allows creating dice of arbitrary size and faces',
      actions: { // get with https://api.github.com/repos/sina-m/sina-m.github.io
        star: 0,
        watch: 0,
        fork: 0,
      },
      extra: {
        src: 'https://joeschmoe.io/api/v1/female/random',
      }
    },
    {
      href: 'https://mango-plant-014f3e410.azurestaticapps.net/',
      title: `Sorty`,
      avatar: sortify,
      description:
        'Spotify Playlist Sorting Tool',
      content:
        'Sort your existing Spotify playlists into a newly generated one by using Spotify\'s own song metadata such as "energy" or "loudness"',
      actions: { // get with https://api.github.com/repos/sina-m/sina-m.github.io
        star: 0,
        watch: 0,
        fork: 0,
      },
      extra: {
        src: 'https://imgur.com/8GdllzP.png',
      }
    },
  ];
  const [menuItem, setMenuItem] = useState('0');
  const [firstCrumb, setFirstCrumb] = useState<JSX.Element>();

  useEffect(() => {
    switch (menuItem) {
      case '1':
        setFirstCrumb(
          <Breadcrumb.Item>Sortify</Breadcrumb.Item>
        )
        break;
      case '2':
        setFirstCrumb(
          <Breadcrumb.Item>Dicey</Breadcrumb.Item>
        )
        break;
      case '3':
        setFirstCrumb(
          <Breadcrumb.Item>Other</Breadcrumb.Item>
        )
        break;
      default:
        break;
    }
  }, [menuItem])

  function menuOnClick(info: MenuInfo): void {
    setMenuItem(info.key)
  }
  
  return (
    <Layout>
        
      {/* Use a list instead of this and rely on breadcrumbs. https://codesandbox.io/s/evydd?file=/index.js*/}
    {/* <Sider collapsed={subMenuCollapsed} className='site-layout-background'>
      <Menu
        mode='inline'
        defaultSelectedKeys={['1']}
        // defaultOpenKeys={['sub1']}
        selectedKeys={[menuItem]}
        inlineCollapsed={subMenuCollapsed}
        // style={{ height: '100%', borderRight: 0 }}
      >
          <Menu.Item key='0' onClick={toggleCollapsed} icon={subMenuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}></Menu.Item>
          <Menu.Item key='1' onClick={menuOnClick} icon={<UserOutlined />}>Sortify</Menu.Item>
          <Menu.Item key='2' onClick={menuOnClick} icon={<NotificationOutlined />} >Dicey Calc</Menu.Item>
          <Menu.Item key='3' onClick={menuOnClick} icon={<LaptopOutlined />} >GitHub?</Menu.Item>
        <SubMenu key='sub2' icon={<LaptopOutlined />} title='subnav 2'>
          <Menu.Item key='5'>option5</Menu.Item>
          <Menu.Item key='6'>option6</Menu.Item>
          <Menu.Item key='7'>option7</Menu.Item>
          <Menu.Item key='8'>option8</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider> */}
    <Layout style={{ padding: '0 24px 24px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Projects</Breadcrumb.Item>
        {firstCrumb}
        {/* <Breadcrumb.Item>App</Breadcrumb.Item> */}
      </Breadcrumb>
      <Content
        className='site-layout-background'
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 3,
          }}
          dataSource={listData}
          // footer={
          //   <div>
          //     <b>ant design</b> footer part
          //   </div>
          // }
          renderItem={item => (
            <List.Item
              key={item.title}
              actions={[
                <IconText icon={StarOutlined} text={item.actions.star} key="list-vertical-star-o" />,
                <IconText icon={EyeOutlined} text={item.actions.watch} key="list-vertical-like-o" />,
                <IconText icon={ForkOutlined} text={item.actions.fork} key="list-vertical-message" />,
              ]}
              // extra={
              //   <img
              //     width={272}
              //     height={153}
              //     alt="logo"
              //     src={item.extra.src}
              //     // src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              //   />
              // }
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} size={'large'}/>}
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
              />
              {item.content}
            </List.Item>
          )}
        />
      </Content>
    </Layout>
  </Layout>
    
  );
}
