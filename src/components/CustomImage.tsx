import {ActivityIndicator, View, StyleProp} from 'react-native';
import React from 'react';
import FastImage, {
  ImageStyle,
  ResizeMode,
  Source,
} from 'react-native-fast-image';

interface ComponentProps {
  source: number | Source;
  style: StyleProp<ImageStyle>;
  isPostAttachment?: boolean;
  resizeMode?: ResizeMode;
}

const CustomImage: React.FC<ComponentProps> = ({source, style, resizeMode}) => {
  const [isImageLoading, setIsImageLoading] = React.useState(false);
  return (
    <View
      style={
        isImageLoading ? {justifyContent: 'center', alignItems: 'center'} : {}
      }>
      <FastImage
        onLoadStart={() => setIsImageLoading(true)}
        onLoadEnd={() => setIsImageLoading(false)}
        source={source}
        resizeMode={resizeMode}
        style={style}
      />

      {isImageLoading ? (
        <ActivityIndicator
          style={{position: 'absolute'}}
          color="#999999"
          size="large"
        />
      ) : null}
    </View>
  );
};

export default CustomImage;
