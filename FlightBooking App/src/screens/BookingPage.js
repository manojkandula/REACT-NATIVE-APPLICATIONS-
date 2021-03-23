/* eslint-disable no-plusplus */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  Text, View, TouchableOpacity,
} from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/flightstyles';

const BookingPage = (props) => {
  const passengers = props.navigation.getParam('passengers', 'no-passengers');
  const cost = props.navigation.getParam('cost', 'no-cost');
  const costs = props.navigation.getParam('costs', 'no-costs');

  const loop = [];

  for (let i = 0; i < passengers; i++) {
    loop.push(
      <View key={i}>
        <View>

          <Input
            placeholder="enter your name "
            label="name"
            leftIcon={(
              <Icon
                name="user"
                size={20}
                color="black"
              />
  )}
          />
        </View>

      </View>,

    );
  }

  return (
    <View>
      <View>
        <Text style={styles.text}>passengers data </Text>

        <TouchableOpacity
          style={styles.bookingbuttonStyle}
          onPress={() => props.navigation.navigate('Confirm', { cost, costs, passengers })}
        >
          <Text>confirm</Text>
        </TouchableOpacity>
      </View>
      {loop}
    </View>
  );
};

export default BookingPage;
