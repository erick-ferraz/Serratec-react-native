import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Bolinha from './Bolinha';
import DivisionBar from './DivisionBar';
import { Ionicons } from '@expo/vector-icons'

export default function WhiteCard(props) {
    const { imagem } = props;

    const bolinhas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require(`../../assets/ilhacorona.jpg`)} />
            <View style={{ flexDirection: 'row' }}>
                {bolinhas.map((index) => <Bolinha key={index} />)}
            </View>
            <DivisionBar />
            <View style={styles.viewButtons}>
                <TouchableOpacity style={styles.optionalButtons}>
                    <Ionicons name="beer" size={22} color='gold' />
                    <Text style={{marginLeft: 5, paddingTop: 2.2}}>Cervejas</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionalButtons}>
                    <Ionicons name="beer" size={22} color='gold' />
                    <Text style={{marginLeft: 5, paddingTop: 2.2}}>Destilados</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionalButtons}>
                    <Ionicons name="beer" size={22} color='gold' />
                    <Text style={{marginLeft: 5, paddingTop: 2.2}}>Vinhos</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionalButtons}>
                    <Ionicons name="beer" size={22} color='gold' />
                    <Text style={{marginLeft: 5, paddingTop: 2.2}}>Sem Álcool</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionalButtons}>
                    <Ionicons name="beer" size={22} color='gold' />
                    <Text style={{marginLeft: 5, paddingTop: 2.2}}>Lojinha</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionalButtons}>
                    <Ionicons name="beer" size={22} color='gold' />
                    <Text style={{marginLeft: 5, paddingTop: 2.2}}>Comidinhas</Text>
                </TouchableOpacity>
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
        height: 260,
        width: 315,
        borderRadius: 15,

    },
    viewButtons: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    optionalButtons: {
        borderRadius: 5,
        borderColor: 'silver',
        borderWidth: 1,
        padding: 12,
        backgroundColor: 'white',
        flexDirection: 'row',
        width: 170,
        marginBottom: 8,
    }
})