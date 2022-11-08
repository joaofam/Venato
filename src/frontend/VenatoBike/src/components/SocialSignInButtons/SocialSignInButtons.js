import React from 'react';
import CustomButton from '../CustomButton';

const onSignInGoogle = () => {
    console.warn("Google");
}

const SocialSignInButtons = () => {
    return (
        <>
            <CustomButton
                text="Sign In with Google" 
                onPress={onSignInGoogle}
                bgColor="#FAE9EA"
                fgColor="#DD4D44"
            />
            
        </>
    )
}

export default SocialSignInButtons