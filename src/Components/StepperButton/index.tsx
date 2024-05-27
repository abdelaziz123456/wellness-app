import {TouchableOpacity} from 'react-native';
import React from 'react';
import {ArrowRightLong} from '@assets/icons';
import {btnTextColor} from '@assets/colors';
import styles from './styles';
type Props = {
  onPress: () => void;
};
const StepperButton = ({onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ArrowRightLong stroke={btnTextColor['primary']} />
    </TouchableOpacity>
  );
};

export default StepperButton;
