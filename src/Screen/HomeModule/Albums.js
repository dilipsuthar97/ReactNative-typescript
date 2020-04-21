// =======>>>>>>>> LIBRARIES <<<<<<<<=======
import React from 'react'
import { StyleSheet, View, Text, FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

// =======>>>>>>>> ASSETS <<<<<<<<=======
import { AppStyle, Colors, Matrics, Scale } from '../../CommonConfig';
import { getAlbumsRequest } from '../../Redux/Actions';

// =======>>>>>>>> CLASS DECLARATION <<<<<<<<=======
class Albums extends React.Component {
    // =======>>>>>>> STATE DECLARATION <<<<<<<=======
    state = {
        isLoading: false
    };

    // =======>>>>>>> LIFECYCLE METHODS <<<<<<<=======
    componentDidMount() {
        this.initHeader()

        this.setState({ isLoading: true })
        this.props.getAlbumsRequest()
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.Main.getAlbumsSuccess && this.state.isLoading) {
            this.setState({ isLoading: false })
        } else if (nextProps.Main.getAlbumsFail && this.state.isLoading) {
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

    itemSeparator() {
        return <View style={{height: Scale(10)}}/>
    }

    renderList() {
        return (
            this.props.Main.data && this.props.Main.data.albums
                ? <FlatList
                    data={this.props.Main.data.albums}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item, index}) => {
                        return <View style={{borderBottomWidth: Scale(1), borderBottomColor: Colors.LIGHT_GRAY, paddingHorizontal: Scale(16), paddingVertical: Scale(8)}}>
                            <Text >{item.title}</Text>
                        </View>
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

export default connect(mapStateToProps, { getAlbumsRequest })(Albums);