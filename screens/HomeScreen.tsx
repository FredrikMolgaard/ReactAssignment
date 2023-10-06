import { useKeepAwake } from 'expo-keep-awake';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import ProgressBar from '../components/progressBar';
import { globalStyles } from '../utils/globalStyles';

interface HomeScreenProps {
  todoList: { text: string; checked: boolean }[];
}

export default function HomeScreen({ todoList }: HomeScreenProps) {
  useKeepAwake();

  function getFormattedDate() {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return today.toLocaleDateString(undefined, options);
  }

  // Härled tillstånd om det är möjligt
  const completedCount = todoList.filter((todo) => todo.checked).length;

  return (
    <ImageBackground
      source={require('../assets/spooky.jpg')}
      style={globalStyles.backgroundImage}
    >
      <View style={styles.root}>
        <Text style={styles.date}>{getFormattedDate()}</Text>
      </View>
      <View style={globalStyles.container}>
        <Text
          style={{
            fontFamily: 'Spooky',
            fontSize: 30,
            color: 'white',
            marginTop: 270,
          }}
        >
          Your Daily Ghoul
        </Text>
        <Text
          style={{
            fontFamily: 'Spooky',
            color: 'white',
            fontSize: 20,
          }}
        >
          {completedCount}/{todoList.length} Daily Ghouls Completed
        </Text>
        <ProgressBar
          total={todoList.length}
          completed={completedCount}
          color='gray'
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
    padding: 10,
    paddingTop: 100,
    alignContent: 'center',
  },
  date: {
    backgroundColor: 'black',
    color: 'white',
    fontFamily: 'Spooky',
    borderRadius: 10,
    marginLeft: 50,
    fontSize: 20,
  },
});
