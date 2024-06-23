import {Text} from 'react-native';
import React from 'react';
import {TextProps} from '@Utiles/props';
import styles from './style';

const CustomText = ({text, type, color, style, centered}: TextProps) => {
  return (
    <Text
      style={[
        styles({type, color}).text,
        style,
        centered && {textAlign: 'center'},
      ]}>
      {text}
    </Text>
  );
};

export default CustomText;
