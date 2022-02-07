import React, {useState} from 'react';
import { 
    View, 
    Text, 
    StyleSheet,  
    ScrollView,
    Alert
} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import { Auth } from 'aws-amplify';

const ForgotPasswordScreen = () => {
    const {
        control,
        handleSubmit} = useForm(
            // {
            // defaultValues: {
            // username: 'Default username',
            // }, 
        // }
        );

    const navigation = useNavigation();

    const onSendPressed = async data => {
        try {
            await Auth.forgotPassword(data.username);
            navigation.navigate('NewPassword');
        } catch (e) {
            Alert.alert('Oops', e.message);
        }
    };
    
    const onSignInPress = () => {
        console.warn("onSignInPress");

        navigation.navigate('SignIn');
    }
    const onResendPress = () => {
        console.warn("onResendPress");
    }

    return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Reset your Password</Text>
            
            <CustomInput 
                name='username'
                placeholder='Username' 
                control={control}
                rules={{
                    required: 'Username is required',
                }}
            />

            <CustomButton 
                text="Send" 
                onPress={handleSubmit(onSendPressed)} 
            />

            <CustomButton
                text="Back to Sign in" 
                onPress={onSignInPress}
                type="TERTIARY"
            />


        </View>
    </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: '#FDB075'
    },
});


export default ForgotPasswordScreen