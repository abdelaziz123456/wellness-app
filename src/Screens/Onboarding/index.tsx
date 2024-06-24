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
import {useNavigation} from '@react-navigation/native';
import {WelcomeStackNavigationProp} from '@Utiles/props';

const Onboarding = () => {
  const insets = useSafeAreaInsets();
  const [activeStep, setActiveStep] = useState<number>(1);
  const matchedIcon: {
    [key: number]: {svg: React.ReactNode; title: string; subTitle: string};
  } = {
    1: {
      svg: <OnboardingOne />,
      title: 'Keep calm and stay in control',
      subTitle: 'You can check your health with just one look.',
    },
    2: {
      svg: <OnboardingTwo />,
      title: 'Don’t miss a single \npill, ever!',
      subTitle: 'Plan your supplementation in details.',
    },
    3: {
      svg: <OnboardingThree />,
      title: `Exercise more \n& breathe better`,
      subTitle: 'Learn, measure, set daily goals.',
    },
  };

  const navigation = useNavigation<WelcomeStackNavigationProp>();
  return (
    <View
      style={{
        ...styles.mainContainer,
        paddingTop: Platform.OS == 'ios' ? insets.top : spacing.xl,
      }}>
      <View style={styles.btnContainer}>
        <View
          style={{
            alignItems: 'flex-end',
            width: '100%',
          }}>
          <CustomButton
            size="small"
            text="Skip intro"
            type="secondary"
            onPress={() => {
              navigation.navigate('signup');
            }}
            customStyle={styles.btnStyle}
          />
        </View>

        <View style={styles.iconContainer}>{matchedIcon[activeStep].svg}</View>
        <CustomText
          text={matchedIcon[activeStep].title}
          type="head1"
          centered
        />
        <CustomText
          text={matchedIcon[activeStep].subTitle}
          type="body1"
          centered
          style={{marginTop: 20}}
        />
      </View>

      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 40,
          }}>
          <StepperButton
            onPress={() => {
              if (activeStep < 3) {
                setActiveStep(activeStep + 1);
              } else {
                navigation.navigate('signup');
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
