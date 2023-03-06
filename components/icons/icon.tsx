import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

interface IconProps {
  name: keyof typeof Ionicons.glyphMap;
  size: number;
  color: string;
}

const Icon: React.FunctionComponent<IconProps> = ({ name, size, color }) => {
  return <Ionicons name={name} size={size} color={color} />;
};

export default Icon;
