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
import { useForm } from 'react-hook-form';
import { useRoute } from '@react-navigation/native';
import { Auth } from 'aws-amplify';

const ConfirmEmailScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();

    const {
        control,
        handleSubmit,
        watch
        } = useForm(
            {
            defaultValues: {username: route?.params?.username},
        });

        const username = watch('username');
        
    const onConfirmPressed = async data => {
        try {
            await Auth.confirmSignUp(data.username, data.code);
            navigation.navigate('SignIn');
        } catch (e) {
            Alert.alert('Oops', e.message);
        }


        // console.warn(data);
        
    }
    const onSignInPress = () => {
        // console.warn("onSignInPress");
        navigation.navigate('SignIn')
    }

    const onResendPress = async () => {
        try {
            await Auth.resendSignUp(username);
            Alert.alert('Success', 'Code resent to email');
        } catch (e) {
            Alert.alert('Oops', e.message);
        }
    }

    return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Confirm your email</Text>
    
            <CustomInput 
                name='username'
                placeholder='Username'
                control={control}
                rules={{
                    required: 'Username should at least be 2 characters',
                }}
            />
            <CustomInput 
                name='code'
                placeholder='Enter your confirmation code'
                control={control}
                rules={{
                    required: 'Confirmation code is required'
                }}
            />
            <CustomButton 
                text="Confirm" 
                onPress={handleSubmit(onConfirmPressed)} 
            />
            <CustomButton
                text="Resend code" 
                onPress={onResendPress}
                type="SECONDARY"
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


export default ConfirmEmailScreen