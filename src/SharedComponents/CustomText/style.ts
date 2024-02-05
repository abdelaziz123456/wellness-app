import {textTypes} from '@Utiles/props';
import {colors} from '@assets/colors';
import {fontFamily, fontSize, lineHeight} from '@assets/spacing';
import {StyleSheet} from 'react-native';
type Props = {
  type: textTypes;
  color?: string;
};
const styles = ({type, color}: Props) => {
  return StyleSheet.create({
    text: {
      fontFamily: fontFamily[type],
      fontSize: fontSize[type],
      lineHeight: lineHeight[type],
      color: color ? color : colors.deepBlue,
    },
  });
};

export default styles;
