import Stepper from '@Components/Stepper';
import StepperButton from '@Components/StepperButton';
import {CustomButton, CustomText, InputField} from '@SharedComponents/index';

import store from '@Store/store';
import {btnTextColor, colors} from '@assets/colors';
import {ArrowRightLong, UserLogin} from '@assets/icons';
import React, {useState} from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';

import {Provider} from 'react-redux';

const App = (): React.JSX.Element => {
  const [activeStep, setActiveStep] = useState<number>(1);
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <Provider store={store}>
        <View style={{padding: 10, backgroundColor: colors.white}}>
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

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <StepperButton
              onPress={() => {
                if (activeStep < 3) {
                  setActiveStep(activeStep + 1);
                }
              }}
            />
          </View>
          <Stepper activeStep={activeStep} />
        </View>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
