import {Dimensions, Pressable, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

type Props = {
  activeStep: number;
};
const Stepper = ({activeStep}: Props) => {
  const screenWidth = Dimensions.get('screen').width;
  const width = useSharedValue(screenWidth / 3);

  const caclulated = Number(width.value.toFixed(0)) * activeStep;

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.active,
          useAnimatedStyle(() => ({
            width: withSpring(width.value * activeStep),
          })),
          {maxWidth: '96%'},
        ]}></Animated.View>
      <Text>{caclulated}</Text>
    </View>
  );
};

export default Stepper;
