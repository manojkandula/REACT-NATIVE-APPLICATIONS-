/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { StyleSheet, View } from 'react-native';

const userdata = (props) => {
  const item = props.navigation.getParam('item', 'no-item');

  return (
    <View>

      <text1 style={styles.text1}>User Data</text1>

      <View style={styles.button1}>

        <View style={styles.button2}>
          <text1 style={styles.text2}>
            name:
            {item.name.first}
          </text1>
        </View>
        <View style={styles.button2}>
          <text1 style={styles.text2}>
            gender:
            {item.gender}
          </text1>
        </View>
        <View style={styles.button2}>
          <text1 style={styles.text2}>Location:</text1>
          <text1 style={styles.text2}>
            street:
            {item.location.street.name}
          </text1>
          <text1 style={styles.text2}>
            number:
            {item.location.street.number}
          </text1>
          <text1 style={styles.text2}>
            city:
            {item.location.city}
          </text1>
          <text1 style={styles.text2}>
            state:
            {item.location.state}
          </text1>
          <text1 style={styles.text2}>
            country:
            {item.location.country}
          </text1>
          <text1 style={styles.text2}>
            postcode:
            {item.location.postcode}
          </text1>
        </View>
        <View style={styles.button2}>
          <text1 style={styles.text2}>
            date of birth:
            {item.dob.date}
          </text1>
          <text1 style={styles.text2}>
            age:
            {item.dob.age}
          </text1>
        </View>
        <View style={styles.button2}>

          <text1 style={styles.text2}>
            phone:
            {item.phone}
          </text1>
          <text1 style={styles.text2}>
            cell:
            {item.cell}
          </text1>
        </View>

      </View>
    </View>

  );
};

const styles = StyleSheet.create({

  text2: {
    fontSize: 20,
  },
  text3: {
    fontSize: 30,
  },
  text1: {
    fontSize: 30,
    left: 100,
    fontWeight: 'bold',
  },
  button1: {
    width: 510,
    marginTop: 20,
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,

  },
  button2: {
    width: 410,
    marginTop: 20,
    backgroundColor: 'lightyellow',
    padding: 10,
    borderRadius: 5,

  },

});

export default userdata;
