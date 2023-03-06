import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from '../../Utils/Colors';

interface Iprops {
  infoTitle: string;
  infoText: string;
}

const styles = StyleSheet.create({
  secondaryInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.lightGray,
  },
  secondaryInforText: {
    fontFamily: 'ubuntu',
    lineHeight: 21,
  },
});

const ProfileInfo: React.FunctionComponent<Iprops> = ({
  infoTitle,
  infoText,
}) => {
  return (
    <View style={styles.secondaryInfoContainer}>
      <Text style={styles.secondaryInforText}>{infoTitle}</Text>
      <Text style={styles.secondaryInforText}>{infoText}</Text>
    </View>
  );
};

export default ProfileInfo;
