import * as React from 'react';
import {Path, Svg, SvgProps} from 'react-native-svg';

const Checked = (props: SvgProps) => (
  <Svg width="12" height="8" viewBox="0 0 12 8" fill="none">
    <Path
      d="M10.3333 1L4.49999 6.83333L1 3.33329"
      stroke="#585CE5"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export default Checked;
