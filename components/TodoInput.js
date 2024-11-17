import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const TodoInput = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        value={text}
        onChangeText={setText}
      />
      <Button title="Add" onPress={handleAddTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    marginRight: 10,
    padding: 8,
    borderRadius: 4,
  },
});

export default TodoInput;
