import React from 'react';
import {SafeAreaView} from 'react-native';
import Box from './components/Box';

// SafeAreaView 컴포넌트는 iPhone X 이상 기종에서 디스플레이의 보이지 않는 영역 및 최하단 영역에 내용이 보여지는 것을 방지

const App = () => {
  return (
    <SafeAreaView>
      <Box rounded={true} color="blue" size="large" />
    </SafeAreaView>
  );
};

export default App;
