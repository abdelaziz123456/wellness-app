import {Text} from 'react-native';
import React from 'react';
import {TextProps} from '@Utiles/props';
import styles from './style';

const CustomText = ({text, type, color}: TextProps) => {
  return <Text style={styles({type, color}).text}>{text}</Text>;
};

export default CustomText;
