import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return <View style={styles.container}>
    <Spacer><Text h3> Sign Up for Tracker</Text></Spacer>
    <Input 
        label='EMail'
        value={email}
        onChangeText={(newEmail) => setEmail(newEmail)}
        autoCapitalize="none"
        autoCorrect={false}
     />
    <Spacer />
            <Input 
                label='Password'
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
            />
    <Spacer />
        <Button title="Sign Up" />
    <Spacer />

        {/* <Text style={{ fontSize: 48 }}SignupScreen></Text>
        <Button 
            title="Go to Signin"  
            onPress={() => navigation.navigate('Signin')} 
        />
        <Button 
            title="Go to Main Flow" 
            onPress={() => navigation.navigate('mainFlow')} 
        /> */}
    </View>
};

SignupScreen.navigationOptions = { 
    headerShown: false
};

const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 100
    }
});

export default SignupScreen;