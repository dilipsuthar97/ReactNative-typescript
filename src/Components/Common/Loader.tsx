import React from 'react'
import { View, Modal, ActivityIndicator } from 'react-native';

import { Colors, Scale } from '../../CommonConfig';

interface Props  {
    visible: boolean;
}

const Loader: React.FC<Props> = ({ visible }) => {
    return (
        <Modal visible={visible} transparent>
            <View style={{ flex: 1, justifyContent: 'center', position: "absolute", backgroundColor: 'rgba(52, 52, 52, 0.7)', height: visible ? '100%' : 0, width: visible ? '100%' : 0, alignItems: 'center' }}>
                <View style={{ height: Scale(85), width: Scale(85), borderRadius: Scale(10), justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                    <ActivityIndicator size="large" color={Colors.PRIMARY_COLOR} />
                </View>
            </View>
        </Modal>
    )
}

export default Loader;