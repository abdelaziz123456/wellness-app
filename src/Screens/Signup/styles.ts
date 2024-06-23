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
});
