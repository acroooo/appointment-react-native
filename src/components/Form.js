import React from 'react';
import {Modal, Text, SafeAreaView, Button } from 'react-native';

const Form = ({modal, crearCitaHandler}) => {
  return (
    <Modal animationType="slide" visible={modal}>
      <SafeAreaView>
        <Text>Modal</Text>

        <Button
          title="Crear registro"
          onPress={crearCitaHandler}
        ></Button>
      </SafeAreaView>
    </Modal>
  );
};

export default Form;
