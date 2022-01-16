import React from 'react';
import { Divider, Layout, Typography } from 'antd';

const { Paragraph, Link } = Typography;
const { Content } = Layout;


export function Home() {
  return (
    <Content
      className='site-layout-background'
      style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
      }}
    >
      <Typography>
        <Paragraph>
          I sometimes build stuff
        </Paragraph>
        <Paragraph>
        ¯\_(ツ)_/¯
        </Paragraph>

        <Divider />

        <Link strong code href="https://www.linkedin.com/in/sinamoradian">LinkedIn</Link>
        <Link strong code href="https://github.com/sina-m">GitHub</Link>
      </Typography>
    </Content>
  );
}
