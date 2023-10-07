import {View, Text} from 'react-native';
import React, {FC, useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from 'screens/splash/Splash';
import LoggedInNav from './ProtectedNav';
import NotLoggedInNav from './PublicNav';

// context
import {useAuth} from 'context/index';

const Stack = createNativeStackNavigator();

const MainNav: FC = () => {
  // context
  const {userToken, setUserToken, isLoading, setIsLoading} = useAuth();

  const getUserToken = async () => {
    // testing purposes
    const sleep = (ms: any) => new Promise(r => setTimeout(r, ms));
    try {
      // custom logic
      await sleep(2000);
      const token = null;
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
        <Stack.Screen name="Home" component={LoggedInNav} />
      )}
    </Stack.Navigator>
  );
};

export default MainNav;
