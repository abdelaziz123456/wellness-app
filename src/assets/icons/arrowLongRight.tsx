import * as React from 'react';
import {Path, Svg, SvgProps} from 'react-native-svg';

const ArrowLongRight = (props: SvgProps) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path
      d="M23.25 12.4969H0.75"
      stroke={props.stroke || '#585CE5'}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M19.5 16.2469L23.25 12.4969L19.5 8.74695"
      stroke={props.stroke || '#585CE5'}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export default ArrowLongRight;
