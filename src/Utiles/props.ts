import {StackNavigationProp} from '@react-navigation/stack';
import {
  KeyboardTypeOptions,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

export type textTypes =
  | 'head1'
  | 'head2'
  | 'head3'
  | 'body1'
  | 'body1b'
  | 'body2'
  | 'body2b'
  | 'body3'
  | 'body3b'
  | 'btn1'
  | 'btn2'
  | 'btn3';

export type ButtonTypes =
  | 'primary'
  | 'primaryInactive'
  | 'secondary'
  | 'secondaryInactive';

export type TextProps = {
  text: string;
  type: textTypes;
  color?: string;
  style?: StyleProp<TextStyle>;
};

export type ButtonProps = {
  text: string;
  onPress: () => void;
  type: ButtonTypes;
  size: 'regular' | 'small';
  Icon?: React.ReactElement;
  customStyle?: StyleProp<ViewStyle>;
};

export type InputFieldProps = {
  leftIcon: JSX.Element;
  placeHolder?: string;
  label?: string;
  errorMessage?: string;
  state?: 'success' | 'error' | 'disabled';
  keyboardType?: KeyboardTypeOptions;
};

export type CustomDropdownProps = {
  data: {label: number; value: string}[];
  label: string;
};

export type MainStackParamList = {
  Settings: undefined;
  Activities: undefined;
  Progress: undefined;
  Home: undefined;
};

export type MainStackNavigationProp = StackNavigationProp<MainStackParamList>;

export type WelcomeStackParamList = {
  onboarding: undefined;
  welcome: undefined;
};

export type WelcomeStackNavigationProp =
  StackNavigationProp<WelcomeStackParamList>;
