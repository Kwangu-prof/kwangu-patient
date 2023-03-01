import React from 'react';
import Svg, { Defs, G, Path, Rect, ClipPath } from 'react-native-svg';

interface IProps {
  color: string;
}

// eslint-disable-next-line react/function-component-definition
const RequestIcon: React.FunctionComponent<IProps> = ({ color }) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill={color}>
      <G clip-path="url(#clip0_26_307)">
        <Path d="M6 13.5H12V16.5H6V13.5Z" fill={color} />
        <Path
          d="M24 3H22.5V0H7.5V3H4.5V4.875L3.6 6H1.5V8.625L0 10.5V24H18L24 16.5V3ZM3 7.5H15V10.5H3V7.5ZM16.5 22.5H1.5V12H16.5V22.5ZM18 10.5H16.5V6H6V4.5H18V10.5ZM21 6.75L19.5 8.625V3H9V1.5H21V6.75Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_26_307">
          <Rect width="24" height="24" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default RequestIcon;
