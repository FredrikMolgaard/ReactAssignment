import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface HomeScreenProps {
  todoList: { text: string; checked: boolean }[];
}

export default function HomeScreen({ todoList }: HomeScreenProps) {
  const [completedCount, setCompletedCount] = useState(0);
  const [uncompletedCount, setUncompletedCount] = useState(0);

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
    <View>
      <Text>Home</Text>
      <Text>Total Todos: {completedCount + uncompletedCount}</Text>
      <Text>Completed Todos: {completedCount}</Text>
      <Text>Uncompleted Todos: {uncompletedCount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
