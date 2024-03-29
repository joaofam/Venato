import React, {useState} from 'react';
import { 
    View, 
    Text, 
    Image, 
    StyleSheet, 
    useWindowDimensions, 
    ScrollView,
    Alert,
    TextInput
} from 'react-native';
import Logo from '../../../assets/images/Venato.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form'
  
import {Auth} from 'aws-amplify';


const SingInScreen = () => {
    const {height} = useWindowDimensions();
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    const {
        control,
        handleSubmit,
        formState: {errors}, 
      } = useForm();
    
    

    const onSignInPressed = async data => {
        if (loading) {
            return;
        }
        setLoading(true); // start loading function
        try {
            const response = await Auth.signIn(data.username, data.password);
            console.log(response);
        } catch (e) {
            Alert.alert('Oops', e.message);
        }
        setLoading(false); // finish loading

        

        // console.warn("Sign in");
        // // validate user
        //navigation.navigate('Home');
    };

    const onForgotPasswordPressed = () => {
        console.warn("onForgotPasswordPressed");
        
        navigation.navigate('ForgotPassword');
    }

    const onSignUpPress = () => {
        console.warn("onSignUpPress");
         
        navigation.navigate('SignUp');
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.root}>
            <Image
              source={Logo}
              style={[styles.logo, {height: height * 0.3}]}
              resizeMode="contain"
            />
    
            <CustomInput
              name="username"
              placeholder="Username"
              control={control}
              rules={{required: 'Username is required'}}
            />
    
            <CustomInput
              name="password"
              placeholder="Password"
              secureTextEntry
              control={control}
              rules={{
                  required: 'Password is required',
                  minLength: {
                  value: 3,
                  message: 'Password should be minimum 3 characters long',
                },
              }}
            />
    
            <CustomButton 
              text={loading ? "Loading..." : "Sign In"}
              onPress={handleSubmit(onSignInPressed)} /> 
    
            <CustomButton
              text="Forgot password?"
              onPress={onForgotPasswordPressed}
              type="TERTIARY"
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


export default SingInScreen;


// Validation for password : https://react-hook-form.com/get-started#Applyvalidation