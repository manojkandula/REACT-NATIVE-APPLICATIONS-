/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import {
  Text, StyleSheet, View, TextInput, TouchableOpacity,
} from 'react-native';

const HomeScreen = (props) => {
  const [credentilas] = useState(

    [
      {
        username: 'manoj',
        password: '123456',

      },
      {
        username: 'kiran',
        password: '1234567',

      },

      {
        username: 'anup',
        password: '12345678',

      },

    ],
  );

  const [username, setuserName] = useState('');
  const [password, setpassword] = useState('');

  const validate = () => {
    const value = credentilas.find(
      ((key) => (key.username === username) && (key.password === password)),
    );

    if (value) {
      props.navigation.navigate('res');
    } else {
      alert('problem with your email or password');
      props.navigation.navigate('Home');
    }
  };

  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <TextInput
        style={styles.inputView1}
        onChangeText={(username) => setuserName(username)}
        value={username}
        placeholder="Enter  name "
        placeholderTextColor="red"
        defaultValue="anup"
      />
      <TextInput
        secureTextEntry
        textContentType="password"
        style={styles.inputView2}
        onChangeText={(password) => setpassword(password)}
        value={password}
        placeholder="Enter password "
        placeholderTextColor="red"
        defaultValue="12345678"
      />

      <TouchableOpacity
        style={styles.button3}
        onPress={validate}
      >

        <Text style={{ fontWeight: 'bold', alignSelf: 'center' }}>submit</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    top: 70,
    left: 110,
  },
  inputView1: {
    backgroundColor: 'lightgray',
    top: 100,
    left: 50,
    width: '80%',
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
  },
  inputView2: {
    backgroundColor: 'lightgray',
    top: 120,
    left: 50,

    width: '80%',
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
  },
  button3: {
    position: 'relative',
    backgroundColor: 'yellow',
    paddingTop: 10,
    paddingBottom: 10,
    alignContent: 'flex-start',
    top: 150,
    width: '20%',
    left: 170,

  },
});

export default HomeScreen;
