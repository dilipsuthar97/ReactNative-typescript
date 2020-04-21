import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import { Scale, Colors } from '../CommonConfig';

const Button = ({ title, onPress, buttonStyle }) => {

    return (
        <TouchableOpacity style={[styles.container, buttonStyle]} onPress={onPress ? onPress : undefined}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: Scale(45),
        width: '100%',
        justifyContent: 'center',
        paddingVertical: Scale(8),
        alignItems: 'center',
        backgroundColor: Colors.PRIMARY_COLOR,
        borderRadius: Scale(8),
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0.2 },
        shadowOpacity: 0.2,
        shadowRadius: Scale(8),
        elevation: 2
    },
    title: {
        color: 'white',
        fontSize: Scale(16)
    }
})

export default Button;