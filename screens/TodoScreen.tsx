import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  Button,
  FlatList,
  Pressable,
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

  function TodoCheckbox({ checked, onChange }: TodoCheckboxProps) {
    return (
      <Pressable
        style={[
          globalStyles.checkboxBase,
          checked && globalStyles.checkboxChecked,
        ]}
        onPress={() => onChange(!checked)}
      >
        {checked && <Ionicons name='checkmark' size={24} color='white' />}
      </Pressable>
    );
  }

  return (
    <SafeAreaView>
      <View style={globalStyles.container}>
        <Text style={globalStyles.text}>Today's tasks</Text>
      </View>
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
          <View style={globalStyles.todoItemContainer}>
            <Text>{item.text}</Text>
            <TodoCheckbox
              checked={item.checked}
              onChange={(newValue: boolean) => {
                const updatedList = [...todoList];
                updatedList[index].checked = newValue;
                setTodoList(updatedList);
              }}
            />
            <Text style={globalStyles.checkboxLabel}></Text>
            <TouchableOpacity onPress={() => removeTodoItem(index)}>
              <Text style={globalStyles.removeButton}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}
