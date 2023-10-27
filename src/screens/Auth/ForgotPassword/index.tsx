import Snackbar from 'react-native-snackbar';
import React, {useState} from 'react';

import CustomInput from '../../../components/CustomInput';
import AuthWrapper from '../../../components/AuthWrapper';
import {isValidEmail} from '../../../utils/constants';
import {colors} from '../../../utils/colors';

interface ForgotPasswordProps {
  navigation: any;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({navigation}) => {
  const [email, setEmail] = useState<string | null>(null);
  const onContinue = () => {
    if (!email) {
      return Snackbar.show({
        text: 'Email is required',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: colors.error,
        textColor: colors.white,
      });
    } else if (!isValidEmail(email)) {
      return Snackbar.show({
        text: 'Email not valid',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: colors.error,
        textColor: colors.white,
      });
    } else {
      navigation.navigate('OTP', {email});
    }
  };

  return (
    <AuthWrapper
      isBack
      title="Forgot Your Password"
      buttontitle="Continue"
      onPress={onContinue}>
      <CustomInput
        placeholder="example@gmail.com"
        withLabel={'Email'}
        value={email}
        onChangeText={setEmail}
        borderRadius={100}
      />
    </AuthWrapper>
  );
};

export default ForgotPassword;
