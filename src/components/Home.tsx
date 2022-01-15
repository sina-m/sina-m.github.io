import React from 'react';
import { Divider, Layout, Menu, Breadcrumb, Typography } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text, Link } = Typography;
const { Content } = Layout;


export function Home() {
  return (
    <Layout style={{ padding: '0 24px 24px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        {/* <Breadcrumb.Item>Home</Breadcrumb.Item> */}
      </Breadcrumb>
      <Content
        className='site-layout-background'
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <Typography>
          {/* <Title level={3}>About Me</Title> */}
          <Paragraph>
            I sometimes build stuff for myself
          </Paragraph>
          <Paragraph>
          ¯\_(ツ)_/¯
          </Paragraph>

          <Divider />

          <Link strong code href="https://www.linkedin.com/in/sinamoradian">LinkedIn</Link>
          <Link strong code href="https://github.com/sina-m">GitHub</Link>
        </Typography>
      </Content>
    </Layout>
  );
}
