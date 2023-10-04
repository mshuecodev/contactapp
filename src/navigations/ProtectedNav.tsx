import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from 'screens/home/Home';
import HomeTab from './HomeTab';
import DetailScreen from 'screens/home/Detail';
import ContactFormScreen from 'screens/home/ContactForm';
import GroupFormScreen from 'screens/home/GroupForm';

const Stack = createNativeStackNavigator();

const CahtStack: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeTab} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="ContactForm" component={ContactFormScreen} />
      <Stack.Screen name="GroupForm" component={GroupFormScreen} />
    </Stack.Navigator>
  );
};

export default CahtStack;
