import { SimpleLineIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import TodoScreen from './screens/TodoScreen';

const Tabs = createBottomTabNavigator();

function App() {
  const [todoList, setTodoList] = React.useState<
    { text: string; checked: boolean }[]
  >([]);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tabs.Navigator initialRouteName='Home'>
          <Tabs.Screen
            name='Home'
            options={{
              title: 'Home',
              tabBarIcon: (props) => (
                <SimpleLineIcons name='home' size={24} color='black' />
              ),
            }}
          >
            {() => <HomeScreen todoList={todoList} />}
          </Tabs.Screen>
          <Tabs.Screen
            name='Todo'
            options={{
              title: 'Daily Ghoul',
              tabBarIcon: (props) => (
                <SimpleLineIcons
                  size={props.size}
                  color={props.color}
                  name='ghost'
                />
              ),
            }}
          >
            {() => <TodoScreen todoList={todoList} setTodoList={setTodoList} />}
          </Tabs.Screen>
        </Tabs.Navigator>
      </NavigationContainer>
      <StatusBar />
    </SafeAreaProvider>
  );
}

export default App;
