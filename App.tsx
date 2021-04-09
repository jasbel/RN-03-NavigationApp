import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { LateralBasicMenu } from './src/navigator/LateralBasicMenu';
import { LateralMenu } from './src/navigator/LateralMenu';

const App = () => {
  return (
    <NavigationContainer>
      {/* <NavigatorStack /> */}
      <LateralMenu />
    </NavigationContainer>
  );
}

export default App
