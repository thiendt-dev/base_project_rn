import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import AppNavigator from './src/navigation/AppNavigator';
import {fcmService} from './src/utils/firebase/FCMService';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    console.log('call app');
    fcmService.registerAppWithFCM();
  }, []);

  return (
    <>
      <NavigationContainer>
        <SafeAreaView style={backgroundStyle}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        </SafeAreaView>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
