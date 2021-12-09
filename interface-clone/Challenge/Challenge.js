import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';

export default function Challenge() {
  return (
    <>
    <SafeAreaView style={styles.container}>
      <View style={styles.viewUm} />
      <View style={styles.viewDoisTresContainer} >
      <View style={styles.viewDois} />
      <View style={styles.viewTres} />
      </View>
      <View style={styles.viewQuatroCincoContainer}>
      <View style={styles.viewQuatro} />
      <View style={styles.viewCinco} />
      </View>
      <View style={styles.viewSeis} />
      <View style={styles.quadradosContainer}>
        <View style={styles.quadrado}/>
        <View style={styles.quadrado}/>
        <View style={styles.quadrado}/>
        <View style={styles.quadrado}/>
        <View style={styles.quadrado}/>
        <View style={styles.quadrado}/>
      </View>
    </SafeAreaView>
    <View style={styles.viewUltima} />
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewUm: {
    backgroundColor: 'tomato',
    height: 25
  },
  viewDoisTresContainer: {
    alignItems: 'center',
    marginVertical: 18,
  },
  viewDois: {
    marginVertical: 18,
    backgroundColor: 'green',
    height: 85,
    width: 85
  },
  viewTres: {
    width: 150,
    height: 35,
    backgroundColor: 'green'
  },
  viewQuatroCincoContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  viewQuatro: {
    backgroundColor: 'purple',
    height: 80,
    width: '50%'
  },
  viewCinco: {
    backgroundColor: 'gray',
    height: 80,
    width: '50%'
  },
  viewSeis: {
    backgroundColor: 'tomato',
    height: 10,
    marginBottom: 10
  },
  quadradosContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignContent: 'space-around',
    justifyContent: 'space-around',
  },
  quadrado: {
    height: 92,
    width: 94,
    backgroundColor: 'green',
    marginVertical: 15
  },
  viewUltima: {
    backgroundColor: 'gray',
    height: 50,
  }
});