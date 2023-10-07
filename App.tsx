import React from 'react';
import {config, GluestackUIProvider, Text} from '@gluestack-ui/themed';
import {NavigationContainer} from '@react-navigation/native';
// context provider
import wrapWithProviders from './src/helpers/MultiProvider';
import {AuthProvider, ContactProvider} from 'context/index';

import Routes from 'navigations/MainNav';

function App(): JSX.Element {
  // context providers
  const providers = [AuthProvider, ContactProvider];
  return wrapWithProviders(
    providers,
    <NavigationContainer>
      <GluestackUIProvider config={config.theme}>
        <Routes />
      </GluestackUIProvider>
    </NavigationContainer>,
  );
}
export default App;
