import {colors} from '@assets/colors';
import {spacing} from '@assets/spacing';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 24,
    backgroundColor: colors.white,
    flex: 1,
  },
  inputContainer: {
    marginTop: spacing.xl,
    paddingBottom: spacing.xl,
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 1,
  },
  inputField: {
    marginBottom: 12,
  },
  termsContainer: {
    marginVertical: 20,
  },
  deviderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  deviderRule: {flex: 1, borderTopWidth: 1, borderTopColor: colors.lightGray},

  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  icon: {
    marginHorizontal: 16,
  },
});
