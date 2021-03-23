/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import {
  Text, View, TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import styles from '../styles/Countrystyles';

const WeatherScreen = ({ navigation }) => {
  const [localtime, setlocaltime] = useState('');
  const [windSpeed, setWindSpeed] = useState('');
  const [humidity, setHumidity] = useState('');
  const [temperature, setTemperature] = useState('');
  const CapitalName = navigation.getParam('capital', 'no-capital');
  const capitalWeather = async () => {
    const response = await axios.get(
      `http://api.weatherstack.com/current?access_key=7df9a6a904e2aba3c2a3f800f87f40e8&query=${CapitalName}`,
    );
    const result = response.data;
    setlocaltime(result.location.localtime);
    setWindSpeed(result.current.wind_speed);
    setHumidity(result.current.humidity);
    setTemperature(result.current.temperature);
  };
  return (
    <View style={styles.weather} onLayout={capitalWeather}>

      <Text style={styles.countrydatatext1}>
        {' '}
        ~
        {CapitalName}
        {' '}
        ~
        {' '}
      </Text>
      <Text style={styles.countrydatatext}>
        Localtime:
        {localtime}
      </Text>
      <Text style={styles.countrydatatext}>
        Wind speed:
        {windSpeed}
      </Text>
      <Text style={styles.countrydatatext}>
        Humidity:
        {humidity}
      </Text>
      <Text style={styles.countrydatatext}>
        {' '}
        Temperature:
        {temperature}
      </Text>
      <TouchableOpacity
        style={styles.button2}
        onPress={() => navigation.navigate('Home')}
      >
        <Text>Go to home </Text>
      </TouchableOpacity>
    </View>
  );
};

export default WeatherScreen;
