import React, {FC} from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {colors} from '../utils/colors';
import {metrics} from '../utils/metrics';

interface CustomTextProps {
  textStyle?: StyleProp<TextStyle>;
  fontSize?: number;
  marginTop?: number;
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'stretch';
  fontFamily?: string;
  fontStyle?: TextStyle['fontStyle'];
  textTransform?: TextStyle['textTransform'];
  textAlign?: TextStyle['textAlign'];
  label: string;
  color?: string;
  fontWeight?: TextStyle['fontWeight'];
  bottom?: number;
  width?: number | string;
  borderColor?: string;
  borderBottomWidth?: number;
  onPress?: () => void;
  marginVertical?: number;
  paddingBottom?: number;
  top?: number;
  lineHeight?: number;
  container?: StyleProp<ViewStyle>;
  numberOfLines?: number;
}

const CustomText: FC<CustomTextProps> = ({
  textStyle,
  fontSize,
  marginTop,
  marginBottom,
  marginRight,
  marginLeft,
  alignSelf,
  fontFamily,
  fontStyle,
  textTransform,
  textAlign,
  label,
  color,
  fontWeight,
  bottom,
  width,
  borderColor,
  borderBottomWidth,
  onPress,
  marginVertical,
  paddingBottom,
  top,
  lineHeight,
  container,
  numberOfLines,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      disabled={!onPress}
      style={[styles.mainContainer, container]}>
      <Text
        numberOfLines={numberOfLines}
        allowFontScaling={false}
        style={[
          {
            fontSize: metrics.width(fontSize || 14),
            color: color || colors.black,
            marginTop: marginTop || 0,
            marginBottom: marginBottom || 0,
            marginLeft: marginLeft || 0,
            marginRight: marginRight || 0,
            alignSelf: alignSelf || 'flex-start',
            fontFamily,
            fontStyle,
            lineHeight,
            textAlign,
            textTransform,
            fontWeight,
            bottom,
            borderBottomWidth,
            borderColor,
            width,
            marginVertical,
            paddingBottom,
            top,
          },
          textStyle,
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
  },
});
