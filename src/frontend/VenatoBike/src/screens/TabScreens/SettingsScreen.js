import React from 'react';
import { View,  
    SafeAreaView, 
    StyleSheet,
    Button,
    Text,
    } from 'react-native';

import {
    Avatar,
    Title,
    Caption,
    TouchableRipple,
    } from 'react-native-paper';

import Logo from '../../../assets/images/Venato.png';
import Icon from 'react-native-vector-icons/Ionicons';
import { Auth } from 'aws-amplify';

export default function SettingsScreen() {

    const signOut = () => {
        Auth.signOut();
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.userInfoSection}>
                <View style={{flexDirection: 'row', marginTop: 15}}>
                    <Avatar.Image 
                        source={Logo}
                        size={80}
                        />
                    <View style={{marginLeft: 20}}>
                        <Title style={[styles.title, {
                            marginTop: 15,
                            marginBottom:5,
                        }]}>Joao Pereira</Title>
                        {/* Make ICON SAME SIZE AS @ */}
                        <View style={styles.row}>
                        
                        <Icon name="logo-instagram" color='pink'></Icon>
                        <Caption style={styles.caption}> - @jo.aao</Caption>
                        </View>
                    </View> 
                </View>
            </View>

            <View style={styles.userInfoSection}>
                <View style={styles.row}>
                    <Icon name="map" color="#777777" size={20}/>
                    <Text style={{color:"#777777", marginLeft: 20}}>Dublin Ireland</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="call" color="#777777" size={20}/>
                    <Text style={{color:"#777777", marginLeft: 20}}>+353-83-329-4067</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="mail" color="#777777" size={20}/>
                    <Text style={{color:"#777777", marginLeft: 20}}>joaopereira2213@gmail.com</Text>
                </View>

            
            </View>
                <View style={styles.menuWrapper}>
                    <TouchableRipple onPress={() => {}}>
                <View style={styles.menuItem}>
                    <Icon name="list" color="#74b72e" size={25}/>
                    <Text style={styles.menuItemText}>History</Text>
                </View>
                    </TouchableRipple>
                    
                    <TouchableRipple onPress={() => {}}>
                <View style={styles.menuItem}>
                    <Icon name="person" color="#63c5da" size={25}/>
                    <Text style={styles.menuItemText}>Edit Profile</Text>
                </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => {}}>
                <View style={styles.menuItem}>
                    <Icon name="information" color="#ed7117" size={25}/>
                    <Text style={styles.menuItemText}>Help</Text>
                </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => {}}>
                <View style={styles.menuItem}>
                    <Icon name="settings" color="#fa86c9" size={25}/>
                    <Text style={styles.menuItemText}>Settings</Text>
                </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => {}}>
                <View style={styles.menuItem}>
                    <Icon name="checkmark" color="#466d1d" size={25}/>
                    <Text style={styles.menuItemText}>Terms and Conditions</Text>
                </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => {}}>
                <View style={styles.menuItem}>
                    <Icon name="log-out" color="#FF6347" size={25}/>
                    <Text 
                        onPress={signOut}
                        style={styles.menuItemText}>
                        Sign Out
                    </Text>
                </View>
                    </TouchableRipple>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    userInfoSection: {
      paddingHorizontal: 30,
      marginBottom: 25,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      fontWeight: '500',
    },
    row: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    infoBoxWrapper: {
      borderBottomColor: '#dddddd',
      borderBottomWidth: 1,
      borderTopColor: '#dddddd',
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 100,
    },
    infoBox: {
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    menuWrapper: {
      marginTop: 10,
    },
    menuItem: {
      flexDirection: 'row',
      paddingVertical: 15,
      paddingHorizontal: 30,
    },
    menuItemText: {
      color: '#777777',
      marginLeft: 20,
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 26,
    },
  });