import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Categories = function () {
  return (
    <View style={styles.containerMargin}>
      <Text style={styles.title}>Categories</Text>
      <View style={styles.container}>
        <View style={styles.center}>
          <View style={[{backgroundColor: 'orange'}, styles.circle]}>
            <FontAwesome5 name="tshirt" size={35} color="white" />
          </View>
          <Text>Apparel</Text>
        </View>
        <View style={styles.center}>
          <View style={[{backgroundColor: '#00BFFF'}, styles.circle]}>
            <MaterialCommunityIcons name="lipstick" size={35} color="#fff" />
          </View>
          <Text>Beauty</Text>
        </View>
        <View style={styles.center}>
          <View style={[{backgroundColor: '#00FF00'}, styles.circle]}>
            <MaterialCommunityIcons name="shoe-heel" size={35} color="#fff" />
          </View>
          <Text>Shoes</Text>
        </View>
        <View style={styles.center}>
          <View style={[{backgroundColor: '#fff'}, styles.circle]}>
            <Feather name="chevron-right" size={35} color="#ff6969" />
          </View>
          <Text>See All</Text>
        </View>
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  containerMargin: {margin: 15},
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: '700',
    marginTop: 10,
  },
  center: {alignItems: 'center', marginTop: 10, marginBottom: 10},
  circle: {
    height: 70,
    width: 70,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
