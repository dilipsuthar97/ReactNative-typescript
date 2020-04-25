// =======>>>>>>>> LIBRARIES <<<<<<<<=======
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

// =======>>>>>>>> ASSETS <<<<<<<<=======
import { AppStyle, Images, Colors, Scale } from '../../CommonConfig';

import {
	StackNavigationProp,
	StackNavigationOptions,
} from '@react-navigation/stack';
import { DrawerNavigationProp } from '@react-navigation/drawer';

// type interface for props
interface Props {
	navigation: StackNavigationProp<any> & DrawerNavigationProp<any>;
}

// =======>>>>>>>> CLASS DECLARATION <<<<<<<<=======
class Todos extends React.Component<Props> {
	// =======>>>>>>> STATE DECLARATION <<<<<<<=======
	state = {};

	// =======>>>>>>> LIFECYCLE METHODS <<<<<<<=======
	componentDidMount() {
		this.initHeader();
	}

	// =======>>>>>>> METHODS INITIALIZE <<<<<<<=======
	initHeader() {
		this.props.navigation.setOptions({
			headerStyle: AppStyle.headerStyle,
			headerTitleStyle: AppStyle.headerTitleStyle,
			headerLeft: ({ onPress }) => {
				// console.log('headerLeft props', props)
				return (
					<TouchableOpacity
						style={{ marginLeft: Scale(16) }}
						onPress={() => this.props.navigation.openDrawer()}
					>
						<Image
							source={Images.IC_MENU}
							style={{
								height: Scale(20),
								width: Scale(20),
								tintColor: Colors.WHITE,
							}}
						/>
					</TouchableOpacity>
				);
			},
		});
	}

	// =======>>>>>>>> RENDER INITIALIZE <<<<<<<<=======
	render() {
		return (
			<View style={styles.container}>
				<Text>Todos</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default Todos;
