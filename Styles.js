import { StyleSheet } from 'react-native';

export const AppStyles = StyleSheet.create({
  results: {
    backgroundColor: '#282f3b',
    maxWidth: '100%',
    minHeight: '35%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  resultText: {
    maxHeight: 45,
    color: '#00b9d6',
    margin: 15,
    fontSize: 35,
  },
  historyText: {
    color: '#B5B7BB',
    fontSize: 20,
    marginRight: 10,
    alignSelf: 'flex-end',
  },
  buttons: {
    width: '100%',
    height: '35%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    borderColor: '#3f4d5b',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '25%',
    minHeight: '54%',
    flex: 2,
  },
  textButton: {
    color: '#fff',
    fontSize: 28,
  },
});
