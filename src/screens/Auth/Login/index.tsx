import {StyleSheet, View} from 'react-native';
import React from 'react';
import CustomText from '../../../components/CustomText';
import CamraModal from '../../../components/CamraModal';

const Login = () => {
  return (
    <View>
      <CamraModal
        disabled
        handleChange={async res => {
          console.log(res);
        }}
        renderButton={handleChange => (
          <CustomText onPress={handleChange} label="Login" />
        )}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
