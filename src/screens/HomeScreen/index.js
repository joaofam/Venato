import { Auth } from 'aws-amplify';
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const index = () => {
    const signOut = () => {
        Auth.signOut();
    };
    return (
        <View style={StyleSheet.container}>
            <Text> Home Screen </Text>
            <Button
                title="Click Here"
                onPress={() => alert('Button Clicked!')}
            />
            <Text 
                onPress={signOut}
                style={{
                    width: '100%',
                    textAlign: 'center',
                    color: 'red',
                    marginTop: 'auto',
                    marginVertical: 20,
                    fontSize: 20,
            }}>
            Sign Out
            </Text>
        </View>
    )
}
export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    },
})