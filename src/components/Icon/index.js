import * as React from 'react';
import {Image, View} from 'react-native';
import {icons} from '../../assets/Icon';

const IconComponent = props => {
  const {icon} = props;
  return (
    <View style={{}}>
      <Image style={{}} source={icons[icon ?? 'close']} />
    </View>
  );
};
export default IconComponent;
