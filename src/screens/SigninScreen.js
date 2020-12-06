import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { State } from 'react-native-gesture-handler';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';

const SigninScreen = () => {
    const { state, signin, clearErrorMessage } = useContext(Context);
    // <NavigationEvents 
    //     // onWillBlur={() => { clearErrorMessage() }} ===
    //     onWillFocus={clearErrorMessage}
    // />

    return (
        <View style={styles.container}>
            <NavigationEvents 
                // onWillFocus={() => { clearErrorMessage() }} ===
                onWillFocus={clearErrorMessage}
            />
            {/* <NavigationEvents onWillFocus={clearErrorMessage} /> */}
            <AuthForm 
                headerText="Sign into your Account"
                errorMessage={state.errorMessage}
                submitButtonText="Sign In"
                onSubmit={signin}
            />
            <NavLink 
                text="Don't have an account?  Sign up instead"
                routeName="Signup" />
        </View>
        );
};

SigninScreen.navigationOptions = { 
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

export default SigninScreen;