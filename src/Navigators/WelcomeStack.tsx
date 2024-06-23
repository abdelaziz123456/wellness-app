import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import Welcome from '@Screens/Welcome';
import Onboarding from '@Screens/Onboarding';
import {WelcomeStackParamList} from '@Utiles/props';
import Signup from '@Screens/Signup';

const WelcomeStack = () => {
  const Stack = createStackNavigator<WelcomeStackParamList>();
  const insets = useSafeAreaInsets();

  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          presentation: 'card',
          ...TransitionPresets.SlideFromRightIOS,
        }}>
        <Stack.Screen name="welcome" component={Welcome} />
        <Stack.Screen name="onboarding" component={Onboarding} />
        <Stack.Screen name="signup" component={Signup} />
      </Stack.Navigator>
    </View>
  );
};

export default WelcomeStack;

const styles = StyleSheet.create({
  labelContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
});
