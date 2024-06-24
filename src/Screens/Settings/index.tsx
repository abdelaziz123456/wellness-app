import {View, Text} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';

const Settings = () => {
  const [checked, setChecked] = useState(false);
  return (
    <View style={styles.mainContainer}>
      <Text>Settings</Text>
    </View>
  );
};

export default Settings;
