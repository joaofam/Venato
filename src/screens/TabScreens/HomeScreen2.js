import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen2 = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text> Home Screen </Text>
            <Button
                title="Click Here"
                onPress={() => alert('Button Clicked!')}
            />
        </View>
    )
}

export default HomeScreen2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    },
})