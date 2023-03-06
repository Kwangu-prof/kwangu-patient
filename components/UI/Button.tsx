import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from '../../Utils/Colors';

interface ButtonProps {
  title: string;
  color: string;
  variant: 'solid' | 'outlined';
  fullWidth?: boolean;
  onPress: () => void;
  styling?: object;
}

const styles = StyleSheet.create({
  button: {
    // paddingVertical: 12,
    // paddingHorizontal: 24,
    height: 45,

    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 45,
  },
  buttonText: {
    fontFamily: 'ubuntuMedium',
    lineHeight: 21,
    textTransform: 'capitalize',
  },
  pressed: {
    opacity: 0.75,
  },
});

const Button: React.FunctionComponent<ButtonProps> = ({
  title,
  styling,
  color,
  variant,
  onPress,
  fullWidth,
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: variant === 'solid' ? color : 'transparent',
          borderWidth: 1,
          borderColor: color,
          width: fullWidth ? '100%' : 165,
        },
        styling,
        pressed && styles.pressed,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.buttonText,
          { color: variant === 'solid' ? Colors.white : color },
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;
