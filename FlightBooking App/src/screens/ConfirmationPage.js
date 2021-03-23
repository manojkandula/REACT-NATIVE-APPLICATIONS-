/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  Text, View, TouchableOpacity,
} from 'react-native';
import styles from '../styles/flightstyles';

const ConfirmationPage = (props) => {
  const passengers = props.navigation.getParam('passengers', 'no-passengers');
  const cost = props.navigation.getParam('cost', 'no-cost');
  const costs = props.navigation.getParam('costs', 'no-costs');

  const totalcost = (cost + costs) * passengers;
  return (
    <View>
      <Text style={styles.text}>confirmation page</Text>
      <Text />
      <Text style={styles.text1}> Booking was succesful</Text>
      <Text />
      <Text style={styles.text1}>
        Total nuber of passengers:
        {passengers}
      </Text>
      <Text />
      <Text style={styles.text1}>
        Total booking cost:
        {totalcost}
      </Text>
      <TouchableOpacity
        style={styles.confirmationsbuttonStyle}
        onPress={() => props.navigation.navigate('Search')}
      >
        <Text>submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ConfirmationPage;
