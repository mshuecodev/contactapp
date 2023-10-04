import {ScrollView, View, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {Text} from '@gluestack-ui/themed';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import Animated from 'react-native-reanimated';

import ContactScreen from './Contact';
import HistoryScreen from './History';

import styles from 'themes/styles';

const Tab = createMaterialTopTabNavigator();

const HomeScreen: FC = () => {
  return (
    <Tab.Navigator
    // tabBar={props => <MyTabBar {...props} />}
    >
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
    </Tab.Navigator>
  );
};

// function MyTabBar({state, descriptors, navigation, position}) {
//   return (
//     <View style={{flexDirection: 'row', paddingTop: 20}}>
//       {state.routes.map((route, index) => {
//         const {options} = descriptors[route.key];
//         const label =
//           options.tabBarLabel !== undefined
//             ? options.tabBarLabel
//             : options.title !== undefined
//             ? options.title
//             : route.name;

//         const isFocused = state.index === index;

//         const onPress = () => {
//           const event = navigation.emit({
//             type: 'tabPress',
//             target: route.key,
//           });

//           if (!isFocused && !event.defaultPrevented) {
//             navigation.navigate(route.name);
//           }
//         };

//         const onLongPress = () => {
//           navigation.emit({
//             type: 'tabLongPress',
//             target: route.key,
//           });
//         };
//         // modify inputRange for custom behavior
//         const inputRange = state.routes.map((_, i) => i);
//         // const opacity = Animated.interpolate(position, {
//         //   inputRange,
//         //   outputRange: inputRange.map((i) => (i === index ? 1 : 0)),
//         // });

//         return (
//           <TouchableOpacity
//             accessibilityRole="button"
//             accessibilityState={isFocused ? {selected: true} : {}}
//             accessibilityLabel={options.tabBarAccessibilityLabel}
//             testID={options.tabBarTestID}
//             onPress={onPress}
//             onLongPress={onLongPress}
//             style={{flex: 1}}>
//             <Text>{label}</Text>
//             {/* <Animated.Text style={{ opacity }}>{label}</Animated.Text> */}
//           </TouchableOpacity>
//         );
//       })}
//     </View>
//   );
// }

export default HomeScreen;
