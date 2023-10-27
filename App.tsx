import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import React from 'react';

import {toastConfig} from './src/components/CustomToast';
import BrainBox from './src/components/BrainBox';
import Routes from './src/routes/navigation';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BrainBox>
          <Routes />
          <Toast config={toastConfig} />
        </BrainBox>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
