import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import screenNames from '../constants/screenNames';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ChatScreen from '../screens/ChatScreen';
import NotificationScreen from '../screens/NotificationScreen';
import {fcmService} from '../utils/firebase/FCMService';
import {localNotificationService} from '../utils/firebase/LocalNotificationService';
import SplashScreen from 'react-native-splash-screen';
import IconComponent from '../components/Icon';
import HomeStack from './HomeStack';

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
      initialRouteName={screenNames.HOME_SCREEN}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showLabel: true,
        style: {
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          elevation: 0,
          height: 80,
          zIndex: 1,
          backgroundColor: '#fff',
          borderRadius: 40,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 12}}>
              <IconComponent icon={focused ? 'ic_home_active' : 'ic_home'} />
              <Text style={styles.labelTab}>チャット</Text>
            </View>
          ),
        }}
        name={screenNames.HOME_SCREEN}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 12}}>
              <IconComponent icon={focused ? 'ic_home_active' : 'ic_home'} />
              <Text style={styles.labelTab}>ミーティング</Text>
            </View>
          ),
        }}
        name={screenNames.CHAT_SCREEN}
        component={ChatScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                width: 85,
                height: 85,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
                borderRadius: 85 / 2,
                top: 5,
              }}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 70,
                  width: 70,
                  borderRadius: 35,
                  backgroundColor: '#59CDD5',
                }}>
                <IconComponent icon={focused ? 'ic_home_active' : 'ic_home'} />
                <Text style={styles.labelTab}>ホーム</Text>
              </View>
            </View>
          ),
        }}
        name={screenNames.SEARCH_SCREEN}
        component={SearchScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 12}}>
              <IconComponent icon={focused ? 'ic_home_active' : 'ic_home'} />
              <Text style={styles.labelTab}>ブックマーク</Text>
            </View>
          ),
        }}
        name={screenNames.NOTIFICATION_SCREEN}
        component={NotificationScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 12}}>
              <IconComponent icon={focused ? 'ic_home_active' : 'ic_home'} />
              <Text style={styles.labelTab}>プロフィール</Text>
            </View>
          ),
        }}
        name={screenNames.PROFILE_SCREEN}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
  shadow: {
    shadowColor: '#999DA1',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  labelTab: {
    fontSize: 10,
    marginTop: 10,
  },
});

export default AppNavigator;
