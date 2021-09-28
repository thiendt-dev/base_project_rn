import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import screenNames from '../constants/screenNames';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';
import NotificationScreen from '../screens/NotificationScreen';
import {fcmService} from '../utils/firebase/FCMService';
import {localNotificationService} from '../utils/firebase/LocalNotificationService';
import SplashScreen from 'react-native-splash-screen';

const Tab = createBottomTabNavigator();
const AppNavigator = () => {
  useEffect(() => {
    SplashScreen.hide();
    console.log('call config notification');
    // fcmService.register(onRegister, onNotification, onOpenNotification);
    // localNotificationService.configure(onOpenNotification);

    // function onRegister(token) {
    //   console.log('[App] onRegister: ', token);
    // }

    // function onNotification(remoteMessage) {
    //   console.log('[App] onNotification: ', remoteMessage);
    // }

    // function onOpenNotification(remoteMessage) {
    //   console.log('[App] onOpenNotification: ', remoteMessage);
    // }

    // return () => {
    //   console.log('[App] unRegister');
    //   fcmService.unRegister();
    //   localNotificationService.unregister();
    // };
  }, []);

  return (
    <Tab.Navigator
      // screenOptions={({route}) => ({
      //   showLabel: false,

      //   tabBarIcon: ({focused, color, size}) => {
      //     let iconName;
      //     if (route.name === 'Home') {
      //       iconName = focused
      //         ? 'ios-information-circle'
      //         : 'ios-information-circle-outline';
      //     } else if (route.name === 'Settings') {
      //       iconName = focused ? 'ios-list-box' : 'ios-list';
      //     }

      //     // You can return any component that you like here!
      //     // return <Ionicons name={iconName} size={size} color={color} />;
      //   },
      // })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showLabel: false,
      }}>
      <Tab.Screen name={screenNames.HOME_SCREEN} component={HomeScreen} />
      <Tab.Screen name={screenNames.SEARCH_SCREEN} component={SearchScreen} />
      <Tab.Screen
        name={screenNames.NOTIFICATION_SCREEN}
        component={NotificationScreen}
      />
      <Tab.Screen name={screenNames.PROFILE_SCREEN} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
});

export default AppNavigator;
