import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Form from './Form';

export default function Card() {
    return (
        <View style={styles.container}>
            <Form></Form>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.7,
        borderRadius: 12,
        marginTop: 50,
        height: 250,
        width: 250,
        backgroundColor: '#eee',
    },
});