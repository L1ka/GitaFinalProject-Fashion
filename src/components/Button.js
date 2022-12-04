import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Button = function ({title, name, color, iconColor, background, onPress}) {
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: background}]}
      onPress={onPress}>
      <Text style={{color: color}}>{title}</Text>
      <FontAwesome5
        name={name}
        style={styles.margin}
        size={25}
        color={iconColor}
      />
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 150,
    height: 50,
  },
  margin: {marginLeft: 15},
});
