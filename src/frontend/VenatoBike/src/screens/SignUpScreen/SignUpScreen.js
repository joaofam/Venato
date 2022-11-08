import React, {useState} from "react";
import { 
    View, 
    Text, 
    StyleSheet,  
    ScrollView,
    Alert
} from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import { useNavigation } from "@react-navigation/core";
import {useForm} from "react-hook-form";
import {Auth} from "aws-amplify";

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {
    const navigation = useNavigation();
    const {
        control,
        handleSubmit,
        watch} = useForm();

    const pwd = watch("password");

    const onRegisterPressed = async data => {
        const {username, password, email, name} = data;
        try {
            await Auth.signUp({
                username,
                password,
                attributes: {email, name, preferred_username: username},
            });
            navigation.navigate("ConfirmEmail", {username});
        } catch (e) {
            Alert.alert("Oops", e.message);
        }
        // console.warn("onRegisterPressed");

    };
    const onSignInPress = () => {
        navigation.navigate("SignIn");
    }
    const onTermsOfUsePressed = () => {
        console.warn("onTermsOfUsePressed");

        // Create Terms of Service page
    }
    const onPrivacyPressed = () => {
        console.warn("onPrivacyPressed");
    }

    return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Create an Account</Text>
            
            <CustomInput 
                name="name"
                control={control}
                placeholder="Name"
                rules={{
                    required: "Name is required",
                    minLength: {
                        value: 2,
                        message: "Name should be at least 2 characters long"
                    },
                    maxLength: {
                        value: 16,
                        message: "Name should be a max of 16 characters long"
                    },
                }}
            />

            <CustomInput 
                name="username"
                control={control}
                placeholder="Username"
                rules={{
                    required: "Username is required",
                    minLength: {
                        value: 2,
                        message: "Username should be at least 2 characters long"
                    },
                    maxLength: {
                        value: 36,
                        message: "Username should be a max of 36 characters long"
                    },
                }}
            />
            <CustomInput 
                name="email"
                placeholder="Email"
                control={control}
                rules={{
                    required: "Email is required",
                    pattern: {value: EMAIL_REGEX, message: "Email is invalid"}
                }}
            />
            <CustomInput
                name="password"
                placeholder="Password"
                control={control}
                secureTextEntry // when typing in password, it is hidden
                rules={{
                    required: "Password is required",
                    minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters long",
                    }

                }}
            />
            <CustomInput
            name="password-repeat"
                placeholder="Repeat Password"
                control={control}
                secureTextEntry // when typing in password, it is hidden
                rules={{
                    validate: value => value === pwd || "Password does not match",
                }}
            />

            
            <CustomButton 
                text="Register" 
                onPress={handleSubmit(onRegisterPressed)} 
            />

            <Text style={styles.text}>
                By registering, you confirm that you accept our{" "}
                <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and{" "}
                <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text>
                </Text>

            <SocialSignInButtons />

            <CustomButton
                text="Already have an account? Login"
                onPress={onSignInPress}
                type="TERTIARY"
            />


        </View>
    </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#051C60",
        margin: 10,
    },
    text: {
        color: "gray",
        marginVertical: 10,
    },
    link: {
        color: "#FDB075"
    },
});


export default SignUpScreen