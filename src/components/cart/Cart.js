import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Zocial from 'react-native-vector-icons/Zocial';
import Feather from 'react-native-vector-icons/Feather';
import Button from '../Button';
import {useNavigation} from '@react-navigation/core';

const Cart = () => {
  const navigation = useNavigation();
  const onPressItem = () => {
    navigation.navigate('search');
  };

  const back = () => {
    navigation.navigate('Home');
  };
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => back()}>
          <Feather name="chevron-left" size={30} color="#ff6969" />
        </TouchableOpacity>
        <Feather name="shopping-cart" size={30} />
      </View>
      <View style={{alignItems: 'center', marginTop: 130}}>
        <Zocial name="cart" size={100} color="#ff6969" />
        <Text style={styles.title}>Your Cart Is Empty</Text>
        <Button
          title="SHOP NOW"
          name="chevron-circle-right"
          color="#fff"
          iconColor="#fff"
          background="#ff6969"
          onPress={() => onPressItem()}
        />
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  title: {fontSize: 25, marginTop: 20, marginBottom: 100},
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 15,
    marginHorizontal: 15,
  },
});
