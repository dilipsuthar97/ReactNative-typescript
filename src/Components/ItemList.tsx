import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const ItemList = ({ item, onPress }) => {
    // const itemStyle = item ? item.isSelected ? [styles.item, styles.selected] : styles.item : undefined

    return (
        <TouchableOpacity style={styles.item} onPress={onPress ? onPress : undefined}>
            <Text>{item ? item.name : undefined}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 12,
        justifyContent: 'center',
        backgroundColor: 'white',
        margin: 8,
        borderRadius: 8,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0.2 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 2
    },
    selected: {
        backgroundColor: '#00e676'
    }
});

export default ItemList;