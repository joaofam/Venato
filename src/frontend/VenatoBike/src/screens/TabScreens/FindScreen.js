import React, {useEffect, useState, Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})

export default function FindScreen({ navigation }) {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const url = "https://oqlp9x6gu1.execute-api.eu-west-1.amazonaws.com/venato/coords";

  useEffect(() => {
    const interval = setInterval(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error)=>console.error(error))
      .finally(() => setLoading(false))
    }, 10000);
    return () => clearInterval(interval);
    }, []);

    return (
      <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 53.38224608399076,
          longitude: -6.25965580664217,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
      <Marker
        coordinate={{latitude: 6.25965580664217, longitude: -6.25965580664217,
        }}
      />
      </MapView>
    </View>
)};