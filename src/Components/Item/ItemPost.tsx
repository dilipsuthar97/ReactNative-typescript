import * as React from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	StyleProp,
	ViewStyle,
} from 'react-native';

import { Scale, Colors, Matrics } from '../../CommonConfig';
import { Post } from '../../Types/Post.interface';

interface Props {
	item: Post;
	style?: StyleProp<ViewStyle>;
	onPress?: () => void;
}

const ItemPost: React.FC<Props> = ({ item, style, onPress }) => {
	return (
		<TouchableOpacity
			style={[styles.container, style]}
			activeOpacity={0.5}
			onPress={onPress}
		>
			<Text style={styles.title} numberOfLines={2}>
				{item ? item.title : undefined}
			</Text>
			<Text style={styles.body} numberOfLines={3}>
				{item ? item.body : undefined}
			</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: Scale(8),
		borderRadius: Scale(8),
		shadowColor: Colors.BLACK,
		shadowRadius: Scale(8),
		shadowOffset: { width: 0.2, height: 0.2 },
		shadowOpacity: 0.2,
		backgroundColor: Colors.WHITE,
		marginHorizontal: Scale(10),
	},
	title: {
		fontSize: Scale(14),
		fontWeight: 'bold',
		color: Colors.BLACK,
	},
	body: {
		fontSize: Scale(14),
		color: Colors.MATEBLACK,
	},
});

export default ItemPost;
