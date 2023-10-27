import {Platform} from 'react-native';
import React from 'react';
import Toast, {
  BaseToast,
  ErrorToast,
  InfoToast,
} from 'react-native-toast-message';

import {colors} from '../utils/colors';

const toastConfig = {
  success: ({...props}) => (
    <BaseToast
      {...props}
      style={{
        backgroundColor: colors.success,
        borderLeftColor: colors.success,
        marginTop: Platform.OS === 'ios' ? 10 : -40,
        width: '90%',
      }}
      text1Style={{
        fontSize: 15,
        color: colors.white,
      }}
      text2Style={{
        fontSize: 12,
        color: colors.white,
      }}
    />
  ),

  error: ({text1Style: {}, text2Style: {}, ...props}) => (
    <ErrorToast
      {...props}
      style={{
        backgroundColor: colors.error,
        borderLeftColor: colors.error,
        marginTop: Platform.OS === 'ios' ? 10 : -40,
        width: '90%',
        zIndex: 1,
      }}
      text1Style={{
        fontSize: 15,
        color: colors.white,
      }}
      text2Style={{
        fontSize: 12,
        color: colors.white,
      }}
    />
  ),

  info: ({text1Style: {}, text2Style: {}, ...props}) => (
    <InfoToast
      {...props}
      style={{
        backgroundColor: colors.info,
        borderLeftColor: colors.info,
        marginTop: Platform.OS === 'ios' ? 10 : -40,
        width: '90%',
      }}
      text1Style={{
        fontSize: 15,
        color: colors.white,
      }}
      text2Style={{
        fontSize: 12,
        color: colors.white,
      }}
    />
  ),
};

const showToast = (type: string, heading: string, discription?: string) => {
  let message = discription;

  Toast.show({
    type: type,
    text1: heading,
    text2: message,
  });
};

export {toastConfig, showToast};
