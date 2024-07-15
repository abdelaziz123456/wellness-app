import {View, Platform} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {spacing} from '@assets/spacing';
import CustomText from '@SharedComponents/CustomText';
import {CustomButton, InputField} from '@SharedComponents/index';
import {ArrowRightLong, Locked} from '@assets/icons';
import {colors} from '@assets/colors';
import {useNavigation} from '@react-navigation/native';
import {WelcomeStackNavigationProp} from '@Utiles/props';
import {containsSymbol, hasUpperAndLower} from '@Utiles/utiles';
import {ErrorMessage} from '@Screens/Signup';

const NewPass = () => {
  const insets = useSafeAreaInsets();
  const [email, setEmail] = useState<string | undefined>('');
  const navigation = useNavigation<WelcomeStackNavigationProp>();
  const [pass, setPass] = useState<string | undefined>('');
  return (
    <View
      style={[
        styles.mainContainer,
        {paddingTop: Platform.OS == 'ios' ? insets.top : spacing.xxl},
      ]}>
      <View>
        <CustomText text="Enter a new password" type="head1" centered />
        <View style={styles.inputContainer}>
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
      </View>
      <View>
        <CustomButton
          type={'primary'}
          text="Confirm password"
          onPress={() => {
            navigation.navigate('SuccessChange');
          }}
          size="regular"
          Icon={<ArrowRightLong stroke={colors.white} />}
        />
      </View>
    </View>
  );
};

export default NewPass;
