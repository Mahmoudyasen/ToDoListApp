import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const TodoItem = ({ item, removeTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(item.text);

  const handleSave = () => {
    if (newText.trim()) {
      editTodo(item.id, newText);
      setIsEditing(false);
    }
  };

  return (
    <View style={styles.item}>
      {isEditing ? (
        <TextInput
          style={styles.input}
          value={newText}
          onChangeText={setNewText}
        />
      ) : (
        <Text style={styles.text}>{item.text}</Text>
      )}
      <View style={styles.buttons}>
        {isEditing ? (
          <Button title="Save" onPress={handleSave} />
        ) : (
          <Button title="Edit" onPress={() => setIsEditing(true)} />
        )}
        <Button title="Delete" color="#ff5c5c" onPress={() => removeTodo(item.id)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    fontSize: 16,
    flex: 1,
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    fontSize: 16,
  },
  buttons: {
    flexDirection: 'row',
    gap: 10,
  },
});

export default TodoItem;
