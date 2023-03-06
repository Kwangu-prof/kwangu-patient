import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from '../../Utils/Colors';

type Props = {
  text: string;
  color: string;
};

const styles = StyleSheet.create({
  subtitle: {
    fontFamily: 'ubuntu',
    color: Colors.gray,
    textAlign: 'center',
  },
});

const TextWithDivider = ({ text, color }: Props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 24,
      }}
    >
      <View style={{ flex: 1, height: 0.5, backgroundColor: color }} />
      <View style={{ marginHorizontal: 4 }}>
        <Text style={styles.subtitle}>{text}</Text>
      </View>
      <View style={{ flex: 1, height: 0.5, backgroundColor: color }} />
    </View>
  );
};

export default TextWithDivider;
