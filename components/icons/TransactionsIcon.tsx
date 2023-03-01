import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface IProps {
  color: string;
}

// eslint-disable-next-line react/function-component-definition
const TransactionsIcon: React.FunctionComponent<IProps> = ({ color }) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill={color}>
      <Path
        d="M1 6H19M15 1L20 6L15 11M21 16H3M7 11L2 16L7 21"
        stroke={color}
        strokeWidth="2"
      />
    </Svg>
  );
};

export default TransactionsIcon;
