import { SimpleLineIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as React from 'react';
import { StatusBar, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import TodoScreen from './screens/TodoScreen';

const Tabs = createBottomTabNavigator();

function App() {
  const [todoList, setTodoList] = React.useState<
    { text: string; checked: boolean }[]
  >([]);

  const loadTodoList = async () => {
    try {
      const storedData = await AsyncStorage.getItem('my-key');
      if (storedData !== null) {
        const parsedData = JSON.parse(storedData);
        setTodoList(parsedData);
      }
    } catch (e) {
      console.error('Error loading todo list from AsyncStorage', e);
    }
  };

  React.useEffect(() => {
    loadTodoList();
  }, []);

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
            tabBarStyle: { backgroundColor: 'darkgray' },
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
              tabBarActiveBackgroundColor: 'gray',
              tabBarIcon: () => (
                <SimpleLineIcons name='home' size={30} color='white' />
              ),
              tabBarLabel: 'Home',
            }}
          >
            {() => <HomeScreen todoList={todoList} />}
          </Tabs.Screen>
          <Tabs.Screen
            name='Todo'
            options={{
              title: 'Daily Ghoul',
              tabBarActiveBackgroundColor: 'gray',
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
