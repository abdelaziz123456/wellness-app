import {View} from 'react-native';
import React from 'react';
import {MainLogo} from '@assets/icons';
import styles from './styles';
import CustomText from '@SharedComponents/CustomText';
import {colors} from '@assets/colors';
import CustomButton from '@SharedComponents/CustomButton';
import ArrowLongRight from '@assets/icons/arrowLongRight';
import {useNavigation} from '@react-navigation/native';
import {WelcomeStackNavigationProp} from '@Utiles/props';

const Welcome = () => {
  const navigation = useNavigation<WelcomeStackNavigationProp>();
  return (
    <View style={styles.mainContainer}>
      <View></View>
      <View style={styles.centerContainer}>
        <MainLogo />

        <CustomText
          type="head1"
          text={`Welcome to \nOneLook`}
          style={styles.centerText}
          color={colors.deepBlue}
        />
        <CustomText
          type="body1"
          text={`Just take a look and take action!`}
          color={colors.deepBlue}
        />
      </View>
      <View>
        <CustomButton
          text="Let’s start"
          type="primary"
          onPress={() => {
            navigation.navigate('onboarding');
          }}
          size="regular"
          Icon={<ArrowLongRight stroke={colors.white} />}
        />
      </View>
    </View>
  );
};

export default Welcome;
