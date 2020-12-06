import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Text } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ({ navigation }) => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext);
    console.log(state);
    return (
    <View style={styles.container}>
        <NavigationEvents onWillFocus={clearErrorMessage} />
    
        <AuthForm 
            headerText="Sign up for Tracker"
            errorMessage={state.errorMessage}
            submitButtonText="Sign Up"
            // onSubmit={({ email, password }) => signup({ email, password })}
            onSubmit={signup}
        />
        <NavLink 
            text="Already have an account?  Sign in instead"
            routeName="Signin" />
    </View>
    );
};

SignupScreen.navigationOptions = { 
    headerShown: false
};

const styles=StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        marginBottom: 0
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
    }
});

export default SignupScreen;