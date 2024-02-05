import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import CustomText from '@SharedComponents/CustomText';
import {ButtonProps} from '@Utiles/props';
import {styles} from './style';
import {btnTextColor} from '@assets/colors';

const CustomButton = ({text, onPress, type, size, Icon}: ButtonProps) => {
  return size === 'regular' ? (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles(type).container,
        ...(type == 'primary' ? styles(type).withShadow : {}),
      }}>
      <View></View>
      <CustomText text={text} type={'btn1'} color={btnTextColor[type]} />
      <View>{Icon || <></>}</View>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      onPress={onPress}
      style={{...styles(type).smallContainer}}>
      <CustomText text={text} type={'btn2'} color={btnTextColor[type]} />
    </TouchableOpacity>
  );
};

export default CustomButton;
