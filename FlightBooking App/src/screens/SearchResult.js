/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import {
  Text, View, TouchableOpacity,
} from 'react-native';
import styles from '../styles/flightstyles';
import flightsdata from '../../Flights.json';

const SearchResult = (props) => {
  const source = props.navigation.getParam('source', 'no-source');
  const destination = props.navigation.getParam('destination', 'no-destination');
  const passengers = props.navigation.getParam('passengers', 'no-passengers');
  const fromdate = props.navigation.getParam('fromdate', 'no-fromdate');
  const todate = props.navigation.getParam('todate', 'no-todate');

  const [airline, setairline] = useState('');
  const [cost, setcost] = useState('');
  const [airlines, setairlines] = useState('');
  const [costs, setcosts] = useState('');

  const SearchByData = () => {
    try {
      const sourceflights = flightsdata.filter(((flight) => (flight.source === source)
                                      && (flight.destination === destination)
                                      && (flight.seats >= passengers)
                                      && (flight.date === fromdate)));

      setairline(sourceflights[0].airline);
      setcost(sourceflights[0].cost);

      const destFlights = flightsdata.filter(((flight) => (flight.source === destination)
                                  && (flight.destination === source)
                                  && (flight.seats >= passengers)
                                  && (flight.date === todate)));

      setairlines(destFlights[0].airline);
      setcosts(destFlights[0].cost);
    } catch (error) {
      props.navigation.navigate('Search');
      alert('wrong input');
    }
  };

  return (

    <View>
      <View>

        <View>
          <Text style={styles.text} onLayout={SearchByData}>Flights data</Text>
          <Text />
          <Text />

          <Text style={styles.text2}>
            {source}
            {' '}
            to
            {' '}
            {destination}
            {' '}
          </Text>
          <Text style={styles.text3}>
            airline:
            {airline}
          </Text>
          <Text style={styles.text3}>
            {' '}
            cost:
            {cost}
          </Text>
          <Text />

          <Text style={styles.text2}>
            {destination}
            {' '}
            to
            {' '}
            {source}
            {' '}
          </Text>

          <Text style={styles.text3}>
            airline:
            {airlines}
          </Text>
          <Text style={styles.text3}>
            {' '}
            cost:
            {costs}
          </Text>
        </View>

        <View>
          <TouchableOpacity
            style={styles.searchresultbuttonStyle}
            onPress={() => props.navigation.navigate('Booking', { cost, costs, passengers })}
          >
            <Text>continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default SearchResult;
