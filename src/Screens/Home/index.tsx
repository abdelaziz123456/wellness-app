import {View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomDropdown from '@SharedComponents/CustomDropdown';
import {btnTextColor, colors} from '@assets/colors';
import InputField from '@SharedComponents/TextField';
import {ArrowRightLong, UserLogin} from '@assets/icons';
import CustomText from '@SharedComponents/CustomText';
import CustomButton from '@SharedComponents/CustomButton';
import StepperButton from '@Components/StepperButton';
import Stepper from '@Components/Stepper';
import {data} from '@Utiles/fakers';

const Home = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <ScrollView
      style={{
        padding: 10,
        paddingBottom: 150,
        backgroundColor: colors.white,
      }}>
      <CustomDropdown data={data} label={'select age'} />
      <InputField
        leftIcon={<UserLogin />}
        placeHolder="Type your name"
        label={'username'}
      />
      <InputField
        leftIcon={<UserLogin />}
        placeHolder="Type your name"
        label={'username'}
        errorMessage="error"
        state="error"
      />
      <InputField
        leftIcon={<UserLogin />}
        placeHolder="Type your name"
        label={'username'}
        state="success"
      />
      <InputField
        leftIcon={<UserLogin />}
        placeHolder="Type your name"
        label={'username'}
        state="disabled"
      />

      <CustomText text="hello" type="body1b" />
      <CustomText text="hello" type="body1" />
      <CustomText text="hello" type="body2b" />
      <CustomText text="hello" type="body2" />
      <CustomText text="hello" type="body3" />
      <CustomText text="hello" type="body3b" />
      <CustomText text="hello" type="body1b" />
      <CustomText text="hello" type="head1" />
      <CustomButton
        text="Let's start"
        size="regular"
        onPress={() => {}}
        type="primary"
        Icon={<ArrowRightLong stroke={btnTextColor['primary']} />}
      />
      <CustomButton
        text="Let's start"
        size="regular"
        onPress={() => {}}
        type="secondary"
        Icon={<ArrowRightLong stroke={btnTextColor['primary']} />}
      />
      <CustomButton
        text="Let's start"
        size="regular"
        onPress={() => {}}
        type="primary"
      />
      <CustomButton
        text="Let's start"
        size="small"
        onPress={() => {}}
        type="primary"
      />
      <CustomButton
        text="Let's start"
        size="small"
        onPress={() => {}}
        type="primaryInactive"
      />
      <CustomButton
        text="Let's start"
        size="small"
        onPress={() => {}}
        type="secondaryInactive"
      />

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
            }
          }}
        />
      </View>
      <Stepper activeStep={activeStep} stepperWidth={200} />
    </ScrollView>
  );
};

export default Home;
