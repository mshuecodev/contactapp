import {View, Text} from 'react-native';
import React, {FC, useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from 'screens/splash/Splash';
import LoggedInNav from './ProtectedNav';
import NotLoggedInNav from './PublicNav';

const Stack = createNativeStackNavigator();

const MainNav: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null); //public state

  const getUserToken = async () => {
    // testing purposes
    const sleep = (ms: any) => new Promise(r => setTimeout(r, ms));
    try {
      // custom logic
      await sleep(2000);
      const token = '111';
      setUserToken(token);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUserToken();
  }, []);

  if (isLoading) {
    // We haven't finished checking for the token yet
    return <SplashScreen />;
  }
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {userToken == null ? (
        // No token found, user isn't signed in
        <Stack.Screen
          name="SignIn"
          component={NotLoggedInNav}
          initialParams={{setUserToken}}
        />
      ) : (
        // User is signed in
        <Stack.Screen name="Contact" component={LoggedInNav} />
      )}
    </Stack.Navigator>
  );
};

export default MainNav;
