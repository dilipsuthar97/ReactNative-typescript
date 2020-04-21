// =======>>>>>>>> LIBRARIES <<<<<<<<=======
import React from 'react';
import { FunctionComponent } from 'react';
import { TouchableOpacity, Animated, View, Text } from 'react-native';

// =======>>>>>>>> ASSETS <<<<<<<<=======
import { Colors, Scale, Images } from '../CommonConfig';
import { BottomTabDescriptorMap, BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import { NavigationHelpers, ParamListBase, TabNavigationState } from '@react-navigation/core';

let springValue1 = new Animated.Value(0.9)
let springValue2 = new Animated.Value(0.8)
let springValue3 = new Animated.Value(0.8)
let springValue4 = new Animated.Value(0.8)

interface Props {
    navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
    descriptors: BottomTabDescriptorMap;
    state: TabNavigationState;
}

const Tabbar: FunctionComponent<Props> = ({ state, descriptors, navigation }) => {
    return (
        <View style={{ flexDirection: 'row', height: Scale(56), backgroundColor: Colors.WHITE, alignItems: 'center', shadowColor: Colors.GRAY, shadowOpacity: 0.2}}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;
                const spring = (val: number) => {
                    springValue1.setValue(0.8)
                    springValue2.setValue(0.8)
                    springValue3.setValue(0.8)
                    springValue4.setValue(0.8)
                    if (val == 0) {
                        Animated.spring(
                            springValue1,
                            {
                                toValue: 0.9,
                                friction: 1
                            }
                        ).start()
                    } else if (val == 1) {
                        Animated.spring(
                            springValue2,
                            {
                                toValue: 0.9,
                                friction: 1
                            }
                        ).start()
                    } else if (val == 2) {
                        Animated.spring(
                            springValue3,
                            {
                                toValue: 0.9,
                                friction: 1
                            }
                        ).start()
                    } else if (val == 3) {
                        Animated.spring(
                            springValue4,
                            {
                                toValue: 0.9,
                                friction: 1
                            }
                        ).start()
                    }
                }
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });
                    spring(index)
                    console.log(index, "indexindex")
                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                        // if (route.name == 'Settings') {
                        //     navigation.openDrawer();
                        // } else {
                        //     navigation.navigate(route.name);
                        // }
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityStates={isFocused ? ['selected'] : []}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        activeOpacity={0.4}
                        onLongPress={onLongPress}
                        style={{ flex: 1, height: Scale(45), justifyContent: 'center', alignItems: 'center' }}
                    >
                        {index == 0 && <Animated.Image source={Images.IC_POSTS} style={[{ height: isFocused ? Scale(32) : Scale(30), width: isFocused ? Scale(32) : Scale(30), tintColor: isFocused ? Colors.PRIMARY_COLOR : Colors.GRAY }, springValue1 ? { transform: [{ scale: springValue1 }] } : {}]} resizeMode={'contain'} />}
                        {index == 1 && <Animated.Image source={Images.IC_ALBUMS} style={[{ height: isFocused ? Scale(32) : Scale(30), width: isFocused ? Scale(32) : Scale(30), tintColor: isFocused ? Colors.PRIMARY_COLOR : Colors.GRAY}, springValue2 ? { transform: [{ scale: springValue2 }] } : {}]} resizeMode={'contain'} />}
                        {index == 2 && <Animated.Image source={Images.IC_PHOTOS} style={[{ height: isFocused ? Scale(32) : Scale(30), width: isFocused ? Scale(32) : Scale(30), tintColor: isFocused ? Colors.PRIMARY_COLOR : Colors.GRAY }, springValue3 ? { transform: [{ scale: springValue3 }] } : {}]} resizeMode={'contain'} />}
                        {/* {index == 3 && <Animated.Image source={isFocused ? ImagesPath.MenuIcon : ImagesPath.MenuIcon} style={[{ height: isFocused ? Scale(32) : Scale(30), width: isFocused ? Scale(32) : Scale(30), tintColor: isFocused ? Colors.APPCOLOR : Colors.LIGHT_GRAY }, springValue4 ? { transform: [{ scale: springValue4 }] } : {}]} resizeMode={'contain'} />} */}

                        {/*------>>>>>> IF YOU WANT TO DISPLAY LABELS UNDER TAB ICON ENABLE THIS BELOW LINE <<<<<<--------*/}
                        <Text style={{ color: isFocused ? Colors.BLACK : Colors.GRAY, fontWeight: isFocused ? 'bold' : 'normal' }}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

export default Tabbar;