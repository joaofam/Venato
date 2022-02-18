import { StatusBar } from 'expo-status-bar';
// import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Navigation from './src/Navigation';
import Amplify from 'aws-amplify';
import config from './src/aws-exports';
import Tabs from './src/Navigation/tabs';
import { NavigationContainer } from '@react-navigation/native'

Amplify.configure(config);

// const App = () => {
//   // Auth.signOut();
//   return (
//     <SafeAreaView style={styles.root}>
//       <Navigation />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   root: {
//     flex: 1,
//     backgroundColor: '#F9FBFC'
//   },
// });

// export default App;


import * as React from 'react';
import MainContainer from './src/screens/MainContainer';

function App() {
  return(
    <MainContainer/>
  );
}

export default App;