import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Button from '../Button';
import {useNavigation} from '@react-navigation/core';

const OrderIsDone = () => {
  const navigation = useNavigation();
  const onPressItem = () => {
    navigation.navigate('Home');
  };

  const orederMore = () => {
    navigation.navigate('search');
  };

  return (
    <View>
      <TouchableOpacity style={styles.backBtn} onPress={() => onPressItem()}>
        <Feather name="x" color="#ff6969" size={30} />
      </TouchableOpacity>
      <View style={styles.container}>
        <View style={StyleSheet.circleCheck}>
          <Feather name="check" color="#ff6969" size={35} />
        </View>
        <Text style={{fontSize: 25}}>Order Placed!</Text>
        <Text>
          Your order was placed successfully. For more details, check All My
          Orders page under Profile tab
        </Text>
        <View>
          <Button
            title="ORDER MORE"
            name="chevron-circle-right"
            color="#fff"
            iconColor="#fff"
            background="#ff6969"
            onPress={() => orederMore()}
          />
        </View>
      </View>
    </View>
  );
};

export default OrderIsDone;

const styles = StyleSheet.create({
  backBtn: {alignSelf: 'flex-end', margin: 20},
  circleCheck: {
    backgroundColor: '#fff',
    width: 100,
    height: 100,
    borderRadius: 1000,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '70%',
    width: '70%',
    marginTop: 60,
    alignSelf: 'center',
  },
});
