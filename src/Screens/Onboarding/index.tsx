import {View, Text, Platform} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {OnboardingOne, OnboardingThree, OnboardingTwo} from '@assets/icons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CustomButton from '@SharedComponents/CustomButton';
import {spacing} from '@assets/spacing';
import CustomText from '@SharedComponents/CustomText';
import StepperButton from '@Components/StepperButton';
import Stepper from '@Components/Stepper';

const Onboarding = () => {
  const insets = useSafeAreaInsets();
  const [activeStep, setActiveStep] = useState<number>(1);
  const matchedIcon: {
    [key: number]: React.ReactNode;
  } = {
    1: <OnboardingOne />,
    2: <OnboardingTwo />,
    3: <OnboardingThree />,
  };
  return (
    <View
      style={{
        ...styles.mainContainer,
        paddingTop: Platform.OS == 'ios' ? insets.top : spacing.xl,
      }}>
      <View style={styles.btnContainer}>
        <CustomButton
          size="small"
          text="Skip intro"
          type="secondary"
          onPress={() => {}}
          customStyle={styles.btnStyle}
        />
      </View>

      <View>
        <View style={styles.iconContainer}>{matchedIcon[activeStep]}</View>
        <CustomText
          text={`Keep calm and stay \nin control`}
          type="head1"
          style={{textAlign: 'center'}}
        />
        <CustomText
          text={`You can check your health with just one \nlook.`}
          type="body1"
          style={{textAlign: 'center', marginTop: 20}}
        />
      </View>

      <View style={{alignItems: 'center'}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <StepperButton
            onPress={() => {
              if (activeStep < 3) {
                setActiveStep(activeStep + 1);
              }
            }}
          />
        </View>
        <Stepper activeStep={activeStep} stepperWidth={250} />
      </View>
    </View>
  );
};

export default Onboarding;
