/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import {
  Text, View, TextInput, TouchableOpacity,
} from 'react-native';
import styles from '../styles/Countrystyles';

const HomeScreen = (navigation) => {
  const [country, setCountry] = useState('');

  return (
    <View style={styles.container}>

      <Text style={styles.text}> weather Forecast </Text>
      <TextInput
        style={styles.inputView}
        onChangeText={(country) => setCountry(country)}
        value={country}
        placeholder="Enter country name "
        placeholderTextColor="red"
      />
      <TouchableOpacity
        style={styles.button1}
        onPress={() => navigation.navigate('Countryinfo', { country })}
      >
        <Text style={styles.text1}>SUBMIT</Text>
      </TouchableOpacity>

    </View>
  );
};

export default HomeScreen;
