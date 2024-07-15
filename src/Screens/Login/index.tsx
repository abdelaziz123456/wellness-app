import {View, Platform, Pressable} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {spacing} from '@assets/spacing';
import CustomText from '@SharedComponents/CustomText';
import {CustomButton, InputField} from '@SharedComponents/index';
import {
  ArrowRightLong,
  Email,
  FacebookIcon,
  GoogleIcon,
  Locked,
} from '@assets/icons';
import {colors} from '@assets/colors';
import {useNavigation} from '@react-navigation/native';
import {WelcomeStackNavigationProp} from '@Utiles/props';

const Login = () => {
  const insets = useSafeAreaInsets();
  const [email, setEmail] = useState<string | undefined>('');
  const [pass, setPass] = useState<string | undefined>('');
  const navigation = useNavigation<WelcomeStackNavigationProp>();
  return (
    <View
      style={[
        styles.mainContainer,
        {paddingTop: Platform.OS == 'ios' ? insets.top : spacing.xxl},
      ]}>
      <View>
        <CustomText text="Create an account" type="head1" centered />
        <View style={styles.inputContainer}>
          <InputField
            placeHolder="Enter your e-mail here"
            label="E-mail"
            style={styles.inputField}
            leftIcon={<Email />}
            value={email}
            setValue={setEmail}
          />
          <InputField
            placeHolder="Place the password here"
            label="Password"
            style={styles.inputField}
            leftIcon={<Locked />}
            value={pass}
            setValue={setPass}
            pass
          />
        </View>
        <Pressable
          onPress={() => {
            navigation.navigate('EnterEmail');
          }}>
          <CustomText
            text="Forgot your password?"
            color={colors.purplePlum}
            type="body3"
            centered
          />
        </Pressable>
      </View>
      <View>
        <CustomButton
          type={'primary'}
          text="Log in"
          onPress={() => {}}
          size="regular"
          Icon={<ArrowRightLong stroke={colors.white} />}
        />
        <View style={styles.deviderContainer}>
          <View style={styles.deviderRule}></View>
          <CustomText text="Or" color={colors.deepBlue} type="body3" />
          <View style={styles.deviderRule}></View>
        </View>
        <View style={styles.iconsContainer}>
          <View style={styles.icon}>
            <GoogleIcon />
          </View>
          <View style={styles.icon}>
            <FacebookIcon />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            paddingBottom: 40,
          }}>
          <CustomText
            text="Don’t have an account yet ? "
            color={colors.deepBlue}
            type="body3"
          />
          <Pressable
            onPress={() => {
              navigation.navigate('signup');
            }}>
            <CustomText text="Sign up" color={colors.purplePlum} type="body3" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Login;
