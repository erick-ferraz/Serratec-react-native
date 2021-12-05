import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function SearchBar() {

    const [item, setItem] = useState('')

    return (
        <View style={styles.card}>
            <Text>🔍  </Text>
            <TextInput placeholder='Pesquise sua bebida favorita' 
            style={styles.input} onChangeText={setItem} />
        </View>
    );
}

const styles = StyleSheet.create( {
    input: {
        
    },
    card: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        padding: 20,
        width: '90%',
        flexDirection: 'row'
    }
})