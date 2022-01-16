import './App.css';

import React, { useEffect, useState } from 'react';
import { Layout, Menu, Breadcrumb, Grid } from 'antd';
import { MenuInfo } from 'rc-menu/lib/interface';

import { Home } from './components/Home';
import { Projects } from './components/Projects/Projects';
import Logo from './resources/profile.svg';


const { Header, Sider } = Layout;

export enum Pages {
  Home = 'Home',
  Projects = 'Projects'
}

export function App() {

  const [menuItem, setMenuItem] = useState(Pages.Home);
  const [page, setPage] = useState<JSX.Element>();
  const [breadCrumbs, setBreadCrumbs] = useState<string[]>([]);

  const screens = Grid.useBreakpoint();

  const MenuItems = (type: 'inline' | 'horizontal'): JSX.Element => {
    return (
      <>
        <img className='logos' src={Logo} alt="Logo" />
        <Menu mode={type} defaultSelectedKeys={[menuItem]}>
          <Menu.Item key={Pages.Home} onClick={menuOnClick}>Home</Menu.Item>
          <Menu.Item key={Pages.Projects} onClick={menuOnClick}>Projects</Menu.Item>
        </Menu>
      </>
    )
  }

  useEffect(() => {
    switch (menuItem) {
      case Pages.Home:
        setPage(<Home />);
        break;
      case Pages.Projects:
        setPage(<Projects setBreadCrumbs={setBreadCrumbs} />);
        break;
      default:
        break;
    }
    setBreadCrumbs([menuItem]);
  }, [menuItem])


  function menuOnClick(info: MenuInfo): void {
    setMenuItem(info.key as Pages)
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
            <Breadcrumb style={{ margin: '16px 0' }}>
              {breadCrumbs.map((item, index) => {
                return (<Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>)
              })}
            </Breadcrumb>
          }
          {page}
        </Layout>
      </Layout>
    </Layout>
  );
}

export default App;
