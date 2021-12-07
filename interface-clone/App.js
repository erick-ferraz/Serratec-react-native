import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View, ScrollView } from 'react-native';
import CardBar from './src/components/CardBar';
import WhiteCard from './src/components/WhiteCard';
import SearchBar from './src/components/SearchBar';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='light-content' />
      <ScrollView>
        <View style={styles.sbContainer}>
          <SearchBar/>
        </View>
        <WhiteCard/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
  },
  sbContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
