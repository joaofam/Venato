import React from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../CustomButton';

const onSignInFacebook = () => {
    console.warn("Facebook");
}
const onSignInGoogle = () => {
    console.warn("Google");
}
const onSignInApple = () => {
    console.warn("Apple");
}


const SocialSignInButtons = () => {
    return (
        <>
            <CustomButton 
                text="Sign In With Facebook" 
                onPress={onSignInFacebook} 
                bgColor="#E7EAF4"
                fgColor="#4765A9"
            />

            <CustomButton
                text="Sign In with Google" 
                onPress={onSignInGoogle}
                bgColor="#FAE9EA"
                fgColor="#DD4D44"
            />

            <CustomButton
                text="Sign In with Apple" 
                onPress={onSignInApple}
                bgColor="#e9e9e9"
                fgColor="#363636"
            />
        </>
    )
}

export default SocialSignInButtons