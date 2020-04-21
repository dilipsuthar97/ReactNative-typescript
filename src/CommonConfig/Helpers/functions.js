import { Dimensions, Platform, StatusBar } from 'react-native';
// import CryptoJS from 'crypto-js';

// Grab the window object from that native screen size.
const window = Dimensions.get('window');

// The vertical resolution of the screen.
const screenHeight = window.height;

// The horizontal resolution of the screen.
const screenWidth = window.width;

// export const wp = (percentage) => {
//   const value = (percentage * screenWidth) / 100;
//   return Math.round(value);
// };

// The average resolution of common devices, based on a ~5" mobile screen.
//const baselineHeight = screenHeight < 750 ? 680 : 800;
const baselineHeight = screenHeight == 812 ? 800 : 680;

// Check for ios X device
const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;
const isIPhoneX = () => Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS
    ? screenWidth === X_WIDTH && screenHeight === X_HEIGHT || screenWidth === XSMAX_WIDTH && screenHeight === XSMAX_HEIGHT
    : false;

// Scales the item based on the screen height and baselineHeight
export const scale = value => Math.round((screenHeight / baselineHeight) * value);
export const StatusBarHeight = Platform.select({
  ios: isIPhoneX() ? 44 : 20,
  android: StatusBar.currentHeight,
  default: 0
});

export default null;