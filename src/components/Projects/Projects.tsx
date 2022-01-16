import 'antd/dist/antd.css';

import React, { useState } from 'react';
import { Button, Layout, List, Space } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

import { ProjectItem } from './ProjectItem';
import { ProjectData } from '../../resources/ProjectData'
import { Pages } from '../../App';

const { Content } = Layout;

interface ProjectsProps {
  setBreadCrumbs: React.Dispatch<React.SetStateAction<string[]>>
}

export function Projects(props: ProjectsProps) {

  const [SelectedProjectItem, setSelectedProjectItem ]= useState<string>('')

  const IconText = ({ icon, text,onClick }: any) => (
    <Space onClick={onClick}>
      {React.createElement(icon)}
      {text}
    </Space>
  );
  
  return (
    <Content
      className='site-layout-background'
      style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
      }}
    >
      {
      SelectedProjectItem
      ?
      <>
        <Button type="link" key="list-item-more" size={'large'} onClick={() => {props.setBreadCrumbs([Pages.Projects]); setSelectedProjectItem('')}}>
          <IconText icon={ArrowLeftOutlined} text={'Back'}/>
        </Button>
        Work in progress
        {/* <ProjectItem item={ProjectData.find(i => i.title === SelectedProjectItem)} setBreadCrumbs={props.setBreadCrumbs} onClick={setSelectedProjectItem}/> */}
      </>
      :
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 3,
          }}
          dataSource={ProjectData}
          renderItem={item => <ProjectItem item={item} setBreadCrumbs={props.setBreadCrumbs} onClick={setSelectedProjectItem}/>}
        />
      }
    </Content>
  );
}
