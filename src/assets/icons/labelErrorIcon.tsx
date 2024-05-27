import * as React from 'react';
import {Path, Svg, SvgProps} from 'react-native-svg';

const LabelErrorIcon = (props: SvgProps) => (
  <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" {...props}>
    <Path
      d="M9 12C8.86193 12 8.75 12.1119 8.75 12.25C8.75 12.3881 8.86193 12.5 9 12.5C9.13807 12.5 9.25 12.3881 9.25 12.25C9.25 12.1119 9.13807 12 9 12V12"
      stroke="#EF8B8B"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9 10V4.5"
      stroke="#EF8B8B"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
      stroke="#EF8B8B"
      strokeWidth="1.2"
    />
  </Svg>
);

export default LabelErrorIcon;
