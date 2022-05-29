import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {QueryClient, QueryClientProvider} from 'react-query';

import {Screens} from './navigation';
import {SignInScreen, AccountScreen} from './screens';

const queryClient = new QueryClient();
const AppStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <AppStack.Navigator>
          <AppStack.Screen
            name={Screens.SignIn}
            component={SignInScreen}
            options={{title: 'JobCoin Sign In'}}></AppStack.Screen>
          <AppStack.Screen
            name={Screens.Account}
            component={AccountScreen}
            options={{title: 'Account'}}></AppStack.Screen>
        </AppStack.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default App;
