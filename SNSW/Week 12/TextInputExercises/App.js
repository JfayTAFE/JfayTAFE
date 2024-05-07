import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import ColourChanger from './taskThree';
import UserIdConstructor from './taskFour';

function FullNamePrinter() {

  const [firstName, setFirstName] = useState(``);
  const [lastName, setLastName] = useState(``);
  const [fullName, setFullName] = useState(``)

  function updateFullName(e) {
    let fullName = firstName + ` ` + lastName;
    setFullName(fullName);
  }

  const buttonPress = () => {
    alert(`Full Name: ${firstName} ${lastName}`);
  };

  return (
    <View style={styles.container}>
      <Text>{fullName}</Text>
      <TextInput
        placeholder="First name"
        style={styles.input}
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
      placeholder="Last name"
      style={styles.input}
      value={lastName}
      onChangeText={setLastName}
      />
      <Button title="Display Full Name" onPress={updateFullName} />
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      {/*<FullNamePrinter /> */}
      {/*<ColourChanger /> */}
      <UserIdConstructor />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    flex: 1,
    alignSelf: 'stretch',
    flexGrow: 0,
  },
});