import createDataContext from './createDataContext';
import React, { useContext } from 'react';
import trackerApi from '../api/tracker';
import tracker from '../api/tracker';

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
        case 'add_error':
            return { ...state, errorMessage: action.payload };
    }
};

const signup = (dispatch) => {
    console.log('In signup before call to the API');
    return async ({ email, password }) => {
        try{
            console.log('about to post to the API');
            const response = await trackerApi.post('/signup',{ email, password } );
            console.log(response.data);
        } catch (err) {
            // console.log(err.response.data); 
            dispatch({ type: 'add_error', payload: 'Something went wrong with signup' })
        }
    };
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
    { isSignedIn: false, errorMessage: '' }
);