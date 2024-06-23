import {colors} from '@assets/colors';
import {spacing} from '@assets/spacing';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    height: '100%',
    flex: 1,
    backgroundColor: colors.violetLight,

    paddingHorizontal: 24,
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  btnStyle: {backgroundColor: colors.violetLight, width: 100},
  btnContainer: {
    alignItems: 'flex-end',
  },
  iconContainer: {
    marginVertical: spacing.xxl,
    alignItems: 'center',
  },
});
