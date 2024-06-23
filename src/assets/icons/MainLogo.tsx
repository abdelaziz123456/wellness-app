import * as React from 'react';
import {Path, Svg, SvgProps} from 'react-native-svg';
const MainLogo = (props: SvgProps) => {
  return (
    <Svg width="104" height="104" viewBox="0 0 104 104" fill="none" {...props}>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M52 29.2C33.8851 29.2 19.2 43.8851 19.2 62H0C0 33.2812 23.2812 10 52 10C80.7188 10 104 33.2812 104 62H84.8C84.8 43.8851 70.1149 29.2 52 29.2Z"
        fill="#585CE5"
      />
      <Path
        d="M52.0002 94C70.1151 94 84.8002 79.6731 84.8002 62H19.2002C19.2002 79.6731 33.8853 94 52.0002 94Z"
        fill="#58C6CD"
      />
    </Svg>
  );
};

export default MainLogo;
