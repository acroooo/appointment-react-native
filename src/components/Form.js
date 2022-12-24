import React from 'react';
import {Modal, Text, SafeAreaView, StyleSheet, TextInput, View } from 'react-native';

const Form = ({modal, crearCitaHandler}) => {
  return (
    <Modal animationType="slide" visible={modal}>
      <SafeAreaView>
        <Text style={styles.title}>Crear nuevo reclamo</Text>
        <View>
          <Text>Nombre afectado</Text>
          <TextInput></TextInput>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: 'grey',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: '#316AB1',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginTop: 20
  }
});

export default Form;
