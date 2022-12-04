import React from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/core';

export default function Searchbar({updateSearch}) {
  const navigation = useNavigation();
  const back = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.searchContainer}>
      <TouchableOpacity onPress={() => back()}>
        <Feather name="chevron-left" size={30} color="#ff6969" />
      </TouchableOpacity>

      <View style={styles.inputContainer}>
        <View style={styles.vwSearch}>
          <Feather name="search" size={20} color="gray" />
        </View>
        <TextInput
          placeholder="Search"
          style={styles.textInput}
          onChangeText={text => {
            updateSearch(text);
          }}
        />
      </View>

      <Feather name="filter" size={25} color="gray" />
    </View>
  );
}
const styles = StyleSheet.create({
  txtError: {
    marginTop: '2%',
    width: '89%',
    color: 'white',
  },
  textInput: {
    flex: 1,
  },
  vwSearch: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputContainer: {
    backgroundColor: '#f5f6f8',
    height: 40,
    flexDirection: 'row',
    borderRadius: 30,
    width: '80%',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },
});
