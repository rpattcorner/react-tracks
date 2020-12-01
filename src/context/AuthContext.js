import createDataContext from './createDataContext';
import React, { useContext } from 'react';

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

// Actions will go here 

export const { Provider, Context } = createDataContext(
    authReducer,
    {},
    { isSignedIn: false }
);