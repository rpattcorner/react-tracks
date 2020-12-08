import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';

import Map from '../components/Map';

const TrackCreateScreen = () => {
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Map />
        </SafeAreaView>
    );
};

const styles=StyleSheet.create({});

export default TrackCreateScreen;