import * as React from 'react';
import {Path, Rect, Svg, SvgProps} from 'react-native-svg';

const FacebookIcon = (props: SvgProps) => (
  <Svg width="50" height="50" viewBox="0 0 50 50" fill="none">
    <Rect
      x="0.4"
      y="0.4"
      width="49.2"
      height="49.2"
      rx="13.6"
      stroke="#E5E6EE"
      stroke-width="0.8"
    />
    <Path
      d="M30.0002 16.6666H27.5002C26.3951 16.6666 25.3353 17.1056 24.5539 17.887C23.7725 18.6684 23.3335 19.7282 23.3335 20.8333V23.3333H20.8335V26.6666H23.3335V33.3333H26.6668V26.6666H29.1668L30.0002 23.3333H26.6668V20.8333C26.6668 20.6123 26.7546 20.4003 26.9109 20.244C27.0672 20.0878 27.2791 20 27.5002 20H30.0002V16.6666Z"
      fill="#585CE5"
    />
  </Svg>
);

export default FacebookIcon;
