import * as React from 'react';
import {Path, Svg, SvgProps} from 'react-native-svg';

const Email = (props: SvgProps) => (
  <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <Path
      d="M13.427 6.63831L10.0945 9.34808C9.46492 9.84759 8.57908 9.84759 7.94946 9.34808L4.58887 6.63831"
      stroke="#898D9E"
      stroke-width="1.2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.6816 15.75C14.9627 15.7563 16.5 13.8822 16.5 11.5788V6.42751C16.5 4.12412 14.9627 2.25 12.6816 2.25H5.31835C3.03734 2.25 1.5 4.12412 1.5 6.42751V11.5788C1.5 13.8822 3.03734 15.7563 5.31835 15.75H12.6816Z"
      stroke="#898D9E"
      stroke-width="1.2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export default Email;
