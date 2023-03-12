import {
  StyleSheet,
  Text,
  View,
  Modal as RnModal,
  Alert,
  Pressable,
} from 'react-native';
import React from 'react';

type Props = {
  open: boolean;
  children: React.ReactNode;
  closeModal: () => void;
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    padding: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    backgroundColor: 'white',
    height: 300,
    borderRadius: 20,
    overflow: 'hidden',
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
});

const Modal = ({ open, children, closeModal }: Props) => {
  return (
    <RnModal
      animationType="slide"
      transparent={false}
      visible={open}
      onRequestClose={closeModal}
    >
      <Pressable style={styles.modalContainer} onPress={closeModal}>
        <View style={styles.content}>{children}</View>
      </Pressable>
    </RnModal>
  );
};

export default Modal;
