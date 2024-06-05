import MainStack from '@Navigators/MainStack';
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
        <StatusBar backgroundColor={'white'} barStyle="dark-content" />
        <Provider store={store}>
          <MainStack />
        </Provider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
