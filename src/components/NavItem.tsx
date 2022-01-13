import React from 'react';
import { Text } from '@fluentui/react/lib/Text';
import { IButtonStyles, IconButton } from '@fluentui/react/lib/Button';
import { FontWeights } from '@fluentui/style-utilities';


  
interface NavBarProps {
  isActive: boolean;
  name: string;
  onClick: () => void;
}

export function NavBarItem(props: NavBarProps): JSX.Element {

  const iconStyles: IButtonStyles = {
    root: {
      color: 'blue',
      margin: '0 20px',
      fontSize: 16,
      textUnderlinePosition: 'under',
      textDecoration: props.isActive ? 'underline' : '',
      fontWeight: FontWeights.regular,
    },
  };

  return (
    <IconButton styles={iconStyles} iconProps={{ iconName: props.name }} onClick={props.onClick} title={props.name} ariaLabel={props.name}>
      <Text>{props.name}</Text>
    </IconButton>
  );
}