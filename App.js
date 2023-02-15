// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppLanding from "./screens/AppLanding";
import CreateRealm from './screens/CreateRealm';
import ViewRealm from './screens/ViewRealm';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={AppLanding} />
        <Stack.Screen name="CreateRealm" component={CreateRealm} />
        <Stack.Screen name="ViewRealm" component={ViewRealm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;