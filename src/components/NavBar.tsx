import React, { useEffect, useState } from 'react';
import { Layer } from '@fluentui/react/lib/Layer';
import { Text } from '@fluentui/react/lib/Text';
import { IButtonStyles, IconButton } from '@fluentui/react/lib/Button';
import { Icon } from '@fluentui/react/lib/Icon';
import { useBoolean } from '@fluentui/react-hooks';
import { AnimationClassNames, FontWeights, mergeStyles } from '@fluentui/style-utilities';
import { Panel } from '@fluentui/react/lib/Panel'
import { initializeIcons } from '@fluentui/react/lib/Icons';

import { NavBarItem } from './NavItem'
import { Stack } from '@fluentui/react/lib/Stack';
import { ResizeGroup } from '@fluentui/react/lib/ResizeGroup';

initializeIcons('https://static2.sharepointonline.com/files/fabric/assets/icons/');


interface NavBarProps {
  hostId?: string;
}

export function NavBar(props: NavBarProps): JSX.Element {

  const [isPanelOpen, { toggle: togglePanel }] = useBoolean(false);
  // const [isVertical, { setTrue: setVertical, setFalse: setHorizontal }] = useBoolean(false);
  const [horizontalNav, { setTrue: setHorizontalNav, setFalse: setVerticalNav }] = useBoolean(true);
  // const [isVertical, { toggle: toggleVert }] = useBoolean(false);
  const [navItem, setNavItem] = useState(0);
  
  const [scrollState, setScrollState] = React.useState('top');
  const [colorOpacity,setColorOpacity] = React.useState(0);


  const contentClass = mergeStyles([
    {
        backgroundColor:'whitesmoke',
        color:'black',
        lineHeight:'50px',
        padding:'0 20px',
        opacity:'0'

    },
    AnimationClassNames.scaleUpIn100,
  ]);

  const [navWidth, setNavWidth] = useState(20);


  const iconStyles: IButtonStyles = {
    root: {
      width: navWidth,
      color: 'blue',
      margin: '0 20px',
      fontSize: 16,
      textUnderlinePosition: 'under',
      // textDecoration: props.isActive ? 'underline' : '',
      fontWeight: FontWeights.regular,
    },
  };

  const navLabels = ['About', 'Projects', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item', 'Item']
  const data = { navItems: navLabels.map((label, index) => <NavBarItem key={index} styles={iconStyles} name={label} onClick={() => setNavItem(index)} isActive={navItem === index}/>)
    // [
    //   <NavBarItem key={0} name='About' onClick={() => setNavItem(0)} isActive={navItem === 0}/>,
    //   <NavBarItem key={1} name='Projects' onClick={() => setNavItem(1)} isActive={navItem === 1}/>,
    // ]
  }

  const onReduceData = (currentData: any) => {
    if (currentData.navItems.length < 5) {
      return undefined;
    }
    console.log('reduce')
    console.log(currentData)
    setVerticalNav()
    return currentData;
  };

  const onGrowData = (currentData: any) => {
    if (currentData.navItems.length > 5) {
      return undefined;
    }
    console.log('grow')
    console.log(currentData)
    setHorizontalNav()
    return currentData;
  };

  return (
    <div>
      <Layer>
        <ResizeGroup
        data={data}
        onReduceData={onReduceData}
        onGrowData={onGrowData}
        onRenderData={(data: any) => {

          return (
            <Stack horizontal={horizontalNav} className={contentClass}>
              {data.navItems}
              {/* {Object.values(data).map((name: any) => {
                console.log(<NavBarItem name={name} onClick={() => setNavItem(0)} isActive={navItem === 0}/>);
                <NavBarItem name={name} onClick={() => setNavItem(0)} isActive={navItem === 0}/>
              })} */}
            </Stack>
          )
        }
        }
        >
          {/* <Stack horizontal={true} className={contentClass}>
            <NavBarItem name='About' onClick={() => setNavItem(0)} isActive={navItem === 0}/>
            <NavBarItem name='Projects' onClick={() => setNavItem(1)} isActive={navItem === 1}/>


            <NavBarItem name='Toggle Vert' isVertical={isVertical} onClick={toggleVert} isActive={false}/>
          </Stack> */}
        </ResizeGroup>
      </Layer>
      {isPanelOpen && (
        <Panel
          isOpen
          hasCloseButton
          headerText='Cart'
          onDismiss={togglePanel}
        />
      )}
  </div>
  );
}