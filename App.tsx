import MainStack from '@Navigators/MainStack';
import WelcomeStack from '@Navigators/WelcomeStack';
import store from '@Store/store';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Provider} from 'react-redux';

const App = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <StatusBar hidden />
        <Provider store={store}>
          {/* <MainStack /> */}
          <WelcomeStack />
        </Provider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
