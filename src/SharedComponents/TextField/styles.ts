import {colors} from '@assets/colors';
import {spacing} from '@assets/spacing';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainWrapper: {},
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: spacing.l,
    borderWidth: 1,
    borderColor: colors.lilacPetalsDark,
    backgroundColor: colors.lilacPetals,

    alignItems: 'center',
    height: 48,
    borderRadius: 14,
    marginVertical: spacing.xs,
  },
});
