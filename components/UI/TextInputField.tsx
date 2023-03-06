/* eslint-disable react/jsx-props-no-spreading */
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardTypeOptions,
  TextInputProps,
  Pressable,
} from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '../../Utils/Colors';
import Icon from '../icons/icon';

interface Props {
  config: TextInputProps;
  styling?: object;
  icon?: keyof typeof Ionicons.glyphMap;
  iconFunction?: () => void;
}

const styles = StyleSheet.create({
  inputContainer: {
    paddingVertical: 4,
    paddingRight: 24,
    width: '100%',
    borderRadius: 24,
    borderColor: Colors.textInputGray,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  input: {
    flex: 1,
    height: '100%',
    paddingVertical: 10,
    paddingLeft: 24,
  },
});

const TextInputField = ({ config, styling, icon, iconFunction }: Props) => {
  return (
    <View style={[styles.inputContainer, styling]}>
      <TextInput style={styles.input} {...config} />
      {icon && (
        <Pressable onPress={iconFunction}>
          <Icon name={icon} size={20} color={Colors.textInputGray} />
        </Pressable>
      )}
    </View>
  );
};

export default TextInputField;
