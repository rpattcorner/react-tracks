import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
// import TrackDetailScreen from './src/screens/TrackDetailScreen';
// import TrackListScreen from './src/screens/TrackListScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { setNavigator } from './src/navigationRef';

import TuneListScreen from './src/screens/TuneListScreen';
import TuneCreateScreen from './src/screens/TuneCreateScreen';

const switchNavigator = createSwitchNavigator({

  mainFlow: createBottomTabNavigator({
    TuneList: TuneListScreen,
    TuneCreateScreen: TuneCreateScreen,
    Account: AccountScreen
  }),
  loginFlow: createStackNavigator ({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
});

// export default createAppContainer(switchNavigator)
// wrap the app in a component instead
const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <LocationProvider>
    <AuthProvider>
      <App ref={(navigator) => setNavigator(navigator) }/>
    </AuthProvider>
    </LocationProvider>
  );
};