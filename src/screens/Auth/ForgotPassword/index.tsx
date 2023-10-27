import React, {useState} from 'react';

import CustomInput from '../../../components/CustomInput';
import AuthWrapper from '../../../components/AuthWrapper';

interface ForgotPasswordProps {
  navigation: any;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({navigation}) => {
  const [email, setEmail] = useState<string | null>(null);

  return (
    <AuthWrapper
      isBack
      title="Forgot Your Password"
      buttontitle="Continue"
      onPress={() => navigation.navigate('OTP')}>
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
