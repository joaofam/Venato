import * as React from 'react';
import { View,  
    SafeAreaView, 
    StyleSheet,
    Text
    } from 'react-native';

import {
    Avatar,
    Title,
    Caption,
    TouchableRipple,
    } from 'react-native-paper';

import Logo from '../../../assets/images/Venato.png';

import Icon from 'react-native-vector-icons/Ionicons';;

export default function SettingsScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.userInfoSection}>
                <View style={{flexDirection: 'row', marginTop: 15}}>
                    <Avatar.Image 
                        source={{
                        uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
                        }}
                        size={80}
                        />
                    <View style={{marginLeft: 20}}>
                        <Title style={[styles.title, {
                            marginTop: 15,
                            marginBottom:5,
                        }]}>Joao Pereira</Title>
                        {/* Make ICON SAME SIZE AS @ */}
                        <Caption style={styles.caption}>
                        <Icon name="logo-instagram" color='pink'></Icon> - @jo.aao</Caption>
                    </View> 
                </View>
            </View>

            <View style={styles.userInfoSection}>
                <View style={styles.row}>
                    <Icon name="map-outline" color="#777777" size={20}/>
                    <Text style={{color:"#777777", marginLeft: 20}}>Dublin Ireland</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="call-outline" color="#777777" size={20}/>
                    <Text style={{color:"#777777", marginLeft: 20}}>+353-83-329-4067</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="mail-outline" color="#777777" size={20}/>
                    <Text style={{color:"#777777", marginLeft: 20}}>joaopereira2213@gmail.com</Text>
                </View>

            
            </View>
                <View style={styles.menuWrapper}>
                    <TouchableRipple onPress={() => {}}>
                <View style={styles.menuItem}>
                    <Icon name="list" color="#FF6347" size={25}/>
                    <Text style={styles.menuItemText}>History</Text>
                </View>
                    </TouchableRipple>
                    
                    <TouchableRipple onPress={() => {}}>
                <View style={styles.menuItem}>
                    <Icon name="share" color="#FF6347" size={25}/>
                    <Text style={styles.menuItemText}>Tell Your Friends</Text>
                </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => {}}>
                <View style={styles.menuItem}>
                    <Icon name="information" color="#FF6347" size={25}/>
                    <Text style={styles.menuItemText}>Help</Text>
                </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => {}}>
                <View style={styles.menuItem}>
                    <Icon name="settings" color="#FF6347" size={25}/>
                    <Text style={styles.menuItemText}>Settings</Text>
                </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => {}}>
                <View style={styles.menuItem}>
                    <Icon name="checkmark" color="#FF6347" size={25}/>
                    <Text style={styles.menuItemText}>Terms and Service</Text>
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