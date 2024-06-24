import {colors} from '@assets/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  box: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: colors.darkGrey,
    marginRight: 8,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
  },
});
