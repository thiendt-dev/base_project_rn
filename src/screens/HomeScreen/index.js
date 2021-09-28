import React from 'react';
import {Text, View} from 'react-native';
import Config from 'react-native-config';

const HomeScreen = () => {
  const test = Config.APP_ID; // 'https://myapi.com'
  console.log('test 123', Config);
  console.log('screen home');
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
};

export default HomeScreen;
