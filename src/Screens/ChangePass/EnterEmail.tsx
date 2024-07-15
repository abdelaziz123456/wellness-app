import {View, Platform} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {spacing} from '@assets/spacing';
import CustomText from '@SharedComponents/CustomText';
import {CustomButton, InputField} from '@SharedComponents/index';
import {ArrowRightLong, Email} from '@assets/icons';
import {colors} from '@assets/colors';
import {useNavigation} from '@react-navigation/native';
import {WelcomeStackNavigationProp} from '@Utiles/props';

const EnterEmail = () => {
  const insets = useSafeAreaInsets();
  const [email, setEmail] = useState<string | undefined>('');
  const navigation = useNavigation<WelcomeStackNavigationProp>();
  return (
    <View
      style={[
        styles.mainContainer,
        {paddingTop: Platform.OS == 'ios' ? insets.top : spacing.xxl},
      ]}>
      <View>
        <CustomText text="Create an account" type="head1" centered />
        <CustomText
          text={`You will receive a link to confirm the password\n change to the e-mail address provided`}
          type="body2"
          centered
          style={{marginTop: 20}}
          color={colors.darkGrey}
        />
        <View style={styles.inputContainer}>
          <InputField
            placeHolder="Enter your e-mail here"
            label="E-mail"
            style={styles.inputField}
            leftIcon={<Email />}
            value={email}
            setValue={setEmail}
          />
        </View>
      </View>
      <View>
        <CustomButton
          type={'primary'}
          text="Confirm e-mail"
          onPress={() => {
            navigation.navigate('ChangePass');
          }}
          size="regular"
          Icon={<ArrowRightLong stroke={colors.white} />}
        />
      </View>
    </View>
  );
};

export default EnterEmail;
