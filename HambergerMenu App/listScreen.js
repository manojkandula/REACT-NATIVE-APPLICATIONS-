/* eslint-disable no-use-before-define */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const listScreen = (props) => (
  <View>

    <TouchableOpacity onPress={() => props.navigation.navigate('res')}>
      <FontAwesome5 name="bars" size={45} color="#2196F3" />

    </TouchableOpacity>
    <Text style={styles.text}>List screen </Text>

  </View>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    top: 300,
    left: 100,

  },
});

export default listScreen;
