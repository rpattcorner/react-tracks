import createDataContext from './createDataContext';
import React, { useContext } from 'react';

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const signup = (dispatch) => {
    return ({ email, password }) => {
        // make api request to signup with these
        // on success, modify the state
        // on fail error
    }
}

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
    { isSignedIn: false }
);