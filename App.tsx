import React from 'react';
import {config, GluestackUIProvider, Text} from '@gluestack-ui/themed';
import {NavigationContainer} from '@react-navigation/native';

import Routes from 'navigations/MainNav';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <GluestackUIProvider config={config.theme}>
        <Routes />
      </GluestackUIProvider>
    </NavigationContainer>
  );
}
export default App;
