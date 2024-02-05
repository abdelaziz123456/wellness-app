import CustomButton from '@SharedComponents/CustomButton';
import CustomText from '@SharedComponents/CustomText';
import store from '@Store/store';
import {btnTextColor} from '@assets/colors';
import {ArrowRightLong} from '@assets/icons';
import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';

import {Provider} from 'react-redux';

const App = (): React.JSX.Element => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <Provider store={store}>
        <View style={{padding: 10}}>
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
        </View>
      </Provider>
    </SafeAreaView>
  );
};

export default App;
