import {colors} from '@assets/colors';
import {spacing} from '@assets/spacing';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    height: '100%',
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingBottom: spacing.xxl,
  },

  centerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  centerText: {
    textAlign: 'center',
    marginTop: spacing.xl,
    marginBottom: 26,
  },
});
