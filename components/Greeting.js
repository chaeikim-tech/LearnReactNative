import React from 'react';
import {View, Text} from 'react-native';

function Greeting(props) {
  return (
    <View>
      <Text>Hi! {props.name}!</Text>
    </View>
  );
}

Greeting.defaultProps = {
  name: '리액트 네이티브',
};

export default Greeting;
