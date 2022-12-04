import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const Header = function () {
  return (
    <View style={styles.container}>
      <Feather name="message-circle" size={30} />
      <Feather name="bell" size={30} />
      <View style={[styles.notification, styles.message]}>
        <Text style={styles.number}>5</Text>
      </View>
      <View style={[styles.notification, styles.bell]}>
        <Text style={styles.number}>10</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'relative',
    alignSelf: 'flex-end',
    marginTop: 20,
    justifyContent: 'space-evenly',
    width: '30%',
  },
  notification: {
    height: 25,
    width: 25,
    borderRadius: 50,
    backgroundColor: '#ff6969',
    position: 'absolute',
    top: 10,
  },
  message: {
    right: 55,
  },
  bell: {
    right: 10,
  },
  number: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 15,
  },
});

export default Header;
