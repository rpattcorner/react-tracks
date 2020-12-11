import React, { useContext } from 'react';
import { Text, StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
    // let points = [];
    // for (let i = 0; i < 20; i++) {
    //     if (i % 2 === 0) {  // even
    //         points.push({
    //             latitude: 37.33233 + i * 0.001,
    //             longitude: -122.03121 + i * 0.001
    //         });
    //     } else {
    //         points.push({
    //             latitude: 37.33233 - i * 0.002,
    //             longitude: -122.03121 + i * 0.001
    //         })
    //     }

    // }
    const { state: { currentLocation } } = useContext(LocationContext);

    if (!currentLocation) {
        return <ActivityIndicator size="large" style={{ marginTop: 200 }} />
    }
    //console.log(state)
    return (
        <MapView
            style={styles.map}
            // initialRegion={{
            //     latitude: 37.33233,
            //     longitude: -122.03121,
            //     latitudeDelta: 0.01,
            //     longitudeDelta: 0.01
            // }}
            initialRegion = {{ 
                ...currentLocation.coords, 
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
            region= {{ 
                ...currentLocation.coords, 
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
        >
            {/* <Polyline coordinates={points}/> */}
            <Circle
                center={currentLocation.coords}
                radius={25}
                strokeColor={"rgba(158, 158, 255, 1.0)"}
                fillColor={"rgba(158, 158, 255, 0.3)"}

            />
        </MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        height: 300
    }
})

export default Map;