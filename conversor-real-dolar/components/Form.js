import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View, TouchableOpacity } from 'react-native';
import Resultado from './Resultado';

export default function Form() {

    const [valor, setValor] = useState(0);
    const [valorConvertido, setConvertido] = useState(0);
    const [textButton, setTextButton] = useState('Converter')

//   const calcular = React.useEffect(() => {setConvertido(valor * 5.65), setTextButton('Converter novamente')}, []);

    return (
        <View>
            <Text style={styles.text}>Valor em R$: </Text>
            <TextInput placeholder="Inserir um valor" onChangeText={setValor} style={styles.input} />
            <TouchableOpacity title='Converter' style={styles.button} onPress={() => {setConvertido(valor * 5.65), setTextButton('Converter novamente')}}><Text>{textButton}</Text></TouchableOpacity>
            <View>
                <Resultado valor={valorConvertido.toFixed(2)} cotacao='R$ 5.65'/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        marginTop: 15,
        marginBottom: 15,
        alignItems: 'center',
        padding: 8,
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: '#aca',
    },
    input: {
        marginTop: 13,
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
    },
    text: {
        textAlign: 'center',
        fontSize: 15,
    },
    view: {
        maxHeight: 250,
        maxWidth: 250,
    },
});