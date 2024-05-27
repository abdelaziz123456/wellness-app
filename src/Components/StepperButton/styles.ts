import {colors} from '@assets/colors';
import {spacing} from '@assets/spacing';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.purplePlum,
    width: 88,
    height: 88,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.xl,
    shadowColor: colors.violet,
    shadowOffset: {width: 0, height: 20},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 20,
  },
});
