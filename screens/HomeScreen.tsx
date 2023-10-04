import React, { useEffect, useState } from 'react';
import { ImageBackground, Text, View } from 'react-native';
import ProgressBar from '../components/progressBar';
import { useCustomKeepAwake } from '../hooks/useKeepAwake';
import { globalStyles } from '../utils/globalStyles';

interface HomeScreenProps {
  todoList: { text: string; checked: boolean }[];
}

export default function HomeScreen({ todoList }: HomeScreenProps) {
  const [completedCount, setCompletedCount] = useState(0);
  const [uncompletedCount, setUncompletedCount] = useState(0);
  useCustomKeepAwake();

  useEffect(() => {
    let completed = 0;
    let uncompleted = 0;

    for (const todo of todoList) {
      if (todo.checked) {
        completed++;
      } else {
        uncompleted++;
      }
    }

    setCompletedCount(completed);
    setUncompletedCount(uncompleted);
  }, [todoList]);

  return (
    <ImageBackground
      source={require('../assets/spooky.jpg')}
      style={globalStyles.backgroundImage}
    >
      <View style={globalStyles.container}>
        <Text style={{ fontFamily: 'Spooky', fontSize: 30, color: 'white' }}>
          Your Daily Ghoul
        </Text>
        <ProgressBar
          total={completedCount + uncompletedCount}
          completed={completedCount}
          color='orange'
        />
      </View>
    </ImageBackground>
  );
}
