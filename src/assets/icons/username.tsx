import * as React from 'react';
import {G, Mask, Path, Svg, SvgProps} from 'react-native-svg';

const UserLogin = (props: SvgProps) => (
  <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <Mask
      id="mask0_24_1682"
      maskUnits="userSpaceOnUse"
      x="3"
      y="10"
      width="12"
      height="7">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3 10.8721H14.8799V16.4026H3V10.8721Z"
        fill="white"
      />
    </Mask>
    <G mask="url(#mask0_24_1682)">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.94069 11.9971C5.74494 11.9971 4.12494 12.5461 4.12494 13.6298C4.12494 14.7233 5.74494 15.2776 8.94069 15.2776C12.1357 15.2776 13.7549 14.7286 13.7549 13.6448C13.7549 12.5513 12.1357 11.9971 8.94069 11.9971ZM8.94069 16.4026C7.47144 16.4026 2.99994 16.4026 2.99994 13.6298C2.99994 11.1578 6.39069 10.8721 8.94069 10.8721C10.4099 10.8721 14.8799 10.8721 14.8799 13.6448C14.8799 16.1168 11.4899 16.4026 8.94069 16.4026Z"
        fill="#898D9E"
      />
    </G>
    <Mask
      id="mask1_24_1682"
      maskUnits="userSpaceOnUse"
      x="4"
      y="1"
      width="9"
      height="9">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.9574 1.50006H12.9224V9.46401H4.9574V1.50006Z"
        fill="white"
      />
    </Mask>
    <G mask="url(#mask1_24_1682)">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.94068 2.57076C7.33493 2.57076 6.02843 3.87651 6.02843 5.48226C6.02318 7.08276 7.31993 8.38776 8.91893 8.39376L8.94068 8.92926V8.39376C10.5457 8.39376 11.8514 7.08726 11.8514 5.48226C11.8514 3.87651 10.5457 2.57076 8.94068 2.57076ZM8.94067 9.46401H8.91667C6.72517 9.45726 4.94992 7.67001 4.95742 5.48001C4.95742 3.28626 6.74392 1.49976 8.94067 1.49976C11.1367 1.49976 12.9224 3.28626 12.9224 5.48226C12.9224 7.67826 11.1367 9.46401 8.94067 9.46401Z"
        fill="#898D9E"
      />
    </G>
  </Svg>
);

export default UserLogin;
