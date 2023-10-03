import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  Button,
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

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
        style={[styles.checkboxBase, checked && styles.checkboxChecked]}
        onPress={() => onChange(!checked)}
      >
        {checked && <Ionicons name='checkmark' size={24} color='white' />}
      </Pressable>
    );
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>Today's tasks</Text>
      </View>
      <TextInput
        style={styles.input}
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
          <View style={styles.todoItemContainer}>
            <Text>{item.text}</Text>
            <TodoCheckbox
              checked={item.checked}
              onChange={(newValue: boolean) => {
                const updatedList = [...todoList];
                updatedList[index].checked = newValue;
                setTodoList(updatedList);
              }}
            />
            <Text style={styles.checkboxLabel}></Text>
            <TouchableOpacity onPress={() => removeTodoItem(index)}>
              <Text style={styles.removeButton}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 84,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
  },
  removeButton: {
    color: 'red',
    fontWeight: 'bold',
  },
  todoItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'coral',
    backgroundColor: 'transparent',
  },
  checkboxChecked: {
    backgroundColor: 'coral',
  },
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appTitle: {
    marginVertical: 16,
    fontWeight: 'bold',
    fontSize: 24,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    marginLeft: 8,
    fontWeight: 'bold',
    fontSize: 18,
  },
});
