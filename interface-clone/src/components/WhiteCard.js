import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Bolinha from './Bolinha';
import DivisionBar from './DivisionBar';

export default function WhiteCard(props) {
    const { imagem } = props;

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{
                uri: `${imagem}`,
            }} />
            <View style={{ flexDirection: 'row' }}>
                <Bolinha />
                <Bolinha />
                <Bolinha />
                <Bolinha />
                <Bolinha />
                <Bolinha />
                <Bolinha />
                <Bolinha />
                <Bolinha />
            </View>
            <DivisionBar />
            <View style={styles.viewButtons}>
                <TouchableOpacity style={styles.optionalButtons}><Text>Cervejas</Text></TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 30,

    },
    image: {
        height: '70%',
        width: '86%',
        borderRadius: 15,
    },
    viewButtons: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'space-around'
    },
    optionalButtons: {
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1,
        padding: 5
    }
})