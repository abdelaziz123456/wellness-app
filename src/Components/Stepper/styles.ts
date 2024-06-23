import {colors} from '@assets/colors';
import {StyleSheet} from 'react-native';

const styles = (width: number) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.white,
      position: 'relative',
      paddingHorizontal: 10,
      width: width,
      height: 4,
    },
    active: {
      backgroundColor: colors.purplePlum,
      height: 4,
      maxWidth: '100%',
      position: 'absolute',
    },
  });

export default styles;
