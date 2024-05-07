import { View, TextInput, Button, Text, } from 'react-native';
import React, { useState } from 'react';

const generateID = (max) => {
    return Math.floor(((Math.random() * max) + 100000));
}

const UserIdConstructor = (props) => {

    const [fullName, setFullName] = useState(``);
    const [address, setAddress] = useState(``);
    const [userStatus, setUserStatus] = useState(``);

    const createUser = () => {
        if (fullName.length == 0) {
            setUserStatus(`Please enter a name`);
        }
        else if (address.length == 0) {
            setUserStatus(`Please enter an address`);
        }
        else {
            let finalString = `ID: ${generateID(10)}:` +
                `${fullName}:${address}`

                setUserStatus(finalString);
        }
    }

    return (
        <View> 
            <TextInput placeholder={"Full Name"} value={fullName}
            onChangeText={setFullName} />
            <TextInput placeholder={"Street Address"} value={address}
            onChangeText={setAddress} />
            <Button title="Create User" onPress={createUser} />
            <Text></Text>
        </View >
      );
}

export default UserIdConstructor;