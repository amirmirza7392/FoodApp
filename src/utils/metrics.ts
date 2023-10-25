import {Dimensions, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');

export const metrics = {
  screenHeight: width < height ? height : width,
  screenWidth: width < height ? width : height,

  // functions
  height(value: number | string) {
    const givenWidth = typeof value === 'number' ? value : parseFloat(value);
    const multiPly = givenWidth * 0.23;
    return PixelRatio.roundToNearestPixel((width * multiPly) / 100);
  },
  width(value: number | string) {
    const givenHeight = typeof value === 'number' ? value : parseFloat(value);
    const multiPly = givenHeight * 0.108;
    return PixelRatio.roundToNearestPixel((height * multiPly) / 100);
  },
};
