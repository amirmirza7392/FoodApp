import React, {useState} from 'react';

import CustomText from '../../../components/CustomText';
import CustomInput from '../../../components/CustomInput';
import AuthWrapper from '../../../components/AuthWrapper';

type ResetPasswordProps = {
  navigation: any;
};

const ResetPassword: React.FC<ResetPasswordProps> = ({navigation}) => {
  const [password, setPassword] = useState<string | null>(null);
  const [convertPassword, setConvertPassword] = useState<string | null>(null);
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
      value: convertPassword,
      onChange: setConvertPassword,
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
      onPress={() => navigation.navigate('Login')}>
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
