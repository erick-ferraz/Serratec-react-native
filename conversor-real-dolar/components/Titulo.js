import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Titulo() {
    return (
        <View>
            <Text style={styles.titulo}> D i o g e n e 💲</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    titulo: {
        alignItems: 'flex-start',
        borderWidth: 1.6,
        borderRadius: 8,
        padding: 7,
    },
});