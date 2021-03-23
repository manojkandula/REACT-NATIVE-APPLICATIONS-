/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import {
  Text, StyleSheet, View, FlatList, TouchableOpacity,
} from 'react-native';
import axios from 'axios';

const HomeScreen = (props) => {
  const [data, setData] = useState([]);

  const details = async () => {
    const report = await axios.get('https://randomuser.me/api/?results=150');

    const result = report.data;
    const res = result.results;
    setData(res);
  };

  const renderRow = ({ item }) => (
    <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('user', { item })}>
      <Text style={styles.text2}>{item.name.first}</Text>
    </TouchableOpacity>

  );

  return (
    <View>
      <Text style={styles.text} onLayout={details}>User Names </Text>
      <FlatList
        data={data}
        renderItem={renderRow}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    left: 100,
    fontWeight: 'bold',
  },
  text2: {
    fontSize: 20,
  },
  button: {
    width: 410,
    marginTop: 20,
    backgroundColor: 'lightyellow',
    padding: 10,
    borderRadius: 5,
    left: 6,

  },

});

export default HomeScreen;
