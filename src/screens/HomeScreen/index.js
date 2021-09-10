import React from 'react';
import {Text, View} from 'react-native';

const HomeScreen = () => {
  console.log('screen home');
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
};

export default HomeScreen;
