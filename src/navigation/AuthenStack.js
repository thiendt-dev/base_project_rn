import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import screenNames from '../constants/screenNames';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import NotificatonScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();
const AuthenStackNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={screenNames.HOME_SCREEN} component={HomeScreen} />
      <Tab.Screen name={screenNames.SEARCH_SCREEN} component={SearchScreen} />
      <Tab.Screen
        name={screenNames.NOTIFICATION_SCREEN}
        component={NotificatonScreen}
      />
      <Tab.Screen name={screenNames.PROFILE_SCREEN} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default AuthenStackNavigator;
