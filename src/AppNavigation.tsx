// =======>>>>>>>> LIBRARIES <<<<<<<<=======
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

import { Colors, AppStyle } from './CommonConfig'
import BottomTabBar from './Components/BottomTabBar';

// =======>>>>>>>> SCREENS <<<<<<<<=======
import PostsScreen from './Screen/HomeModule/Posts';
import AlbumsScreen from './Screen/HomeModule/Albums';
import PhotosScreen from './Screen/HomeModule/Photos';
import TodosScreen from './Screen/DrawerModule/Todos';
import UsersScreen from './Screen/DrawerModule/Users';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// =======>>>>>>>> CLASS DECLARATION <<<<<<<<=======
class AppNavigation extends React.Component {
    // =======>>>>>>>> LIFECYCLE METHODS <<<<<<<<=======
    componentDidMount() {
        console.disableYellowBox = true;
    }

    // =======>>>>>>>> RENDER INITIALIZE <<<<<<<<=======
    render() {
        return (
            <SafeAreaProvider>
                <NavigationContainer>
                    <Drawer.Navigator
                        hideStatusBar={true}
                        statusBarAnimation='fade'
                        initialRouteName='Home'
                        drawerPosition='left'
                        drawerType='back'
                        overlayColor='1'
                        drawerStyle={{
                            backgroundColor: Colors.WHITE,
                        }}
                        drawerContentOptions={{
                            activeTintColor: Colors.PRIMARY_COLOR,
                        }}
                    >
                        <Drawer.Screen name='Home' component={TabNavigator}/>
                        <Drawer.Screen name='Todos' component={TodosStack}/>
                        <Drawer.Screen name='Users' component={UsersStack}/>
                    </Drawer.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        )
    }
}

// =======>>>>>>>> MAIN TAB NAVIGATOR <<<<<<<<=======
const TabNavigator = ({ navigation, route }: { navigation: any, route: any }) => {
    return (
        <SafeAreaView style={AppStyle.safeArea} forceInset={{top: 'never'}}>
            <Tab.Navigator
                initialRouteName='Posts'
                backBehavior='initialRoute'
                tabBar={BottomTabBar}
            >
                <Tab.Screen name='Posts' component={PostsStack} />
                <Tab.Screen name='Albums' component={AlbumsStack} />
                <Tab.Screen name='Photos' component={PhotosStack} />
            </Tab.Navigator>
        </SafeAreaView>
    )
}

// =======>>>>>>>> POSTS TAB <<<<<<<<=======
const PostsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Posts' component={PostsScreen}/>
        </Stack.Navigator>
    )
}

// =======>>>>>>>> ALBUMS TAB <<<<<<<<=======
const AlbumsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Albums' component={AlbumsScreen}/>
        </Stack.Navigator>
    )
}

// =======>>>>>>>> PHOTOS TAB <<<<<<<<=======
const PhotosStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Photos' component={PhotosScreen}/>
        </Stack.Navigator>
    )
}

// =======>>>>>>>> TODOS SCREEN STACK <<<<<<<<=======
const TodosStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Todos" component={TodosScreen}/>
        </Stack.Navigator>
    )
}

// =======>>>>>>>> TODOS SCREEN STACK <<<<<<<<=======
const UsersStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Users' component={UsersScreen}/>
        </Stack.Navigator>
    )
}

export default AppNavigation;