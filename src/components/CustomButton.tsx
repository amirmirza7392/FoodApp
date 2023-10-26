import {Text, TouchableOpacity, View, ActivityIndicator} from 'react-native';
import React, {FC} from 'react';

import {metrics} from '../utils/metrics';
import {colors} from '../utils/colors';

interface CustomButtonProps {
  onPress?: () => void;
  title: string;
  backgroundColor?: string;
  borderWidth?: number;
  borderColor?: string;
  width?: string | number;
  height?: number;
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'stretch';
  borderRadius?: number;
  marginTop?: number;
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
  fontSize?: number;
  color?: string;
  fontWeight?: 'normal' | 'bold' | '700' | '800' | '900';
  ShowIcon?: boolean;
  fontFamily?: string;
  IconFamily?: string;
  IconName?: string;
  IconSize?: number;
  IconColor?: string;
  Loading?: boolean;
  disabled?: boolean;
  ActivityIndicatorColor?: string;
}

const CustomButton: FC<CustomButtonProps> = ({
  onPress,
  title,
  backgroundColor,
  borderWidth,
  borderColor,
  width,
  height,
  alignSelf,
  borderRadius,
  marginTop,
  marginBottom,
  marginRight,
  marginLeft,
  fontSize,
  color,
  fontWeight,
  ShowIcon,
  Loading,
  disabled,
  ActivityIndicatorColor,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      disabled={disabled || !onPress}
      style={{
        backgroundColor: disabled
          ? colors.placeHolder
          : backgroundColor || colors.blue,
        borderWidth: borderWidth,
        borderColor: borderColor || colors.white,
        width: width || '100%',
        height: metrics.height(height || 55),
        alignSelf: alignSelf || 'center',
        marginRight: marginRight,
        marginTop: marginTop,
        marginLeft: marginLeft,
        marginBottom: marginBottom,
        borderRadius: borderRadius || 5,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        {Loading ? (
          <ActivityIndicator color={ActivityIndicatorColor || colors.white} />
        ) : (
          <Text
            allowFontScaling={false}
            style={{
              fontSize: metrics.width(fontSize || 14),
              color: color || colors.white,
              fontWeight: fontWeight || '700',
              marginLeft: ShowIcon ? metrics.width(10) : 0,
              letterSpacing: 0.4,
            }}>
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
