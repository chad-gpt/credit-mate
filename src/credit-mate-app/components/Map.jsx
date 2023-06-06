import React, { useState, useRef, useCallback, useMemo, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Colors from '../constants/Colors'
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import MapOffer from '../components/MapOffer';
import BottomSheet from '@gorhom/bottom-sheet';
import { StackActions, withNavigation } from '@react-navigation/native';
import MapView, { Circle, Marker } from 'react-native-maps';
import * as Location from 'expo-location';
const BackgroundMap = () => {
    const [pin, setPin] = useState({
        latitude: 13.406,
        longitude: 123.3753,
      });
    
      useEffect(() => {
        (async () => {
          
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setPin({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          });
    
        })();
      }, []);
      
    return (
      <View style={styles.mapContainer}>
    
       
      <MapView style={styles.map} initialRegion={{
    latitude: pin.latitude,
    longitude: pin.longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}
    showsUserLocation={true}
    onUserLocationChange={(e) => {
      setPin({
        latitude: e.nativeEvent.coordinate.latitude,
        longitude: e.nativeEvent.coordinate.longitude,
      });
    }

    }
  >
    <Marker
      coordinate={pin}
      title='My Position'
      description='My Position'
      draggable={true}
      onDragStart={(e) => {
        // console.log('dragStart', e.nativeEvent.coordinate);
        setPin({
          latitude: e.nativeEvent.coordinate.latitude,
          longitude: e.nativeEvent.coordinate.longitude,
        });
      }}
      onDragEnd={(e) => {
        // console.log('dragEnd', e.nativeEvent.coordinate);
        setPin({
          latitude: e.nativeEvent.coordinate.latitude,
          longitude: e.nativeEvent.coordinate.longitude,
        });
      }}
      ></Marker>
      <Circle center={pin} radius={100}></Circle>
    </MapView>
    
      </View>
    );
  }

    export default BackgroundMap;

    
const styles = StyleSheet.create({
    map: {
      width: '100%',
      height: '100%',
    },
    container: {
      flex: 1,
      height: "100%",
      backgroundColor: Colors.primary,
    },
    button: {
      width: 70,
      height: 70,
      justifyContent: 'center',
      alignItems: 'center',
    },
    infoContainer: {
      flex: 1,
      justifyContent: 'center',
      margin: 40,
    },
    tab: {
      backgroundColor: Colors.gray,
      height: 5,
      width: 200,
      marginTop: 20,
      alignSelf: "center",
  
    },
    offerContainer: {
      backgroundColor: "white",
      borderRadius: 20,
      paddingHorizontal: 18,
      elevation: 2,
    },
  
  });