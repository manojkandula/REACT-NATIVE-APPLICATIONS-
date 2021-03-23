/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import {
  Text, View, Image, TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import styles from '../styles/Countrystyles';

const CountryinfoScreen = (props) => {
  const [capital, setCapital] = useState('');
  const [population, setPopulation] = useState('');
  const [latlng, setlatlng] = useState('');
  const [region, setregion] = useState('');
  const [image, setimage] = useState('');
  const CountryName = props.navigation.getParam('country', 'no-country');

  const countrydetails = async () => {
    const response = await axios.get(

      `https://restcountries.eu/rest/v2/name/${CountryName}`,
    );

    const res = response.data;
    setCapital(res[0].capital);
    setPopulation(res[0].population);
    setlatlng(res[0].latlng[0]);
    setregion(res[0].region);
    setimage(res[0].flag);
  };

  return (
    <View style={styles.countryinfocontainer} onLayout={countrydetails}>
      <Text style={styles.countrydatatext1}>
        {' '}
        ~
        {CountryName}
        ~
        {' '}
      </Text>
      <Text style={styles.countrydatatext}>
        Population:
        {population}
      </Text>
      <Text style={styles.countrydatatext}>
        Capital:
        {capital}
      </Text>
      <Text style={styles.countrydatatext}>
        Latlng:
        {latlng}
      </Text>
      <Text style={styles.countrydatatext}>
        region:
        {region}
      </Text>
      <Image
        style={styles.countryinfo1}
        source={{
          uri: `${image}`,
        }}
      />
      <TouchableOpacity
        style={styles.countryinfoweather}
        onPress={() => props.navigation.navigate('Weather', { capital })}
      >
        <Text> capital weather</Text>
      </TouchableOpacity>

    </View>
  );
};

export default CountryinfoScreen;
