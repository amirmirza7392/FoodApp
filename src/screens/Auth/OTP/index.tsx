import React, {useEffect, useState} from 'react';

import AuthWrapper from '../../../components/AuthWrapper';
import CustomText from '../../../components/CustomText';
import OTPInput from '../../../components/OTPInput';

import {colors} from '../../../utils/colors';

interface OTPProps {
  navigation: any;
  route: {
    params: {
      email: string | undefined;
    };
  };
}

const OTP: React.FC<OTPProps> = ({navigation, route}) => {
  const email = route?.params?.email;
  const [countdown, setCountdown] = useState<number | null>(null);

  useEffect(() => {
    if (countdown && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [countdown]);

  return (
    <AuthWrapper
      isBack
      headingMarginTop={40}
      headingMarginBottom={5}
      title="Verification Code"
      hideButton>
      <CustomText
        marginBottom={50}
        fontSize={14}
        marginLeft={10}
        label={`OTP sent to your ${
          !email || email === undefined ? 'example@gmail.com' : `"${email}"`
        }`}
      />
      <OTPInput
        length={4}
        onInputComplete={otp => navigation.navigate('ResetPassword')}
      />
      <CustomText
        onPress={() => {
          if (!countdown || countdown <= 0) {
            setCountdown(60);
          }
        }}
        label={`Resend OTP${
          countdown && countdown > 0 ? ` in (${countdown}sec)` : ''
        }`}
        color={colors.blue}
        disabled={countdown && countdown > 0}
        alignSelf="flex-end"
        marginRight={15}
        marginTop={15}
        fontSize={16}
        fontWeight="bold"
      />
    </AuthWrapper>
  );
};

export default OTP;
