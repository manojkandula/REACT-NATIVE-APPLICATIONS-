/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import {
  Text, View, TextInput, TouchableOpacity, Image, ScrollView,
} from 'react-native';
import { Icon } from 'react-native-elements';
import styles from '../Style/styles';
import Contacts from '../../details.json';

export default function SearchScreen(props) {
  const [searchText, setSearchText] = useState('');
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const PhoneBook = () => {
    setUsers(Contacts);
  };

  return (
    <View style={{ flex: 1, paddingTop: 20 }} onLayout={PhoneBook}>
      <View style={styles.container}>
        <View style={styles.searchView}>
          <View style={styles.inputView}>
            <TextInput
              defaultValue={searchText}
              style={styles.input}
              placeholder="Search"
              textContentType="name"
              onChangeText={(text) => {
                setSearchText(text);
                setFilteredUsers([]);
                const filtered_users = users.filter(
                  (user) => user.firstName.toLowerCase().startsWith(text.toLowerCase()),
                );
                setFilteredUsers(filtered_users);
              }}
              returnKeyType="search"
            />
            <TouchableOpacity>
              <Icon name="search" size={24} color="#333" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setSearchText('');
                setFilteredUsers([]);
              }}
            >
              <Icon name="cancel" size={24} color="#333" />
            </TouchableOpacity>
            )
          </View>
        </View>

        <ScrollView>
          {filteredUsers.map((user) => (

            <TouchableOpacity
              style={styles.userCard}
              onPress={() => {
                props.navigation.navigate('Contact', user);
              }}
            >
              <Image
                style={styles.userImage}
                source={{ uri: user.picture }}
              />
              <View style={styles.userCardRight}>
                <Text
                  style={{ fontSize: 18, fontWeight: '500' }}
                >
                  {`${user.firstName} ${user.lastName}`}
                </Text>
                <Text>{`${user.title}`}</Text>
              </View>
            </TouchableOpacity>
          ))}

          <View style={{ height: 50 }} />
        </ScrollView>

        <View style={styles.messageBox}>
          <Text style={styles.messageBoxText}>No user found</Text>
        </View>

        <ScrollView style={styles.searchScroll}>
          {users.map((user) => (
            <TouchableOpacity
              style={styles.userCard}
              onPress={() => {
                props.navigation.navigate('Contact', user);
              }}
            >
              <Image
                style={styles.userImage}
                source={{ uri: user.picture }}
              />
              <View style={styles.userCardRight}>
                <Text
                  style={{ fontSize: 18, fontWeight: '500' }}
                >
                  {`${user.firstName} ${user.lastName}`}
                </Text>
                <Text>{`${user.title}`}</Text>
              </View>
            </TouchableOpacity>
          ))}
          <View style={{ height: 50 }} />
        </ScrollView>
        )
      </View>
    </View>
  );
}
