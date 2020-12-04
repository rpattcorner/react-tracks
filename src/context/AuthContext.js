import createDataContext from './createDataContext';
import React, { useContext } from 'react';
import trackerApi from '../api/tracker';
// import tracker from '../api/tracker';
import { AsyncStorage } from 'react-native';
import { navigate } from '../navigationRef'

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'signup':
            return (
                {  
                    token: action.payload,
                    errorMessage: ''
                });
    }
};

const signup = (dispatch) => async ({ email, password }) => {
        try {
            const response = await trackerApi.post('/signup',{ email, password } );
            console.log(response.data);
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ 
                type: 'signup', 
                payload: response.data.token 
            });
            // navigate('TrackList');
        } catch (err) {
            console.log(err.response.data); 
            dispatch({ type: 'add_error', payload: 'Something went wrong with signup' })
        }
    };


const signin = (dispatch) => {
    return ({ email, password }) => {
        // make api request to signin with these
        // on success, modify the state
        // on fail error
    }
}

const signout = (dispatch) => {
    return () => {
        // make api request to signout 
        // on success, modify the state
        // on fail error
    }
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup },
    { token: null, errorMessage: '' }
);