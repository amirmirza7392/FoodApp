import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import BrainBox from './src/components/BrainBox';
import Routes from './src/routes/navigation';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BrainBox>
          <Routes />
        </BrainBox>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
