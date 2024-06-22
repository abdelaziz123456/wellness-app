import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import {colors} from '@assets/colors';
import styles from './styles';
import DatePicker from 'react-native-date-picker';

const Progress = () => {
  const [date, setDate] = useState(new Date());
  return (
    <View style={styles.mainContainer}>
      <Text>show date</Text>

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <DatePicker
          date={date}
          onDateChange={setDate}
          mode="time"
          dividerColor={colors.lilacPetals}
          style={{backgroundColor: colors.lilacPetals, borderRadius: 20}}
        />
      </View>
    </View>
  );
};

export default Progress;
