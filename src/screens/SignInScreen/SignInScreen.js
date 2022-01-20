import React, {useState} from 'react';
import { 
    View, 
    Text, 
    Image, 
    StyleSheet, 
    useWindowDimensions, 
    ScrollView 
} from 'react-native';
import Logo from '../../../assets/images/Logo_1.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';



const SingInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();

    const onSignInPressed = () => {
        console.warn("Sign in");
    }

    const onForgotPasswordPressed = () => {
        console.warn("onForgotPasswordPressed");
    }

    const onSignUpPress = () => {
        console.warn("onSignUpPress");
    }

    return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Image 
                source={Logo}
                style={[styles.logo, {height: height * 0.3}]} 
                resizeMode='contain'
            />
            
            <CustomInput 
                placeholder='Username' 
                value={username} 
                setValue={setUsername}
            />
            <CustomInput 
                placeholder='Password'
                value={password}
                setValue={setPassword}
                secureTextEntry //when typing in password, it is hidden
            />

            
            <CustomButton 
                text="Sign In" 
                onPress={onSignInPressed} 
            />

            <CustomButton 
                text="Forgot Password?" 
                onPress={onForgotPasswordPressed} 
                type='TERTIARY' 
            />

            <SocialSignInButtons />

            <CustomButton
                text="Don't have an account? Create one" 
                onPress={onSignUpPress}
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
    logo: {
        width: '70%',
        maxWidth: 300,
        maxheight: 200,
    },
});


export default SingInScreen