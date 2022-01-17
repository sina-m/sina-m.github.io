import '../App.css';

import React, { useEffect, useState } from 'react';
import { Layout, Menu, Breadcrumb, Grid, Button } from 'antd';
import { MenuInfo } from 'rc-menu/lib/interface';

import Logo from '../resources/profile.svg';
import { useNavigate } from 'react-router-dom';


const { Header, Sider } = Layout;

export enum Routes {
  Home = 'home',
  Projects = 'projects'
}

interface PageProps { // extends PropsWithChildren<JSX.Element> {
  children: JSX.Element;
  path: Routes[];
}

function Page(props: PageProps) {//function Page(props: PageProps) {
  const navigate = useNavigate();

  const [menuItem, setMenuItem] = useState(props.path[0]);

  const screens = Grid.useBreakpoint();

  const MenuItems = (type: 'inline' | 'horizontal'): JSX.Element => {
    return (
      <>
        <img className='logos' src={Logo} alt="Logo" />
        <Menu mode={type} defaultSelectedKeys={[menuItem]}>
          <Menu.Item key={Routes.Home} onClick={menuOnClick}>Home</Menu.Item>
          <Menu.Item key={Routes.Projects} onClick={menuOnClick}>Projects</Menu.Item>
        </Menu>
      </>
    )
  }

  function menuOnClick(info: MenuInfo): void {
    setMenuItem(info.key as Routes)
    navigate(`/${info.key}`);
  }
  useEffect(() => {
    console.log(screens)
  }, [screens])

  return (
    <Layout>
      {
        screens.lg &&
        <Header style={{padding: 0}} className='header'>
          {MenuItems('horizontal')}
        </Header>
      }

      <Layout>
        {
          !screens.lg &&
          <Sider
            style={{background: '#fff', minHeight: '100vh' }}
            breakpoint="md"
            collapsedWidth="0"
          >
            {MenuItems('inline')}
          </Sider>
        }
        <Layout style={{ padding: '0 24px 0 24px', minHeight: !screens.lg ? '100vh' : '93.5vh' }}>
          {
            screens.lg &&
            <Breadcrumb style={{ margin: '16px 0', textTransform: 'capitalize' }}>
              {props.path.map((item, index, arr) => {
                const path = arr.slice(0, index+1).map(i => `/${i}`).join('');
                return <Breadcrumb.Item key={index} href={path} onClick={() => navigate(path)}>{item}</Breadcrumb.Item>
              })}
            </Breadcrumb>
          }
          {props.children}
        </Layout>
      </Layout>
    </Layout>
  );
}

export default Page;
