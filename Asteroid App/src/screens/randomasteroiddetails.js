/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import {
  Text, View, TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import styles from '../styles/asteroidstyles';

const randomasteroiddetails = (props) => {
  const [name, setname] = useState('');
  const [nasa_jpl_url, setnasa_jpl_url] = useState('');
  const [designation, setdesignation] = useState('');
  const list = [
    2000433, 2000419, 2000887, 2001036,
    2001221, 2001566, 2001580, 2001620, 2001627, 2001943, 2001980];
  const idd = list[Math.floor(Math.random() * list.length)];
  const details = async () => {
    const report = await axios.get(

      ` https://api.nasa.gov/neo/rest/v1/neo/${idd}?api_key=w1t7DrdsgCRbcx5bpezzJkdt1InuaWvKeau77S4v`,
    );

    const result = report.data;
    setname(result.name);
    setnasa_jpl_url(result.nasa_jpl_url);
    setdesignation(result.designation);
  };

  return (
    <View style={styles.view1style}>
      <Text style={styles.subtitlestyle} onLayout={details}>random asteroid details </Text>
      <Text style={styles.subtitle2style}>
        asteroid name -
        {name}
      </Text>
      <Text style={styles.subtitle2style}>
        nasa_jpl_url -
        {nasa_jpl_url}
      </Text>
      <Text style={styles.subtitle2style}>
        designation -
        {designation}
      </Text>
      <TouchableOpacity
        style={styles.button4style}
        onPress={() => props.navigation.navigate('Home')}
      >
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default randomasteroiddetails;
