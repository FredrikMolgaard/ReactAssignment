import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import TodoScreen from './screens/TodoScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Today'>
        <Stack.Screen
          name='Today'
          component={TodoScreen}
          options={{ title: 'Daily Ghoul' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
