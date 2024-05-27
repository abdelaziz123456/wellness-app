import {colors} from '@assets/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    //justifyContent: 'center',
    //alignItems: 'center',
    position: 'relative',
    paddingHorizontal: 10,
  },
  active: {
    backgroundColor: colors.purplePlum,
    height: 4,
    maxWidth: '100%',
    position: 'absolute',
  },
});
