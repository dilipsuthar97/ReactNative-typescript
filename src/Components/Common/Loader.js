import React, { Component } from 'react'
import { View, Text, Modal, ActivityIndicator } from 'react-native';

import { Colors, Matrics } from '../../CommonConfig';


const Scale = Matrics.Scale;
const Loader = ({ visible }) => {
    return (
        <Modal visible={visible} transparent style={{ flex: 1, }}>
            <View style={{ justifyContent: 'center', position: "absolute", backgroundColor: 'rgba(52, 52, 52, 0.7)', height: visible ? '100%' : 0, width: visible ? '100%' : 0, alignItems: 'center' }}>
                <View style={{ height: Scale(85), width: Scale(85), borderRadius: Scale(10), justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                    <ActivityIndicator size="large" color={Colors.PRIMARY_COLOR} />
                </View>
            </View>
        </Modal>
    )
}

export default Loader;