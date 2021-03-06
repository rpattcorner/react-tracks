import { ActionSheetIOS } from 'react-native';
import { State } from 'react-native-gesture-handler';
import CreateDataContext from './createDataContext';

const locationReducer = (state, action) => {
    switch (action.type) {
        case 'add_current_location':
            return  {...state, currentLocation: action.payload }
        default:
            return State;
    }
};

const startRecording = dispatch =>() => {};
const stopRecording = dispatch =>() => {};
const addLocation = dispatch =>(location) => {
    console.log("HI THERE");
    dispatch({ type: 'add_current_location', payload: location });
};

export const { Context, Provider } = CreateDataContext(
    locationReducer,
    { startRecording, stopRecording, addLocation },
    { recording: false, locations: [], currentLocation: null }
)