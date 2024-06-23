import {View, Platform} from 'react-native';
import React, {useState} from 'react';
import {spacing} from '@assets/spacing';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CustomText from '@SharedComponents/CustomText';
import {InputField} from '@SharedComponents/index';
import {colors} from '@assets/colors';
import styles from './styles';
import {Email, ErrorSign, Locked, UserLogin} from '@assets/icons';
import {containsSymbol, hasUpperAndLower} from '@Utiles/utiles';

const Signup = () => {
  const insets = useSafeAreaInsets();
  const [name, setName] = useState<string | undefined>('');
  const [email, setEmail] = useState<string | undefined>('');
  const [pass, setPass] = useState<string | undefined>('');
  const [checked, setChecked] = useState<boolean>(false);
  const ErrorMessage = (message: string) => {
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
        />
        {(pass && pass?.length > 8) || ErrorMessage('At least 8 characters')}
        {hasUpperAndLower(pass ? pass : '') ||
          ErrorMessage('Both uppercase and lowercase characters')}
        {containsSymbol(pass ? pass : '') ||
          ErrorMessage('At least one number or symbol')}
      </View>
    </View>
  );
};

export default Signup;
