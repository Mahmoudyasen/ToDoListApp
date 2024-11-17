import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now().toString(), text }]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  return (
    <View style={styles.container}>
      <TodoInput addTodo={addTodo} />
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoItem item={item} removeTodo={removeTodo} editTodo={editTodo} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5', 
  },
  text: {
    color: '#333333', 
  },
  input: {
    backgroundColor: '#e0e0e0', 
    color: '#333333',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#757575', 
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff', 
    fontWeight: 'bold',
  },
  todoItem: {
    backgroundColor: '#e0e0e0', 
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  todoText: {
    color: '#333333', 
  },
});

export default App;
