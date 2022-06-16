import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import todosStorage from './storages/todosStorage';
import DateHead from './components/DateHead';
import AddTodo from './components/AddTodo';
import Empty from './components/Empty';
import TodoList from './components/TodoList';

function App() {
  const today = new Date();

  const [todos, setTodos] = useState([
    {id: 1, text: '작업환경 설정', done: true},
    {id: 2, text: '리액트 네이티브 기초 공부', done: false},
    {id: 3, text: '투두리스트 만들어보기', done: false},
  ]);

  //불러오기
  useEffect(() => {
    todosStorage.get().then(setTodos).catch(console.error);
  }, []);

  //저장
  useEffect(() => {
    todosStorage.set(todos).catch(console.error);
  }, [todos]);

  const onInsert = text => {
    const nextid =
      todos.length > 0 ? Math.max(...todos.map(todo => todos.id)) + 1 : 1;
    const todo = {
      id: nextid,
      text,
      done: false,
    };
    setTodos(todos.concat(todo));
  };

  const onToggle = id => {
    const nextTodos = todos.map(todo =>
      todo.id === id ? {...todo, done: !todo.done} : todo,
    );
    setTodos(nextTodos);
  };

  const onRemove = id => {
    const nextTodos = todos.filter(todo => todo.id !== id);
    setTodos(nextTodos);
  };

  return (
    <SafeAreaView edges={['bottom']} style={styles.block}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        /* behavior={Platform.select({ios: 'padding', android: undefined})} */
        style={styles.avoid}>
        <DateHead date={today} />
        {todos.length === 0 ? (
          <Empty />
        ) : (
          <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
        )}
        <AddTodo onInsert={onInsert} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  avoid: {
    flex: 1,
  },
});

export default App;
