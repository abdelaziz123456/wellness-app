import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {styles} from './styles';
import {colors} from '@assets/colors';
import {CustomDropdownProps} from '@Utiles/props';

const CustomDropdown = ({data, label}: CustomDropdownProps) => {
  const [value, setValue] = useState<{label: number; value: string} | null>(
    null,
  );
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <Dropdown
        activeColor={colors.violetLight}
        style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="value"
        valueField="label"
        placeholder={!isFocus ? 'Select item' : '...'}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item: {label: number; value: string}) => {
          setValue(item);
          console.log(value);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default CustomDropdown;
