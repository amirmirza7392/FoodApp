import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

// Screens
import Login from '../screens/Auth/Login';
import Home from '../screens/Main/Home';

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'Login'}>
      <Stack.Screen name={'Login'} component={Login} />
      <Stack.Screen name={'Home'} component={Home} />
    </Stack.Navigator>
  );
};

export default Routes;
