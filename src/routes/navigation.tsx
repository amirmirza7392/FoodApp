import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

// Auth Screens
import ForgotPassword from '../screens/Auth/ForgotPassword';
import ResetPassword from '../screens/Auth/ResetPassword';
import Signup from '../screens/Auth/Signup';
import Login from '../screens/Auth/Login';
import OTP from '../screens/Auth/OTP';

// Main Screens
import Profile from '../screens/Main/Profile';
import Home from '../screens/Main/Home';

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  OTP: undefined;
  ResetPassword: undefined;
  ForgotPassword: undefined;
  Signup: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Signup">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="OTP" component={OTP} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default Routes;
