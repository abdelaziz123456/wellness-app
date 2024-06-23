import {Dimensions, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

type Props = {
  activeStep: number;
  stepperWidth: number;
};
const Stepper = ({activeStep, stepperWidth}: Props) => {
  const width = useSharedValue(stepperWidth / 3);

  return (
    <View style={styles(stepperWidth).container}>
      <Animated.View
        style={[
          styles(stepperWidth).active,
          useAnimatedStyle(() => ({
            width: withSpring(width.value * activeStep),
            height: 4,
          })),
        ]}></Animated.View>
    </View>
  );
};

export default Stepper;
