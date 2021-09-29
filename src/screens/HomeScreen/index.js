import React, {useState} from 'react';
import {Image, Text, View, Modal, TouchableOpacity} from 'react-native';
import Config from 'react-native-config';
import {RootSiblingPortal} from 'react-native-root-siblings';
import {icons} from '../../assets/Icon';
// import { setSiblingWrapper } from 'react-native-root-siblings';

const HomeScreen = () => {
  const test = Config.APP_ID; // 'https://myapi.com'
  console.log('test 123', Config);
  console.log('screen home');
  const [introduce, setIntroduce] = useState(true);
  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: 'yellow',
      }}>
      <RootSiblingPortal>
        {introduce ? (
          <TouchableOpacity
            activeOpacity={1}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
            onPress={() => {
              setIntroduce(false);
            }}>
            <Image
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                // resizeMode: 'contain',
              }}
              source={icons.Subtract}></Image>
          </TouchableOpacity>
        ) : null}
      </RootSiblingPortal>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: 50,
          backgroundColor: 'green',
        }}>
        <Text>123sÏ</Text>
        <Text>123sÏ</Text>
        <Text>123sÏ</Text>
      </View>
      {/* <Text>Home! 123</Text> */}
    </View>
  );
};

export default HomeScreen;
