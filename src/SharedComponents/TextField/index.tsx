import {View, Text, TextInput, Pressable} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {colors} from '@assets/colors';
import {CustomText} from '..';
import {
  HidePassword,
  LabelErrorIcon,
  LableSuccessIcon,
  ShowPassword,
} from '@assets/icons';
import {InputFieldProps} from '@Utiles/props';

const InputField = ({
  leftIcon,
  placeHolder,
  label,
  errorMessage,
  state,
  keyboardType = 'default',
  style,
  value,
  setValue,
  pass,
}: InputFieldProps) => {
  const [focused, setFocused] = useState(false);

  const [hidePass, setHidePass] = useState(false);

  const borderColor = {
    success: {borderColor: colors.turquoise},
    error: {borderColor: colors.alert},
    disabled: {borderColor: colors.lightGray},
  };

  const stateIcon = {
    error: <LabelErrorIcon />,
    success: <LableSuccessIcon />,
  };

  return (
    <View style={[styles.mainWrapper, style]}>
      <Text>{label}</Text>
      <View
        style={[
          styles.container,
          focused && {borderColor: colors.violet},
          state && borderColor[state],
        ]}>
        {leftIcon}
        <TextInput
          keyboardType={keyboardType}
          editable={state !== 'disabled'}
          style={{flex: 1, marginLeft: 5}}
          placeholder={placeHolder}
          secureTextEntry={hidePass}
          placeholderTextColor={colors.darkGrey}
          value={value}
          onChangeText={setValue}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
        />
        {pass && (
          <Pressable
            onPress={() => {
              setHidePass(!hidePass);
            }}>
            {hidePass ? <ShowPassword /> : <HidePassword />}
          </Pressable>
        )}
        {(state == 'error' || state == 'success') && stateIcon[state]}
      </View>
      {errorMessage && (
        <CustomText color={colors.alert} text={errorMessage} type="body3" />
      )}
    </View>
  );
};

export default InputField;
