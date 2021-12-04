
import React from 'react';
import { StyleSheet, Text, View, ViewBase } from 'react-native';
import Card from './components/Card';
import Titulo from './components/Titulo';

export default function App() {
  return (
    <View style={styles.container}>
      <Titulo/>
      <View>
        <Card/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aed',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
