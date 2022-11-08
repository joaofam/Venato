import React, {useEffect, useState,} from 'react';
import { View,
     Text, 
     Image, 
     StyleSheet,
    } from 'react-native';
import Icon from 'react-native-ionicons';
import Logo from '../../../assets/images/Venato.png';


export default function HomeScreen2({ navigation }) {

    


    const link = () => {
        console.warn("LinkPressed");
    }

    const tutorial = () => {
        console.warn("TutorialPressed");
    }

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const url = "https://oqlp9x6gu1.execute-api.eu-west-1.amazonaws.com/venato/coords";

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error)=>console.error(error))
            .finally(() => setLoading(false))
    }, []);
    
    return (
        <View style={{  flex: 0.75,
                        alignItems: 'center', 
                        justifyContent: 'center',
                        backgroundColor: "#d7d8da",
                        padding: 10,
                        marginLeft: '7%',
                        borderRadius: 5,
                        marginBottom: 15,
                        marginTop: 15,
                        // marginRight: "128%",
                        maxWidth: '200%',
                        //alignSelf: 'flex-end',
                        width: 340,
                        borderRadius: 25,
                        borderColor: '#63c5da',
                        }}>
            <Text
                onPress={() => alert('This is the "Home" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Welcome To</Text>
                        <Image 
                            source={Logo}
                            style={[styles.logo]}
                        />
                        <Text
                        style={{ fontSize: 18, fontWeight: 'bold'}}>
                        Are you interested in the ability to{" "}
                        <Text style={{ color: 'red'}}>track your bike? </Text>
                        If so, then please follow this{" "}
                        {/* <TouchableOpacity> */}
                        <Text style={{color: '#03c04a'}} onPress={link}>link </Text>
                        {/* </TouchableOpacity> */}
                         to purchase our kit and watch a {" "}
                        <Text style={{color: '#63c5da'}} onPress={tutorial}>tutorial </Text>
                        to be fully set and ready to {" "}
                        <Text style={{color: '#ed7117'}}>tracking your bike! </Text>
                        </Text>   
        </View>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain'
    },
});
