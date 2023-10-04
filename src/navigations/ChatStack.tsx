import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ChatScreen from 'screens/chats/Chat';

const Stack = createNativeStackNavigator();

const CahtStack: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
};

export default CahtStack;
