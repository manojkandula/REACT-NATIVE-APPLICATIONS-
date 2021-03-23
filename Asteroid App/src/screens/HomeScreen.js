/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from '../styles/asteroidstyles';

const HomeScreen = (props) => {
  const submit = 'submit';

  const [id, setid] = useState('');
  return (

    <View style={styles.view1style}>
      <Text style={styles.titlestyle}>HomeScreen</Text>

      <TextInput
        style={styles.inputView}
        onChangeText={(id) => setid(id)}
        value={id}
        placeholder="enter asteroid id "
      />
      <TouchableOpacity
        style={id !== '' && styles.button1style}
        onPress={() => id !== '' && props.navigation.navigate('asteroidDet', { id })}
      >
        <Text style={styles.buttontext1}>{id !== '' && submit}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button2style}
        onPress={() => props.navigation.navigate('randomasteroidDet')}
      >
        <Text style={styles.buttontext2}>Random asteroid</Text>
      </TouchableOpacity>

    </View>

  );
};

export default HomeScreen;
