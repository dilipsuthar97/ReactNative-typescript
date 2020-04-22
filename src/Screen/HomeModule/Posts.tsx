// =======>>>>>>>> LIBRARIES <<<<<<<<=======
import * as React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, ActivityIndicator, FlatList } from 'react-native';
import { connect } from 'react-redux';

// =======>>>>>>>> ASSETS <<<<<<<<=======
import { AppStyle, Images, Scale, Colors } from '../../CommonConfig';
import { getPostsRequest } from '../../Redux/Actions';
import ItemPost from '../../Components/Item/ItemPost';
import SafeAreaView from 'react-native-safe-area-view';

// =======>>>>>>>> TYPES <<<<<<<<=======
import { MainReducer } from '../../Types/Reducers';
import { AppState } from '../../Redux/Store';
import { StackNavigationProp } from '@react-navigation/stack';
import { DrawerNavigationProp } from '@react-navigation/drawer';

interface PostsProps {
    navigation: StackNavigationProp<any> & DrawerNavigationProp<any>
}

interface PostsState {
    isLoading: boolean
}

type Props = PostsProps & LinkStateProps & LinkDispatchProps

// =======>>>>>>>> CLASS DECLARATION <<<<<<<<=======
class Posts extends React.Component<Props, PostsState> {

    // =======>>>>>>> STATE DECLARATION <<<<<<<=======
    state = {
        isLoading: false
    };

    // =======>>>>>>> LIFECYCLE METHODS <<<<<<<=======
    componentDidMount() {
        this.initHeader()

        // setTimeout(() => this.props.navigation.openDrawer(), 1000)

        this.setState({ isLoading: true })
        this.props.getPostsRequest();
    }

    UNSAFE_componentWillReceiveProps(nextProps: Props) {
        if (nextProps.Main.getPostsSuccess && this.state.isLoading) {
            this.setState({ isLoading: false })
        } else if (nextProps.Main.getPostsFail && this.state.isLoading) {
            this.setState({ isLoading: false })
        }
    }

    // =======>>>>>>> METHODS INITIALIZE <<<<<<<=======
    initHeader() {
        this.props.navigation.setOptions({
            headerStyle: AppStyle.headerStyle,
            headerTitleStyle: AppStyle.headerTitleStyle,
            headerTitleAlign: 'center',
            headerLeft: () => {
                // console.log('headerLeft props', props)
                return (
                    <TouchableOpacity style={{marginLeft: Scale(16)}} onPress={() => this.props.navigation.openDrawer()}>
                        <Image source={Images.IC_MENU} style={{ height: Scale(20), width: Scale(20), tintColor: Colors.WHITE }}/>
                    </TouchableOpacity>
                )
            }
        })
    }

    itemSeparator() {
        return <View style={{height: Scale(10)}}/>
    }

    renderPosts() {
        return (
            this.props.Main.data && this.props.Main.data.posts
                ? <FlatList
                    data={this.props.Main.data.posts}
                    ItemSeparatorComponent={this.itemSeparator}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item, index}) => <ItemPost item={item} style={{
                        marginTop: index == 0 ? Scale(10) : 0,
                        marginBottom: this.props.Main.data.posts ? this.props.Main.data.posts.length -1 == index ? Scale(10) : 0 : 0
                    }}/>}
                />
                : <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text>No Items!</Text>
                </View>
        )
    }

    // =======>>>>>>>> RENDER INITIALIZE <<<<<<<<=======
    render() {

        console.log('Main: ', this.props.Main.data)
        
        return (
            <SafeAreaView style={AppStyle.safeArea}>
                <View style={this.state.isLoading ? {...styles.container, justifyContent: 'center', alignItems: 'center'} : styles.container}>
                    {this.state.isLoading ? <ActivityIndicator size="large" color={Colors.PRIMARY_COLOR}/> : this.renderPosts()}
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE
    }
})

interface LinkStateProps {
    Main: MainReducer
}

interface LinkDispatchProps {
    getPostsRequest: () => void
}

const mapStateToProps = (state: AppState, ownProps: PostsProps): LinkStateProps => ({
    Main: state.Main
})

const mapDispatchToProps: LinkDispatchProps = {
    getPostsRequest: () => (getPostsRequest())
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);