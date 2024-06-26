import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import CustomText from '@SharedComponents/CustomText';
import {ButtonProps} from '@Utiles/props';
import {styles} from './style';
import {btnTextColor} from '@assets/colors';

const CustomButton = ({
  text,
  onPress,
  type,
  size,
  Icon,
  customStyle,
}: ButtonProps) => {
  return size === 'regular' ? (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles(type).container,
        type == 'primary' ? styles(type).withShadow : {},
        customStyle,
      ]}>
      <View></View>
      <CustomText text={text} type={'btn1'} color={btnTextColor[type]} />
      <View>{Icon || <></>}</View>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      onPress={onPress}
      style={[styles(type).smallContainer, customStyle]}
      disabled={type.includes('Inactive')}>
      <CustomText text={text} type={'btn2'} color={btnTextColor[type]} />
    </TouchableOpacity>
  );
};

export default CustomButton;
