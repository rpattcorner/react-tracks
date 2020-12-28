import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import { navigate } from '../navigationRef';
import theSessionApi from '../api/theSession';

const tuneReducer = (state, action) => {
  console.log('In switch, action is ')
  console.log(action)
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'importTune':
      return { errorMessage: '', tune: action.payload };
    case 'retrieve':
      return null;
    case 'update':
      return null;
    case 'delete': 
      return null;
    case 'clear_error_message':
      console.log('About to clear')
      return {...state, errorMessage: '' }
    default:
      return state;
  }
};

const clearErrorMessage = dispatch => () => {
  console.log('In clear error message');
  dispatch({ type: 'clear_error_message' })
}

// const signup = dispatch => async({ tuneSource, password, tuneId }) => {
//   console.log('in signup')
//   console.log(tuneSource)
//   console.log(password)
//   console.log(tuneId)
// }
const importTune = dispatch => async ( { tuneSource, tuneId } ) => {
  console.log('in importTune')
  console.log(tuneSource+ ' tuneSource')
  console.log(tuneId)
  try {
    string='/tunes/2?format=json'
    const response = await theSessionApi.get('/tunes/2' + '?' + 'format=json')
    // const response = await theSessionApi.get('/tunes/' + '2' + '?' + 'format=json' )

    console.log(response.data)
    console.log('about to store')
    // await AsyncStorage.setItem('tuneId', response.data);
    console.log('stored')
    dispatch({ type: 'importTune', payload: response.data });
    console.log('dispatched')
    navigate('TuneList');
  } catch (err) {
    console.log(err.message)
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with import tune '
    });
  }
};


export const { Provider, Context } = createDataContext(
  tuneReducer,
  { importTune } ,
);
