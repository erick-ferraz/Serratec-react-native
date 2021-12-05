import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function DivisionBar() {
    return (
        <View style={styles.divisionBar}>

        </View>
    );
}

const styles = StyleSheet.create({
    divisionBar: {
        flexDirection: 'row',
        backgroundColor: 'whitesmoke',
        width: '100%',
        height: '2%',
        marginTop: 20,
        marginBottom: 20
    }
})