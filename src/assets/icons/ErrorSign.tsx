import * as React from 'react';
import {Path, Svg, SvgProps} from 'react-native-svg';

const ErrorSign = (props: SvgProps) => (
  <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.98202 16.4994C13.1148 16.4994 16.465 13.1415 16.465 8.99939C16.465 4.85725 13.1148 1.49939 8.98202 1.49939C4.84927 1.49939 1.49902 4.85725 1.49902 8.99939C1.49902 13.1415 4.84927 16.4994 8.98202 16.4994Z"
      stroke="#EF8B8B"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M5.98877 11.9994L11.9752 5.99939"
      stroke="#EF8B8B"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M11.9752 11.9994L5.98877 5.99939"
      stroke="#EF8B8B"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export default ErrorSign;
