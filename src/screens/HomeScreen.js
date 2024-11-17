//import liraries
import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

// create a component
const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Welcome Home</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("ColorScreen")}
            >
                <Text style={styles.buttonText}>Go to Colors</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("TextScreen")}
            >
                <Text style={styles.buttonText}>Explore Text</Text>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1e272e',
        paddingHorizontal: 20,
    },
    titleText: {
        fontSize: 40,
        color: '#f5c518',
        fontWeight: 'bold',
        marginBottom: 40,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#4cd137',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginVertical: 10,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
});

//make this component available to the app
export default HomeScreen;
