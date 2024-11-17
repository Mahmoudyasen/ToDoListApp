import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ColorScreen</Text>
      <Button
        title="Random Color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />
      <FlatList
        data={colors}
        keyExtractor={(item, index) => index.toString()} 
        renderItem={({ item }) => (
          <View
            style={[
              styles.colorBox,
              { backgroundColor: item }, 
            ]}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  colorBox: {
    width: 100,
    height: 100,
    margin: 10,
  },
});

export default ColorScreen;