import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';

type Props = {
  title: string;
  children: string | React.ReactNode;
};

const styles = StyleSheet.create({
  container: {},
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.lightGray,
    padding: 10,
    marginBottom: 12,
    borderRadius: 24,
  },
  title: {
    textTransform: 'capitalize',
    fontFamily: 'helveticaMedium',
    color: Colors.gray,
  },
  pressed: {
    opacity: 0.4,
  },
  dataContainer: {},
});

const AccordionItem = ({ title, children }: Props) => {
  const [show, setShow] = useState(false);

  const handlePress = () => {
    setShow(!show);
  };
  return (
    <View style={styles.container}>
      <Pressable
        onPress={handlePress}
        style={({ pressed }) => [
          styles.titleContainer,
          pressed && styles.pressed,
        ]}
      >
        <Text style={styles.title}>{title}</Text>
        <AntDesign name={show ? 'minus' : 'plus'} size={20} color="black" />
        {/* <AntDesign name="minus" size={24} color="black" /> */}
      </Pressable>
      {show && <View style={styles.dataContainer}>{children}</View>}
    </View>
  );
};

export default AccordionItem;
