import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from "./components/Main"
import List from "./components/List"
import AddAlarm from './components/AddAlarm';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="List" component={List}
          options={{
            title: 'Your alarms',
            headerStyle: {
              backgroundColor: '#EA1E63',
            },
            headerTintColor: '#000000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
         <Stack.Screen
          name="AddAlarm" component={AddAlarm}
          options={{
            title: 'Add an alarm',
            headerStyle: {
              backgroundColor: '#EA1E63',
            },
            headerTintColor: '#000000',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
