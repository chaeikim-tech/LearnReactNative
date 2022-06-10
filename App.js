import React, {useState} from 'react';
import {SafeAreaView, Button} from 'react-native';
import Box from './components/Box';

// SafeAreaView 컴포넌트는 iPhone X 이상 기종에서 디스플레이의 보이지 않는 영역 및 최하단 영역에 내용이 보여지는 것을 방지

const App = () => {
  const [visible, setVisible] = useState(true);
  const onPress = () => {
    setVisible(!visible);
  };
  return (
    <SafeAreaView>
      <Button title="토글" onPress={onPress} />
      {visible ? <Box rounded={true} color="blue" size="large" /> : null}
    </SafeAreaView>
  );
};

export default App;
