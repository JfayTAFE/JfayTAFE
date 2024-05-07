import { View, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';

function validateRange(vstr) {
    try {
        let v = parseInt(vstr);
        if(v >= 0 && v <= 255) {
            return true;
        }
    } catch(error) {
        alert(`String cannot be parsed`);
    }
    return false
}

function ColourChanger(props) {
    const [red, setRed] = useState('');
    const [green, setGreen] = useState('');
    const [blue, setBlue] = useState('');
    const [colour, setColour] = useState('rgb(128, 128, 128)');
  
    function setNewColour(e) {
      if (validateRange(red) && validateRange(green) && validateRange(blue)) {
  
        let newColourString = `rgb(${red}, ${green}, ${blue})`;
  
        setColour(newColourString);
      }
    }
  
    return (
      <View style={{ height: 100, backgroundColor: colour }}> 
        <TextInput placeholder="r" value={red}
          onChangeText={setRed} />
        <TextInput placeholder="g" value={green}
          onChangeText={setGreen} />
        <TextInput placeholder="b" value={blue}
          onChangeText={setBlue} />
        <Button title="Change Colour" onPress={setNewColour} />
      </View >
    );
  }

export default ColourChanger;