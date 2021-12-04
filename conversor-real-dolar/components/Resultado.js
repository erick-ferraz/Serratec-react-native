import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Resultado(props) {
    return (
        <View>
            <Text style={styles.texto}>Valor convertido em $: {props.valor}</Text>
            <Text>Cotação dólar atual: {props.cotacao}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    texto: {
        marginBottom: 3,
    },
});