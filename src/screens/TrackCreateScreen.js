import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';
import Map from '../components/Map';

import '../_mockLocation';

const TrackCreateScreen = () => {
    const [err, setErr] = useState(null);

    const startWatching = async () => {
        try {
            const { granted } = await requestPermissionsAsync();
            if (!granted) {
                throw new Error("Location permissions refused");
            }
            console.log('about to watch')
            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            }, (location) => {
                console.log(location);
            })
            console.log('after watch')
        } catch (e) {
            setErr(e);
            console.log(err)
        }
    };

    useEffect(() => {
        console.log('before start watch')
        startWatching();
        console.log('after start watch')
    }, []);

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h3>Create a Track</Text>
            <Map />
            {err ? <Text>Trouble</Text> : null}
        </SafeAreaView>
    );
};

const styles=StyleSheet.create({});

export default TrackCreateScreen;