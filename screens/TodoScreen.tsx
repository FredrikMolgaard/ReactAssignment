import { SimpleLineIcons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import React from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { globalStyles } from '../utils/globalStyles';

interface Todo {
  text: string;
  checked: boolean;
}

interface TodoScreenProps {
  todoList: Todo[];
  setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

interface TodoCheckboxProps {
  checked: boolean;
  onChange: (newValue: boolean) => void;
}

export default function TodoScreen({ todoList, setTodoList }: TodoScreenProps) {
  const [todoItem, setTodoItem] = React.useState<string>('');
  const [isFocused, setIsFocused] = React.useState<boolean>(false);

  const handleTodoItemChange = (text: any) => {
    setTodoItem(text);
  };

  const addTodoItem = () => {
    if (todoItem.trim() !== '') {
      setTodoList([...todoList, { text: todoItem, checked: false }]);
      setTodoItem('');
    }
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const removeTodoItem = (index: number) => {
    const updatedList = [...todoList];
    updatedList.splice(index, 1);
    setTodoList(updatedList);
  };

  return (
    <SafeAreaView>
      <TextInput
        style={globalStyles.input}
        placeholder={isFocused ? '' : 'Add todo here'}
        placeholderTextColor='gray'
        value={todoItem}
        onChangeText={handleTodoItemChange}
        onFocus={onFocus}
        onBlur={onBlur}
      ></TextInput>
      <Button title='Add' onPress={addTodoItem} />
      <FlatList
        data={todoList}
        renderItem={({ item, index }) => (
          <View style={globalStyles.todoItem}>
            <Checkbox
              style={globalStyles.checkbox}
              value={item.checked}
              onValueChange={(newValue: boolean) => {
                const updatedList = [...todoList];
                updatedList[index].checked = newValue;
                setTodoList(updatedList);
              }}
            />
            <Text style={globalStyles.todoText}>{item.text}</Text>
            <TouchableOpacity onPress={() => removeTodoItem(index)}>
              <SimpleLineIcons name='trash' size={24} color='red' />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}
