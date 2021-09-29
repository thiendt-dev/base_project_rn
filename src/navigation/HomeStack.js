import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import screenNames from '../constants/screenNames';
import HomeScreen from '../screens/HomeScreen';

const Navigation = createStackNavigator();

const HomeStack = ({navigation}) => {
  return (
    <Navigation.Navigator>
      <Navigation.Screen
        name={screenNames.HOME_SCREEN}
        component={HomeScreen}
      />
    </Navigation.Navigator>
  );
};

export default HomeStack;
