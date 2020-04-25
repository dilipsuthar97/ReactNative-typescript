// =======>>>>>>>> LIBRARIES <<<<<<<<=======
import * as React from 'react';
import {
	StyleSheet,
	View,
	Text,
	FlatList,
	ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';

// =======>>>>>>>> ASSETS <<<<<<<<=======
import { AppStyle, Colors, Matrics, Scale } from '../../CommonConfig';
import { getAlbumsRequest } from '../../Redux/Actions';
import { MainReducerState } from '../../Types/Reducers.interface';
import { AppState } from '../../Redux/Store';
import { NavigationProp } from '@react-navigation/core';

// type inteface for props
interface AlbumsProps {
	navigation: NavigationProp<any>;
}

// type interface for state
interface AlbumsState {
	isLoading: boolean;
}

// Link all props here
type Props = AlbumsProps & LinkStateProps & LinkDispatchProps;

// =======>>>>>>>> CLASS DECLARATION <<<<<<<<=======
class Albums extends React.Component<Props, AlbumsState> {
	// Assign props & state to component
	// =======>>>>>>> STATE DECLARATION <<<<<<<=======
	state: AlbumsState = {
		isLoading: false,
	};

	// =======>>>>>>> LIFECYCLE METHODS <<<<<<<=======
	componentDidMount() {
		this.initHeader();

		this.setState({ isLoading: true });
		this.props.getAlbumsRequest();
	}

	UNSAFE_componentWillReceiveProps(nextProps: Props) {
		if (nextProps.Main.getAlbumsSuccess && this.state.isLoading) {
			this.setState({ isLoading: false });
		} else if (nextProps.Main.getAlbumsFail && this.state.isLoading) {
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
	 * FlatList item seperator view
	 */
	itemSeparator() {
		return <View style={{ height: Scale(10) }} />;
	}

	/**
	 * Render list of posts
	 */
	renderList() {
		return this.props.Main.data && this.props.Main.data.albums ? (
			<FlatList
				data={this.props.Main.data.albums}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item, index }) => {
					return (
						<View
							style={{
								borderBottomWidth: Scale(1),
								borderBottomColor: Colors.LIGHT_GRAY,
								paddingHorizontal: Scale(16),
								paddingVertical: Scale(8),
							}}
						>
							<Text>{item.title}</Text>
						</View>
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
	getAlbumsRequest: () => void;
}

const mapStateToProps = (
	state: AppState,
	ownProps: AlbumsProps
): LinkStateProps => ({
	Main: state.Main,
});

export default connect(mapStateToProps, { getAlbumsRequest })(Albums);
