import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Pressable,
} from 'react-native';

import Form from './src/components/Form';

const App = () => {
  const [modal, setModal] = useState(false);

  const crearCitaHandler = () => {
    console.log('crearCitaHandler');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.appName}>Reclam.ar v1.0</Text>
      </View>
      <View style={styles.bannerSection}>
        <Text style={styles.title}>Buenos días</Text>
        <Text style={styles.title}>Hernán</Text>
        <Pressable onPress={() => setModal(true)} style={styles.btn}>
          <Text style={styles.btnText}>Crear reclamo</Text>
        </Pressable>
      </View>
      <View>
        <Text>Vecinos</Text>
      </View>
      <Form modal={modal} crearCitaHandler={crearCitaHandler}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'grey',
  },
  title: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  appName: {
    fontWeight: 'bold',
    textAlign: 'right',
    marginRight: 10,
    padding: 5,
  },
  topNameSection: {
    backgroundColor: '#fff',
    padding: 10,
  },
  bannerSection: {
    paddingTop: 50,
    paddingLeft: 20,
    paddingBottom: 50,
    backgroundColor: '#316AB1',
  },
  btn: {
    backgroundColor: 'white',
    width: 150,
    borderRadius: 5,
    marginTop: 15,
    paddingVertical: 5,
  },
  btnText: {
    textAlign: 'center',
    color: '#316AB1',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default App;
