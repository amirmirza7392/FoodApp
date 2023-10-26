import {StyleSheet} from 'react-native';
import React, {useState} from 'react';

import CustomInput from '../../../components/CustomInput';
import AuthWrapper from '../../../components/AuthWrapper';
import CustomText from '../../../components/CustomText';

import {colors} from '../../../utils/colors';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState(null);

  return (
    <AuthWrapper
      title="Forgot Your Password"
      buttontitle="Continue"
      onPress={() => {}}>
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

const styles = StyleSheet.create({});
