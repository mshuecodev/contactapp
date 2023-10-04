import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, Text} from 'react-native';

import HomeScreen from 'screens/home/Home';
import HomeStack from './HomeStack';
import ChatStack from './ChatStack';

const Tab = createBottomTabNavigator();

const active = '#6b59f2';
const inactive = '#a0a1b5';

const HomeTab: FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'call' : 'call-outline';
          } else if (route.name === 'Chat') {
            iconName = focused ? 'chatbox' : 'chatbox-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: active,
        tabBarInactiveTintColor: inactive,
      })}>
      {/* <Tab.Screen name="Home" component={HomeStack} /> */}
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Chat" component={ChatStack} />
    </Tab.Navigator>
  );
};

export default HomeTab;
