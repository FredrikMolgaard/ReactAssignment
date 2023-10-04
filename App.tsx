import { SimpleLineIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
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

  const [fontsLoaded] = useFonts({
    Spooky: require('./assets/fonts/Spooky.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tabs.Navigator
          initialRouteName='Home'
          screenOptions={{
            tabBarStyle: { backgroundColor: 'slategray' },
            tabBarLabelStyle: {
              fontWeight: 'bold',
              color: 'white',
              fontSize: 12,
            },
          }}
        >
          <Tabs.Screen
            name='Home'
            options={{
              title: 'Home',
              tabBarIcon: () => (
                <SimpleLineIcons name='home' size={30} color='white' />
              ),
            }}
          >
            {() => <HomeScreen todoList={todoList} />}
          </Tabs.Screen>
          <Tabs.Screen
            name='Todo'
            options={{
              title: 'Daily Ghoul',
              tabBarIcon: () => (
                <SimpleLineIcons name='ghost' size={30} color='white' />
              ),
            }}
          >
            {() => <TodoScreen todoList={todoList} setTodoList={setTodoList} />}
          </Tabs.Screen>
        </Tabs.Navigator>
      </NavigationContainer>
      <StatusBar backgroundColor='black' />
    </SafeAreaProvider>
  );
}

export default App;
