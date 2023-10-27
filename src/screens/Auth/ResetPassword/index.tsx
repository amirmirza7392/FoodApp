import React, {useState} from 'react';

import CustomText from '../../../components/CustomText';
import CustomInput from '../../../components/CustomInput';
import AuthWrapper from '../../../components/AuthWrapper';
import Snackbar from 'react-native-snackbar';
import {colors} from '../../../utils/colors';

type ResetPasswordProps = {
  navigation: any;
};

const ResetPassword: React.FC<ResetPasswordProps> = ({navigation}) => {
  const [password, setPassword] = useState<string | null>(null);
  const [confirmPassword, setConfirmPassword] = useState<string | null>(null);
  const onContinue = () => {
    if (!password) {
      return Snackbar.show({
        text: 'Password is required',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: colors.error,
        textColor: colors.white,
      });
    } else if (!confirmPassword) {
      return Snackbar.show({
        text: 'Confirm Password is required',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: colors.error,
        textColor: colors.white,
      });
    } else if (password !== confirmPassword) {
      return Snackbar.show({
        text: 'Password and Confirm Password not match',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: colors.error,
        textColor: colors.white,
      });
    } else {
      navigation.navigate('Login');
      setPassword(null);
      setConfirmPassword(null);
    }
  };
  const inputs = [
    {
      id: 1,
      placeholder: '********',
      label: 'Password',
      value: password,
      onChange: setPassword,
      maxLength: 8,
    },
    {
      id: 2,
      placeholder: '********',
      label: 'Convert Password',
      value: confirmPassword,
      onChange: setConfirmPassword,
      maxLength: 8,
    },
  ];
  return (
    <AuthWrapper
      isBack
      title="Reset Password"
      buttontitle="Continue"
      headingMarginTop={40}
      headingMarginBottom={5}
      onPress={onContinue}>
      <CustomText
        marginBottom={50}
        fontSize={14}
        label="Enter your new password down below."
      />
      {inputs?.map(item => (
        <CustomInput
          key={item.id}
          placeholder={item.placeholder}
          withLabel={item.label}
          value={item.value}
          onChangeText={item.onChange}
          borderRadius={100}
          maxLength={8}
          secureTextEntry
        />
      ))}
    </AuthWrapper>
  );
};

export default ResetPassword;
