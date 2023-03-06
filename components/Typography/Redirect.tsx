import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import RedirectIcon from '../icons/RedirectIcon';
import Colors from '../../Utils/Colors';

const styles = StyleSheet.create({
  redirect: { flexDirection: 'row', alignItems: 'center' },
  text: {
    color: Colors.secondary,
    fontFamily: 'ubuntu',
    fontSize: 14,
    textDecorationLine: 'underline',
    textTransform: 'capitalize',
    marginRight: 10,
    lineHeight: 16,
  },
});

interface IProps {
  text: string;
  onPress: () => void;
  noIcon?: boolean;
  styling?: object;
}

const Redirect: React.FunctionComponent<IProps> = ({
  text,
  onPress,
  noIcon,
  styling,
}) => {
  return (
    <Pressable onPress={onPress} style={[styles.redirect, styling]}>
      <Text style={styles.text}>{text}</Text>
      {noIcon ? '' : <RedirectIcon />}
    </Pressable>
  );
};

export default Redirect;
