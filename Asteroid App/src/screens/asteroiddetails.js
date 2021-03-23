/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import axios from 'axios';
import styles from '../styles/asteroidstyles';

const asteroiddetails = (props) => {
  const id = props.navigation.getParam('id', 'no-id');
  const [name, setname] = useState('');
  const [nasa_jpl_url, setnasa_jpl_url] = useState('');
  const [designation, setdesignation] = useState('');

  const details = async () => {
    const report = await axios.get(
      ` https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=w1t7DrdsgCRbcx5bpezzJkdt1InuaWvKeau77S4v`,
    );

    const result = report.data;
    setname(result.name);
    setnasa_jpl_url(result.nasa_jpl_url);
    setdesignation(result.designation);
  };
  return (

    <View style={styles.view1style}>
      <Text style={styles.titlestyle2} onLayout={details}>asteroid details </Text>
      <Text />
      <Text style={styles.subtitle2style}>
        asteroid name -
        {name}
      </Text>
      <Text style={styles.subtitle2style}>
        nasa_jpl_url -
        {nasa_jpl_url}
      </Text>
      <Text style={styles.subtitle2style}>
        designation - +
        {designation}
      </Text>
      <TouchableOpacity
        style={styles.button3style}
        onPress={() => props.navigation.navigate('Home')}
      >
        <Text>Home</Text>
      </TouchableOpacity>

    </View>
  );
};

export default asteroiddetails;
