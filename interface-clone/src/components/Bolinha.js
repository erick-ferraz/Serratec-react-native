import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Bolinha(props) {
    const {cor} = props;

    return (
        <View style={styles.container}/>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 10,
        width: 10,
        borderRadius: 50,
        marginTop: 30,
        marginRight: 8,
        backgroundColor: 'silver'
    }
})