import * as React from 'react';
import {Circle, Path, Svg, SvgProps} from 'react-native-svg';

const LabelSuccessIcon = (props: SvgProps) => (
  <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" {...props}>
    <Circle cx="9" cy="9" r="9" fill="#58C6CD" />
    <Path
      d="M12.5 6.81247L8.12499 11.1875L5.5 8.56244"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default LabelSuccessIcon;
