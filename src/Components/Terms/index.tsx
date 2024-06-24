import {View, Text, Pressable} from 'react-native';
import React, {Dispatch} from 'react';
import styles from './styles';
import CustomText from '@SharedComponents/CustomText';
import {colors} from '@assets/colors';
import {Checked} from '@assets/icons';
type Props = {
  checked: boolean;
  setChecked: Dispatch<boolean>;
  text: string;
};
const Terms = ({checked, setChecked, text}: Props) => {
  return (
    <Pressable
      onPress={() => {
        setChecked(!checked);
      }}
      style={styles.mainContainer}>
      <View style={styles.box}>{checked && <Checked />}</View>
      <CustomText text={text} type="body3" color={colors.darkGrey} />
    </Pressable>
  );
};

export default Terms;
