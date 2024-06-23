import {ButtonTypes} from '@Utiles/props';
import {colors} from '@assets/colors';
import {spacing} from '@assets/spacing';
import {StyleSheet} from 'react-native';

const btnBg = {
  primary: colors.purplePlum,
  primaryInactive: colors.dustGrey,
  secondary: colors.white,
  secondaryInactive: colors.white,
};

export const styles = (type: ButtonTypes) =>
  StyleSheet.create({
    container: {
      backgroundColor: btnBg[type],
      borderRadius: spacing.xl,
      paddingVertical: spacing.l,
      paddingHorizontal: spacing.xl,
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderColor:
        type == 'secondary'
          ? colors.purplePlum
          : type == 'secondaryInactive'
          ? colors.dustGrey
          : colors.white,
      borderWidth: type == 'secondaryInactive' || type == 'secondary' ? 1 : 0,
    },
    smallContainer: {
      backgroundColor: btnBg[type],
      borderRadius: spacing.xl,
      paddingVertical: spacing.s,
      paddingHorizontal: spacing.l,
      flexDirection: 'row',
      justifyContent: 'center',
      borderColor:
        type == 'secondary'
          ? colors.purplePlum
          : type == 'secondaryInactive'
          ? colors.dustGrey
          : colors.white,
      borderWidth: type == 'secondaryInactive' || type == 'secondary' ? 1 : 0,
    },

    withShadow: {
      marginBottom: spacing.xl,
      shadowColor: colors.violet,
      shadowOffset: {width: 0, height: 20},
      shadowOpacity: 0.1,
      shadowRadius: 3,
      elevation: 20,
    },
  });
