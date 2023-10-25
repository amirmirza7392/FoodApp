import React, {FC, useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import CustomText from './CustomText';
import {colors} from '../utils/colors';
import {metrics} from '../utils/metrics';

interface CustomInputProps {
  placeholder?: string;
  inputStyle?: StyleProp<TextStyle>;
  placeholderTextColor?: string;
  onChangeText?: (text: string) => void;
  value?: string;
  keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad';
  secureTextEntry?: boolean;
  marginRight?: number;
  marginLeft?: number;
  withLabel?: string;
  borderColor?: string;
  labelStyle?: StyleProp<TextStyle>;
  backgroundColor?: string;
  borderRadius?: number;
  height?: number;
  paddingHorizontal?: number;
  searchIcon?: boolean;
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
  searchSize?: number;
  searchColor?: string;
  calendarIcon?: boolean;
  onCalendar?: () => void;
  showTip?: boolean;
  setTip?: () => void;
  reference?: React.Ref<TextInput>;
  width?: number | string;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  label?: string;
  labelColor?: string;
  textStyle?: StyleProp<TextStyle>;
  mainStyle?: StyleProp<ViewStyle>;
  onFocus?: () => void;
  onBlur?: () => void;
  autoFocus?: boolean;
  customData?: any;
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
          fontSize={metrics.width(12)}
          color={colors.black}
          label={withLabel}
          marginTop={metrics.height(12)}
        />
      )}

      <View
        style={{
          flexDirection: flexDirection || 'row',
          alignItems: alignItems || 'center',
          paddingVertical: paddingVertical || metrics.height(10),
          borderWidth: borderWidth || 1,
          borderColor: borderColor || colors.black,
          backgroundColor: backgroundColor || colors.black,
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
              onPress={() => setHidePass(!hidePass)}></TouchableOpacity>
          )}
        </View>
      </View>
      {!!errorMessage ? (
        <CustomText
          label={errorMessage}
          color={colors.red}
          marginTop={metrics.height(-13)}
          marginBottom={metrics.height(10)}
          textStyle={textStyle}
          width={errorWidth || '60%'}
          alignSelf={errorAlignSelf || 'auto'}
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
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: metrics.width(15),
  },
});
