import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, Text} from 'react-native';

import HomeScreen from 'screens/home/Home';
import ChatStack from './ChatStack';
import NotificationScreen from 'screens/notifications/NotificationScreen';
import SettingScreen from 'screens/settings/SettingScreen';

const Tab = createBottomTabNavigator();

const active = '#6b59f2';
const inactive = '#a0a1b5';

const HomeTab: FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'call' : 'call-outline';
          } else if (route.name === 'Chat') {
            iconName = focused ? 'chatbox' : 'chatbox-outline';
          } else if (route.name === 'Notification') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          } else if (route.name === 'Setting') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: active,
        tabBarInactiveTintColor: inactive,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Chat" component={ChatStack} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default HomeTab;
