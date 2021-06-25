import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { AppStyles } from './Styles';
import buttons from './Buttons';

export default function App() {
  const [currentNumber, setCurrentNumber] = useState('');
  const [lastNumber, setLastNumber] = useState('');

 function calculate() {
    const result = eval(currentNumber).toString();
    setCurrentNumber(result);
  }

  function onPressButton(button) {
    switch (button) {
      case 'DEL':
        setCurrentNumber(currentNumber.substring(0, currentNumber.length - 1));
        return;
      case 'C':
        setCurrentNumber('');
        setLastNumber('');
        return;
      case '=':
        setLastNumber(currentNumber);
        calculate();
        return;
    }
    setCurrentNumber(currentNumber.concat(button));
  }

  return (
    <View>
      <View style={AppStyles.results}>
        <Text style={AppStyles.historyText}>{lastNumber}</Text>
        <Text style={AppStyles.resultText}>{currentNumber}</Text>
      </View>
      <View style={AppStyles.buttons}>
        {buttons.map((button) => {
          return (
            <TouchableOpacity
              key={button}
              onPress={() => {
                onPressButton(button);
              }}
              style={[
                AppStyles.button,
                {
                  minWidth:
                    button === 0 ||
                    button === 'C' ||
                    button === '.' ||
                    button === 'DEL'
                      ? '37.5%'
                      : '25%',
                  backgroundColor:
                    button === 'C' || button === 'DEL'
                      ? '#414853'
                      : button === '=' ||
                        button === '/' ||
                        button === '*' ||
                        button === '-' ||
                        button === '+'
                      ? '#00b9d6'
                      : '#303946',
                },
              ]}>
              <Text style={AppStyles.textButton}>{button}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
