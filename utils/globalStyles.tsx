import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
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
  todoItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  checkbox: {
    margin: 8,
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
  progressBarContainer: {
    width: '70%',
    borderRadius: 10,
    overflow: 'hidden',
    height: 20,
    borderWidth: 2,
    borderColor: 'gray',
  },
  progressBar: {
    height: '100%',
    borderRadius: 8,
  },
  progressText: {
    fontSize: 18,
    marginTop: 10,
  },
  todosInfo: {
    fontSize: 22,
    marginBottom: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontFamily: 'Inter-Black.otf',
    fontWeight: 'bold',
    marginBottom: 30,
    color: 'white',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
