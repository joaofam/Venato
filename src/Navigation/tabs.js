import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import HomeScreen from '../screens/TabScreens/HomeScreen2';
import ChatScreen from '../screens/TabScreens/ChatScreen';
import FindScreen from '../screens/TabScreens/FindScreen';
import SettingsScreen from '../screens/TabScreens/SettingsScreen'


const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Find" component={FindScreen}/>
            <Tab.Screen name="Chat" component={ChatScreen}/>
            <Tab.Screen name="Settings" component={SettingsScreen}/>
        </Tab.Navigator>
    );
}

// const Tabs = () => {
//     return(
//         <Tab.Navigator 
//             tabBarOptions={{
//                 showLabel: false,
//                 style: {
//                     position: 'absolute',
//                     bottom: 25,
//                     left: 20,
//                     right: 20,
//                     elevation: 0,
//                     backgroundColor: '#ffffff',
//                     borderRadius: 15,
//                     height: 90,
//                     ...styles.shadow
//                 }

//         }}>
//             <Tab.Screen name="Home" component={HomeScreen} options={{
//                 tabBarIcon: ({focused}) => (
//                     <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
//                         <Image
//                         sopurce={require('../../assets/images/icons/home.png')}
//                         resizeMode='contain'
//                         style={{
//                             width: 25,
//                             height:25,
//                             tintColor: focused ? 'e32f45' : '#748c94'
//                         }}
//                          />
//                         <Text 
//                             style={{color: focused ? 'e32f45' : '#748c94', fontSize: 12}}>
//                         Home
//                         </Text>
//                     </View>
//                 ),
//             }} />
//             <Tab.Screen name="Home" component={ChatScreen}
//             options={{
//                 tabBarIcon: ({focused}) => (
//                     <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
//                         <Image
//                         sopurce={require('../../assets/images/icons/map.png')}
//                         resizeMode='contain'
//                         style={{
//                             width: 25,
//                             height:25,
//                             tintColor: focused ? 'e32f45' : '#748c94'
//                         }}
//                          />
//                         <Text 
//                             style={{color: focused ? 'e32f45' : '#748c94', fontSize: 12}}>
//                         FIND
//                         </Text>
//                     </View>
//                 ),
//             }} />
//             <Tab.Screen name="Home" component={FindScreen}
//             options={{
//                 tabBarIcon: ({focused}) => (
//                     <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
//                         <Image
//                         sopurce={require('../../assets/images/icons/home.png')}
//                         resizeMode='contain'
//                         style={{
//                             width: 25,
//                             height:25,
//                             tintColor: focused ? 'e32f45' : '#748c94'
//                         }}
//                          />
//                         <Text 
//                             style={{color: focused ? 'e32f45' : '#748c94', fontSize: 12}}>
//                         Settings
//                         </Text>
//                     </View>
//                 ),
//             }} />
//             <Tab.Screen name="Home" component={SettingsScreen}
//             options={{
//                 tabBarIcon: ({focused}) => (
//                     <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
//                         <Image
//                         sopurce={require('../../assets/images/icons/profile.png')}
//                         resizeMode='contain'
//                         style={{
//                             width: 25,
//                             height:25,
//                             tintColor: focused ? 'e32f45' : '#748c94'
//                         }}
//                          />
//                         <Text 
//                             style={{color: focused ? 'e32f45' : '#748c94', fontSize: 12}}>
//                         Profile
//                         </Text>
//                     </View>
//                 ),
//             }} />
//         </Tab.Navigator>
//     );
// }

// const style = StyleSheet.create({
//     shadow: {
//         shadowColor: '#7F5DF0',
//         shadowOffset: {
//             width: 0,
//             height: 10,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.5,
//         elevation: 5,
//     }
// })

export default Tabs;