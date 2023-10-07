import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from 'screens/home/Home';
import HomeTab from './HomeTab';
import ContactFormScreen from 'screens/home/ContactForm';
import GroupFormScreen from 'screens/home/GroupForm';
import ContactDetailScreen from 'screens/home/ContactDetail';

const Stack = createNativeStackNavigator();

const CahtStack: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeTab} />
      <Stack.Screen name="ContactForm" component={ContactFormScreen} />
      <Stack.Screen name="GroupForm" component={GroupFormScreen} />
      <Stack.Screen name="ContactDetail" component={ContactDetailScreen} />
    </Stack.Navigator>
  );
};

export default CahtStack;
