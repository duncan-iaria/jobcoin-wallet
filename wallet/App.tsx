import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Screens} from './navigation';
import {SignInScreen, PortfolioScreen} from './screens';

const AppStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen
          name={Screens.SignIn}
          component={SignInScreen}
          options={{title: 'JobCoin Sign In'}}></AppStack.Screen>
        <AppStack.Screen
          name={Screens.Portfolio}
          component={PortfolioScreen}
          options={{title: 'JC Portfolio'}}></AppStack.Screen>
      </AppStack.Navigator>
      {/* <ScrollView contentInsetAdjustmentBehavior="automatic"></ScrollView> */}
    </NavigationContainer>
  );
};

export default App;
