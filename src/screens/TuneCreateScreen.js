import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const TuneCreateScreen = ({ navigation }) => {
    return <>
        <Text style={{ fontSize: 48 }}>Tune Create Screen</Text>
        {/* <Button 
            title="Go to Tune Detail"
            onPress={() => { navigation.navigate('TrackDetail')}} 
        /> */}
    </>
};

const styles=StyleSheet.create({});

export default TuneCreateScreen;