import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View, Scrollview } from 'react-native';
import CardBar from './src/components/CardBar';
import WhiteCard from './src/components/WhiteCard';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='light-content' />
      <View>
        <CardBar />
        <WhiteCard imagem='https://pbs.twimg.com/media/DdgUW8pWsAAHUJB.jpg' />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C'
  },
});
