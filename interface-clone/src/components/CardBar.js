import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from './SearchBar';

export default function CardBar() {
    return (
        <View style={styles.cardBlack}>
            <SearchBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },
    cardBlack: {
        backgroundColor: '#1C1C1C',
        height: '15%',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 1,
    }
});