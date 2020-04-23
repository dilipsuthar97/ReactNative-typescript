import { Dimensions, Platform } from 'react-native';
import { scale, StatusBarHeight } from './Helpers/functions';

const { width, height } = Dimensions.get('window');

const screenHeight: number = width < height ? height : width
const screenWidth: number = width < height ? width : height

const Scale = (val: number): number => {
  return scale(val)
};

export default Scale;
export { screenHeight, screenWidth, StatusBarHeight }
