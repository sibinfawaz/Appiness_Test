import {Dimensions, Platform} from 'react-native';
export const DIMENSION = {
  screenHeight: Dimensions.get('window').height,
  screenWidth: Dimensions.get('window').width,
};
export const PLATFORMS = {
  ANDROID: Platform.OS === 'android',
  IOS: Platform.OS === 'ios',
};
