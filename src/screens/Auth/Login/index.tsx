import AsyncStorage from '@react-native-async-storage/async-storage';
import Snackbar from 'react-native-snackbar';
import React, {useState} from 'react';

import CustomText from '../../../components/CustomText';
import CustomInput from '../../../components/CustomInput';
import AuthWrapper from '../../../components/AuthWrapper';

import {isValidEmail, userImage} from '../../../utils/constants';
import {colors} from '../../../utils/colors';

type LoginProps = {
  navigation: any;
};

const Login: React.FC<LoginProps> = ({navigation}) => {
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const onLogin = async () => {
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
    } else if (!password) {
      return Snackbar.show({
        text: 'Password is required',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: colors.error,
        textColor: colors.white,
      });
    } else {
      const payload = {name: 'Amir Mirza', email, image: userImage};
      await AsyncStorage.setItem('userData', JSON.stringify(payload));
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'Home',
          },
        ],
      });
      setEmail(null);
      setPassword(null);
      Snackbar.show({
        text: 'Login Success',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: colors.success,
        textColor: colors.white,
      });
    }
  };
  const inputs = [
    {
      id: 1,
      placeholder: 'example@gmail.com',
      label: 'Email',
      value: email,
      onChange: setEmail,
    },
    {
      id: 2,
      placeholder: '********',
      label: 'Password',
      value: password,
      onChange: setPassword,
      secureTextEntry: true,
      maxLength: 8,
    },
  ];
  return (
    <AuthWrapper
      title="Login"
      buttontitle="Login"
      bottomText="Signup"
      onPress={onLogin}
      ShowBottomText>
      {inputs?.map(item => (
        <CustomInput
          key={item.id}
          placeholder={item.placeholder}
          withLabel={item.label}
          value={item.value}
          onChangeText={item.onChange}
          borderRadius={100}
          maxLength={item.maxLength}
          secureTextEntry={item.secureTextEntry}
        />
      ))}

      <CustomText
        onPress={() => navigation.navigate('ForgotPassword')}
        label="Forgot Password"
        marginTop={10}
        marginBottom={10}
        color={colors.black}
        fontWeight="bold"
        fontSize={13}
        alignSelf="flex-end"
      />
    </AuthWrapper>
  );
};

export default Login;
