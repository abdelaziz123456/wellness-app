import {KeyboardTypeOptions} from 'react-native';

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
};

export type ButtonProps = {
  text: string;
  onPress: () => void;
  type: ButtonTypes;
  size: 'regular' | 'small';
  Icon?: React.ReactElement;
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
