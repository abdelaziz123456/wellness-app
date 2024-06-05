import React from 'react';
import HomeScreen from '@Screens/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Activities from '@Screens/Activities';
import Settings from '@Screens/Settings';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  ActivitiesActive,
  HomeIcon,
  HomeActive,
  ProgressIcon,
  ProgressActive,
  SettingIcon,
  SettingActive,
  ActivitiesIcon,
} from '@assets/icons';
import {colors} from '@assets/colors';
import Progress from '@Screens/Progress';

const MainStack = () => {
  const Tab = createBottomTabNavigator();
  const insets = useSafeAreaInsets();
  const ActiveIcons: {
    [key: string]: React.ReactNode;
  } = {
    home: <HomeActive />,
    setting: <SettingActive />,
    progress: <ProgressActive />,
    activities: <ActivitiesActive />,
  };

  const Icons: {
    [key: string]: React.ReactNode;
  } = {
    home: <HomeIcon />,
    setting: <SettingIcon />,
    progress: <ProgressIcon />,
    activities: <ActivitiesIcon />,
  };
  const TabBarIcon = (focused: boolean, tab: string) => {
    return (
      <View
        style={{
          ...styles.labelContainer,
          backgroundColor: focused ? colors.violetLight : colors.white,
        }}>
        {focused ? ActiveIcons[tab] : Icons[tab]}
      </View>
    );
  };
  return (
    <View style={{paddingTop: insets.top, flex: 1}}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 104,
            borderTopLeftRadius: 32,
            borderTopRightRadius: 32,
            shadowOffset: {
              width: 10,
              height: -10,
            },
            shadowOpacity: 0.25,
            shadowRadius: 10,
            shadowColor: colors.violetLight,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => TabBarIcon(focused, 'home'),
          }}
        />
        <Tab.Screen
          name="Progress"
          component={Progress}
          options={{
            tabBarIcon: ({focused}) => TabBarIcon(focused, 'progress'),
          }}
        />
        <Tab.Screen
          name="Activities"
          component={Activities}
          options={{
            tabBarIcon: ({focused}) => TabBarIcon(focused, 'activities'),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({focused}) => TabBarIcon(focused, 'setting'),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default MainStack;

const styles = StyleSheet.create({
  labelContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
});
