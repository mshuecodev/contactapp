import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignInScreen from 'screens/auth/SignIn';
import SignUpScreen from 'screens/auth/SignUp';

const Stack = createNativeStackNavigator();

const PublicNav: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default PublicNav;
