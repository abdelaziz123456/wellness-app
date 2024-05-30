import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {colors} from '@assets/colors';
import {CustomText} from '..';
import {LabelErrorIcon, LableSuccessIcon} from '@assets/icons';
import {InputFieldProps} from '@Utiles/props';

const InputField = ({
  leftIcon,
  placeHolder,
  label,
  errorMessage,
  state,
  keyboardType = 'default',
}: InputFieldProps) => {
  const [focused, setFocused] = useState(false);

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
    <View style={styles.mainWrapper}>
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
          style={{flex: 1}}
          placeholder={placeHolder}
          placeholderTextColor={colors.darkGrey}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
        />
        {(state == 'error' || state == 'success') && stateIcon[state]}
      </View>
      {errorMessage && (
        <CustomText color={colors.alert} text={errorMessage} type="body3" />
      )}
    </View>
  );
};

export default InputField;
