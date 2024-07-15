import {View, Platform, Pressable} from 'react-native';
import React, {useState} from 'react';
import {spacing} from '@assets/spacing';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CustomText from '@SharedComponents/CustomText';
import {CustomButton, InputField} from '@SharedComponents/index';
import {colors} from '@assets/colors';
import styles from './styles';
import {
  ArrowRightLong,
  Email,
  ErrorSign,
  FacebookIcon,
  GoogleIcon,
  Locked,
  UserLogin,
} from '@assets/icons';
import {containsSymbol, hasUpperAndLower} from '@Utiles/utiles';
import Terms from '@Components/Terms';
import {useNavigation} from '@react-navigation/native';
import {WelcomeStackNavigationProp} from '@Utiles/props';

export const ErrorMessage = (message: string) => {
  return (
    <View style={{flexDirection: 'row', marginBottom: 8}}>
      <ErrorSign />
      <CustomText
        type="body3"
        text={message}
        color={colors.darkGrey}
        style={{marginLeft: spacing.s}}
      />
    </View>
  );
};

const Signup = () => {
  const insets = useSafeAreaInsets();
  const [name, setName] = useState<string | undefined>('');
  const [email, setEmail] = useState<string | undefined>('');
  const [pass, setPass] = useState<string | undefined>('');
  const [checked, setChecked] = useState<boolean>(false);
  const navigation = useNavigation<WelcomeStackNavigationProp>();

  return (
    <View
      style={{
        paddingTop: Platform.OS == 'ios' ? insets.top : spacing.xxl,
        ...styles.mainContainer,
      }}>
      <CustomText text="Create an account" type="head1" centered />
      <View style={styles.inputContainer}>
        <InputField
          placeHolder="Enter your name"
          label="Full Name"
          style={styles.inputField}
          leftIcon={<UserLogin />}
          value={name}
          setValue={setName}
        />
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
        {(pass && pass?.length > 8) || ErrorMessage('At least 8 characters')}
        {hasUpperAndLower(pass ? pass : '') ||
          ErrorMessage('Both uppercase and lowercase characters')}
        {containsSymbol(pass ? pass : '') ||
          ErrorMessage('At least one number or symbol')}
      </View>
      <View style={styles.termsContainer}>
        <Terms
          checked={checked}
          setChecked={setChecked}
          text={`By continuing you accept our Privacy Policy and \nTerm of Use`}
        />
      </View>

      <CustomButton
        type={'primary'}
        text="Sign Up"
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

      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <CustomText
          text="Already have an account ? "
          color={colors.deepBlue}
          type="body3"
        />
        <Pressable
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <CustomText text="Login" color={colors.purplePlum} type="body3" />
        </Pressable>
      </View>
    </View>
  );
};

export default Signup;
