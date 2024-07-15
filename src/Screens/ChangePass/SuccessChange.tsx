import {View, Platform} from 'react-native';
import React from 'react';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {spacing} from '@assets/spacing';
import CustomText from '@SharedComponents/CustomText';
import {CustomButton} from '@SharedComponents/index';
import {ArrowRightLong, PassChanged} from '@assets/icons';
import {colors} from '@assets/colors';
import {useNavigation} from '@react-navigation/native';
import {WelcomeStackNavigationProp} from '@Utiles/props';

const SuccessChange = () => {
  const insets = useSafeAreaInsets();

  const navigation = useNavigation<WelcomeStackNavigationProp>();

  return (
    <View
      style={[
        styles.mainContainer,
        {paddingTop: Platform.OS == 'ios' ? insets.top : spacing.xxl},
      ]}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <PassChanged />
        <CustomText
          text={`Your password has \nbeen changed`}
          type="head2"
          centered
          style={{marginTop: 40}}
        />
      </View>
      <View>
        <CustomButton
          type={'primary'}
          text="Log in"
          onPress={() => {
            navigation.navigate('Login');
          }}
          size="regular"
          Icon={<ArrowRightLong stroke={colors.white} />}
        />
      </View>
    </View>
  );
};

export default SuccessChange;
