import React from 'react';

import 'antd/dist/antd.css';
import { List, Avatar, Space, Button } from 'antd';
import { GithubOutlined, GlobalOutlined } from '@ant-design/icons';


interface ProjectProps {
  setBreadCrumbs: React.Dispatch<React.SetStateAction<string[]>>;
  onClick: any;
  item: any;
}

const IconText = ({ icon, text,onClick }: any) => (
  <Space onClick={onClick}>
    {React.createElement(icon)}
    {text}
  </Space>
);

export function ProjectItem(props: ProjectProps): JSX.Element {
  return (
    <List.Item
      key={props.item.title}
      actions={[
        <Button type="link" key="list-item-more" size={'large'} onClick={() => props.setBreadCrumbs(['Projects', props.item.title])}>
          <IconText icon={GithubOutlined} text={'0'}/>
        </Button>,
        <Button type="link" key="list-item-more" size={'large'} href={props.item.href}>
          <IconText icon={GlobalOutlined} text={'Website'}/>
        </Button>,
      ]}
      // extra={
      //   <img
      //     width={272}
      //     height={153}
      //     alt="logo"
      //     src={item.extra.src}
      //     // src="https://example.com/img.png"
      //   />
      // }
    >
      <List.Item.Meta
        avatar={<Avatar src={props.item.avatar} size={'large'}/>}
        title={<a onClick={() => { props.setBreadCrumbs(['Projects', props.item.title]), props.onClick(props.item.title)}}>{props.item.title}</a>}
        description={props.item.description}
      />
      {props.item.content}
    </List.Item>
  )
}
