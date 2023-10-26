import React, {FC, useState} from 'react';
import {
  TouchableOpacity,
  TextInput,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  View,
} from 'react-native';

import CustomText from './CustomText';
import Icons from './CustomIcon';

import {metrics} from '../utils/metrics';
import {colors} from '../utils/colors';

interface CustomInputProps {
  placeholder?: string;
  inputStyle?: StyleProp<TextStyle>;
  placeholderTextColor?: string;
  onChangeText?: any;
  value?: any;
  keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad';
  secureTextEntry?: boolean;
  withLabel?: string;
  borderColor?: string;
  labelStyle?: StyleProp<TextStyle>;
  backgroundColor?: string;
  borderRadius?: number;
  height?: number;
  paddingHorizontal?: number;
  borderWidth?: number;
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'stretch';
  multiline?: boolean;
  textAlignVertical?: 'auto' | 'top' | 'bottom' | 'center';
  marginTop?: number;
  marginBottom?: number;
  maxLength?: number;
  onPress?: () => void;
  flexDirection?: 'row' | 'column';
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  paddingVertical?: number;
  i_Iocn?: boolean;
  errorMessage?: string;
  editable?: boolean;
  inputTextColor?: string;
  reference?: React.Ref<TextInput>;
  width?: number | string;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  label?: string;
  textStyle?: StyleProp<TextStyle>;
  mainStyle?: StyleProp<ViewStyle>;
  onFocus?: () => void;
  onBlur?: () => void;
  autoFocus?: boolean;
  errorWidth?: number | string;
  errorAlignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'stretch';
}

const CustomInput: FC<CustomInputProps> = ({
  placeholder,
  inputStyle,
  placeholderTextColor,
  onChangeText,
  value,
  keyboardType,
  secureTextEntry,
  withLabel,
  borderColor,
  labelStyle,
  backgroundColor,
  borderRadius,
  height,
  paddingHorizontal,
  borderWidth,
  alignSelf,
  multiline,
  textAlignVertical,
  marginTop,
  marginBottom,
  maxLength,
  onPress,
  flexDirection,
  alignItems,
  paddingVertical,
  errorMessage,
  editable,
  inputTextColor,
  reference,
  width,
  autoCapitalize,
  textStyle,
  mainStyle,
  onFocus,
  onBlur,
  autoFocus,
  errorWidth,
  errorAlignSelf,
}) => {
  const [hidePass, setHidePass] = useState<boolean>(secureTextEntry || false);

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      disabled={!onPress}
      style={[styles.main, mainStyle]}>
      {withLabel && (
        <CustomText
          textStyle={labelStyle}
          fontSize={16}
          color={colors.black}
          label={withLabel}
          marginTop={12}
          marginBottom={5}
          fontWeight="500"
        />
      )}

      <View
        style={{
          flexDirection: flexDirection || 'row',
          alignItems: alignItems || 'center',
          paddingVertical: paddingVertical || metrics.height(10),
          borderWidth: borderWidth || 1,
          borderColor: borderColor || colors.placeHolder,
          backgroundColor: backgroundColor || colors.white,
          borderRadius: borderRadius || 5,
          height: metrics.height(height || 55),
          paddingHorizontal: paddingHorizontal || 15,
          width: width || '100%',
          alignSelf: alignSelf || 'center',
          marginTop: marginTop,
          marginBottom: marginBottom,
        }}>
        <TextInput
          autoFocus={autoFocus || false}
          style={[
            {
              width: !secureTextEntry ? '90%' : '100%',
              height: '100%',
              color: inputTextColor || colors.black,
              padding: 0,
              textAlignVertical: textAlignVertical,
              fontSize: metrics.width(14),
            },
            inputStyle,
          ]}
          placeholder={placeholder}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          secureTextEntry={hidePass}
          autoCapitalize={autoCapitalize}
          placeholderTextColor={placeholderTextColor || colors.placeHolder}
          value={value}
          multiline={multiline}
          editable={editable}
          maxLength={maxLength}
          ref={reference}
          onFocus={onFocus}
          onBlur={onBlur}
        />

        <View style={styles.iconContainer}>
          {secureTextEntry && (
            <TouchableOpacity
              style={{
                marginLeft: metrics.width(15),
              }}
              onPress={() => setHidePass(!hidePass)}>
              <Icons
                family="Entypo"
                size={metrics.width(20)}
                name={hidePass ? 'eye-with-line' : 'eye'}
                color={colors.black}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
      {!!errorMessage ? (
        <CustomText
          label={errorMessage}
          color={colors.red}
          textStyle={textStyle}
          width={errorWidth || '60%'}
          marginTop={5}
          alignSelf={errorAlignSelf || 'flex-start'}
        />
      ) : null}
    </TouchableOpacity>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  main: {
    width: '100%',
  },
  iconContainer: {
    position: 'absolute',
    right: metrics.width(20),
  },
});
