// =======>>>>>>>> LIBRARIES <<<<<<<<=======
import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator, FlatList, Image } from 'react-native';
import { connect } from 'react-redux';

// =======>>>>>>>> ASSETS <<<<<<<<=======
import { AppStyle, Colors, Matrics, Scale } from '../../CommonConfig';
import { getPhotosRequest } from '../../Redux/Actions';

// =======>>>>>>>> CLASS DECLARATION <<<<<<<<=======
class Photos extends React.Component {
    // =======>>>>>>> STATE DECLARATION <<<<<<<=======
    state = {
        isLoading: false
    };

    // =======>>>>>>> LIFECYCLE METHODS <<<<<<<=======
    componentDidMount() {
        this.initHeader()

        this.setState({ isLoading: true })
        this.props.getPhotosRequest()
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.Main.getPhotosSuccess && this.state.isLoading) {
            this.setState({ isLoading: false })
        } else if (nextProps.Main.getPhotosFail && this.state.isLoading) {
            this.setState({ isLoading: false })
        }
    }

    // =======>>>>>>> METHODS INITIALIZE <<<<<<<=======
    initHeader() {
        this.props.navigation.setOptions({
            headerStyle: AppStyle.headerStyle,
            headerTitleStyle: AppStyle.headerTitleStyle
        })
    }

    renderList() {
        console.log('renderList: ', this.props.Main.data.photos)
        return (
            this.props.Main.data && this.props.Main.data.photos
            ? <FlatList
                data={this.props.Main.data.photos}
                keyExtractor={(item, index) => item.id.toString()}
                numColumns={3}
                renderItem={({item, index}) => {
                    return <Image source={{uri: item.thumbnailUrl}} style={{
                        height: Matrics.screenWidth / 3,
                        width: Matrics.screenWidth / 3,
                        borderColor: Colors.WHITE,
                        borderWidth: Scale(1),
                        backgroundColor: Colors.LIGHT_GRAY
                    }}/>
                }}
            />
            : <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text>No Items!</Text>
            </View>
        )
    }

    // =======>>>>>>>> RENDER INITIALIZE <<<<<<<<=======
    render() {
        console.log('Main: ', this.props.Main.data)
        const rootStyle = this.state.isLoading ? [styles.container, {justifyContent: 'center', alignItems: 'center'}] : styles.container

        return <View style={rootStyle}>
            {this.state.isLoading ? <ActivityIndicator size="large" color={Colors.PRIMARY_COLOR}/> : this.renderList()}
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE
    }
})

const mapStateToProps = state => {
    return {
        Main: state.Main
    }
}

export default connect(mapStateToProps, { getPhotosRequest })(Photos);