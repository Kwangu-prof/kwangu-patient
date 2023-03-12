import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Colors from '../Utils/Colors';
import Modal from './Layout/Modal';
import Button from './UI/Button';
import { ProfileStackParamList } from './navigation/ProfileStackNavigator';

type Props = {
  dependant: {
    id: number;
    firstName: string;
    lastName: string;
    category: string;
  };
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    paddingVertical: 20,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: Colors.textInputGray,
    borderBottomWidth: 1,
  },
  profilePic: {
    marginRight: 5,
    backgroundColor: 'gray',
    height: 40,
    width: 40,
    borderRadius: 80,
  },
  name: {
    fontFamily: 'helveticaMedium',
  },
  category: {
    fontFamily: 'helvetica',
    fontSize: 11,
    color: Colors.gray,
  },
  content: {},
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  modalProfilePic: {
    // marginBottom: 10,
    height: 97,
    width: 97,
    borderRadius: 194,
    alignSelf: 'center',
    backgroundColor: 'gray',
  },
  icon: {
    width: 25,
    height: 25,
    backgroundColor: Colors.primary,
    position: 'absolute',
    bottom: 0,
    right: '35%',
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalName: {
    fontFamily: 'helveticaBold',
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
  },
});

const DependantItem = ({ dependant }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const navigation =
    useNavigation<
      NativeStackNavigationProp<ProfileStackParamList, 'EditProfileScreen'>
    >();

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handlePress = () => {};

  return (
    <>
      <Pressable onPress={toggleModal} style={styles.container}>
        <View>
          <Image
            resizeMode="contain"
            style={styles.profilePic}
            source={{ uri: 'dependant?.profile_image' }}
          />
        </View>
        <View>
          <Text style={styles.name}>
            {dependant.firstName} {dependant.lastName}
          </Text>
          <Text style={styles.category}>{dependant.category}</Text>
        </View>
      </Pressable>
      {modalOpen && (
        <Modal open={modalOpen} closeModal={() => setModalOpen(false)}>
          <View>
            <View>
              <View style={{ position: 'relative', marginBottom: 10 }}>
                <Image
                  resizeMode="contain"
                  style={styles.modalProfilePic}
                  source={{ uri: 'userDetails.profile_image' }}
                />
                <View style={styles.icon}>
                  <MaterialIcons name="photo-camera" size={14} color="white" />
                </View>
              </View>
              <Text style={styles.modalName}>
                {dependant.firstName} {dependant.lastName}
              </Text>
            </View>
            <View style={styles.buttonsContainer}>
              <Button
                styling={{ width: 140, marginRight: 10 }}
                title="Edit"
                color={Colors.primary}
                onPress={() => {
                  toggleModal();
                  navigation.navigate('EditDependantProfileScreen', {
                    dependantId: dependant.id.toString(),
                  });
                }}
                variant="solid"
              />
              <Button
                styling={{ width: 140 }}
                title="Remove"
                color={Colors.darkRed}
                onPress={() => {
                  setModalOpen(false);
                }}
                variant="solid"
              />
            </View>
          </View>
        </Modal>
      )}
    </>
  );
};

export default DependantItem;
