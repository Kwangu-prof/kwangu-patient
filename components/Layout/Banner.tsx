import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from '../../Utils/Colors';

type Props = {
  text: string;
  styling?: object;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondaryLight,
    paddingVertical: 20,
    paddingHorizontal: 15,
    width: '100%',
    marginBottom: 24,
    borderRadius: 20,
  },
  text: {
    fontFamily: 'helveticaMedium',
    lineHeight: 21,
    color: Colors.secondaryDark,
  },
});

const Banner = ({ text, styling }: Props) => {
  return (
    <View style={[styles.container, styling]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Banner;
