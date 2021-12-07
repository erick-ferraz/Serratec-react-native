import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

export default function SearchBar() {

    const [item, setItem] = useState('')

    return (
        <View style={styles.card}>
            <Ionicons name="search-outline" size={17} />
            <TextInput placeholder='Pesquise sua bebida favorita' 
            style={styles.input} onChangeText={setItem} />
        </View>
    );
}

const styles = StyleSheet.create( {
    input: {
        width: 260,
        marginLeft: 14
    },
    card: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        padding: 15,
        width: 320,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    }
})