// =======>>>>>>>> LIBRARIES <<<<<<<<=======
import * as React from 'react';
import {
	StyleSheet,
	View,
	Text,
	ActivityIndicator,
	FlatList,
	Image,
} from 'react-native';
import { connect } from 'react-redux';

// =======>>>>>>>> ASSETS <<<<<<<<=======
import { AppStyle, Colors, Matrics, Scale } from '../../CommonConfig';
import { getPhotosRequest } from '../../Redux/Actions';
import { NavigationProp } from '@react-navigation/core';
import { MainReducerState } from '../../Types/Reducers.interface';
import { AppState } from '../../Redux/Store';

// type inteface for props
interface PhotosProps {
	navigation: NavigationProp<any>;
}

// type interface for state
interface PhotosState {
	isLoading: boolean;
}

// Link all props here
type Props = PhotosProps & LinkStateProps & LinkDispatchProps;

// =======>>>>>>>> CLASS DECLARATION <<<<<<<<=======
class Photos extends React.Component<Props, PhotosState> {
	// Assign props & state to component
	// =======>>>>>>> STATE DECLARATION <<<<<<<=======
	state: PhotosState = {
		isLoading: false,
	};

	// =======>>>>>>> LIFECYCLE METHODS <<<<<<<=======
	componentDidMount() {
		this.initHeader();

		this.setState({ isLoading: true });
		this.props.getPhotosRequest();
	}

	UNSAFE_componentWillReceiveProps(nextProps: Props) {
		if (nextProps.Main.getPhotosSuccess && this.state.isLoading) {
			this.setState({ isLoading: false });
		} else if (nextProps.Main.getPhotosFail && this.state.isLoading) {
			this.setState({ isLoading: false });
		}
	}

	// =======>>>>>>> METHODS INITIALIZE <<<<<<<=======
	/**
	 * method for header initialization
	 */
	initHeader() {
		this.props.navigation.setOptions({
			headerStyle: AppStyle.headerStyle,
			headerTitleStyle: AppStyle.headerTitleStyle,
		});
	}

	/**
	 * Render list of posts
	 */
	renderList() {
		console.log('renderList: ', this.props.Main.data.photos);
		return this.props.Main.data && this.props.Main.data.photos ? (
			<FlatList
				data={this.props.Main.data.photos}
				keyExtractor={(item, index) => item.id.toString()}
				numColumns={5}
				renderItem={({ item, index }) => {
					return (
						<Image
							source={{ uri: item.thumbnailUrl }}
							style={{
								height: Matrics.screenWidth / 5,
								width: Matrics.screenWidth / 5,
								borderColor: Colors.WHITE,
								borderWidth: Scale(1),
								backgroundColor: Colors.LIGHT_GRAY,
							}}
						/>
					);
				}}
			/>
		) : (
			<View style={{ justifyContent: 'center', alignItems: 'center' }}>
				<Text>No Items!</Text>
			</View>
		);
	}

	// =======>>>>>>>> RENDER INITIALIZE <<<<<<<<=======
	render() {
		console.log('Main: ', this.props.Main.data);

		return (
			<View
				style={
					this.state.isLoading
						? {
								...styles.container,
								justifyContent: 'center',
								alignItems: 'center',
						  }
						: styles.container
				}
			>
				{this.state.isLoading ? (
					<ActivityIndicator size="large" color={Colors.PRIMARY_COLOR} />
				) : (
					this.renderList()
				)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.WHITE,
	},
});

// type interface for mapStateToProps
interface LinkStateProps {
	Main: MainReducerState;
}

// type interface for mapDispatchToProps
interface LinkDispatchProps {
	getPhotosRequest: () => void;
}

const mapStateToProps = (state: AppState): LinkStateProps => ({
	Main: state.Main,
});

export default connect(mapStateToProps, { getPhotosRequest })(Photos);
