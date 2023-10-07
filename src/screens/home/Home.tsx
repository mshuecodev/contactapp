import {ScrollView, View, TouchableOpacity, Animated} from 'react-native';
import React, {FC} from 'react';
import {Text, ButtonIcon, Button, Box, HStack} from '@gluestack-ui/themed';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Phone, User} from 'lucide-react-native';

import ContactScreen from './Contact';
import HistoryScreen from './History';

import styles from 'themes/styles';
import colors from 'themes/color';

const Tab = createMaterialTopTabNavigator();

const HomeScreen: FC = () => {
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
    </Tab.Navigator>
  );
};

function MyTabBar({state, descriptors, navigation, position}) {
  return (
    <HStack
      alignItems="center"
      justifyContent="center"
      space="md"
      bg="white"
      p={10}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        // const onLongPress = () => {
        //   navigation.emit({
        //     type: 'tabLongPress',
        //     target: route.key,
        //   });
        // };

        return (
          <Button
            onPress={onPress}
            isFocusVisible={isFocused}
            borderRadius="$full"
            bg={isFocused ? colors.primary : colors.secondary}>
            <ButtonIcon
              as={
                label === 'History' ? Phone : label === 'Contact' ? User : null
              }
            />
          </Button>
        );
      })}
    </HStack>
  );
}

export default HomeScreen;
