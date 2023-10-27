import Snackbar from 'react-native-snackbar';
import React, {useState} from 'react';

import CustomInput from '../../../components/CustomInput';
import AuthWrapper from '../../../components/AuthWrapper';

import {isValidEmail} from '../../../utils/constants';
import {colors} from '../../../utils/colors';

interface SignupProps {
  navigation: any;
}

const Signup: React.FC<SignupProps> = ({navigation}) => {
  const [image, setImage] = useState<any>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [confirmPassword, setConfirmPassword] = useState<string | null>(null);

  const onSignup = () => {
    if (!image) {
      return Snackbar.show({
        text: 'Profile image is required',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: colors.error,
        textColor: colors.white,
      });
    } else if (!userName) {
      return Snackbar.show({
        text: 'Full Name is required',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: colors.error,
        textColor: colors.white,
      });
    } else if (!email) {
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
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'Home',
          },
        ],
      });
      setImage(null);
      setUserName(null);
      setEmail(null);
      setPassword(null);
      setConfirmPassword(null);
    }
  };

  const inputs = [
    {
      id: 0,
      placeholder: 'john doe',
      label: 'Full Name',
      value: userName,
      onChange: setUserName,
    },
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
    {
      id: 3,
      placeholder: '********',
      label: 'Confirm Password',
      value: confirmPassword,
      onChange: setConfirmPassword,
      secureTextEntry: true,
      maxLength: 8,
    },
  ];

  return (
    <AuthWrapper
      title="Signup"
      buttontitle="Signup"
      bottomText="Login"
      image={image}
      hideLogo
      setImage={setImage}
      onPress={onSignup}
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
    </AuthWrapper>
  );
};

export default Signup;
