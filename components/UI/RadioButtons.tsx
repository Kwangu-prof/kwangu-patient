import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from '../../Utils/Colors';

type Props = { data: { value: string }[]; onSelect?: () => void };

const RadioButtons = ({ data, onSelect }: Props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginBottom: 24,
      }}
    >
      {data.map((item) => {
        return (
          <Pressable
            key={item.value}
            onPress={() => alert(`Your choice: ${item.value}`)}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 10,
            }}
          >
            <View
              style={{
                width: 12,
                height: 12,
                // backgroundColor: 'blue',
                borderWidth: 0.5,
                borderColor: Colors.secondary,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 30,
              }}
            >
              <View
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 20,
                  backgroundColor: Colors.secondary,
                }}
              />
            </View>
            <Text> {item.value}</Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default RadioButtons;

const styles = StyleSheet.create({});
