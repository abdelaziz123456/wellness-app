import Stepper from '@Components/Stepper';
import StepperButton from '@Components/StepperButton';
import {
  CustomButton,
  CustomDropdown,
  CustomText,
  InputField,
} from '@SharedComponents/index';

import store from '@Store/store';
import {btnTextColor, colors} from '@assets/colors';
import {ArrowRightLong, UserLogin} from '@assets/icons';
import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';

import {Provider} from 'react-redux';
const data = [
  {value: 'Item 1', label: 1},
  {value: 'Item 2', label: 2},
  {value: 'Item 3', label: 3},
  {value: 'Item 4', label: 4},
  {value: 'Item 5', label: 5},
  {value: 'Item 6', label: 6},
  {value: 'Item 7', label: 7},
  {value: 'Item 8', label: 8},
];
const App = (): React.JSX.Element => {
  const [activeStep, setActiveStep] = useState<number>(1);
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <Provider store={store}>
        <ScrollView style={{padding: 10, backgroundColor: colors.white}}>
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
        </ScrollView>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
