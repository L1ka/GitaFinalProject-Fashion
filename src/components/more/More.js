import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/core';
import Header from '../home/Header';

const More = () => {
  const navigation = useNavigation();
  const onPressItem = () => {
    navigation.navigate('Login');
  };

  const back = () => {
    navigation.navigate('Home');
  };

  const Item = ({icon, text}) => {
    return (
      <View>
        <View style={styles.itemContainer}>
          <Ionicons
            name={icon}
            size={30}
            style={{margin: 20}}
            color="#6b7c85"
          />
          <View style={styles.container}>
            <Text style={{fontSize: 18, color: '#6b7c85'}}>{text}</Text>
            <Ionicons name="arrow-forward-circle" size={30} color="#6b7c85" />
          </View>
        </View>
        <View style={styles.line}></View>
      </View>
    );
  };

  return (
    <View style={{marginHorizontal: 20}}>
      <View style={styles.mainContainer}>
        <TouchableOpacity style={{marginTop: 20}} onPress={() => back()}>
          <Feather name="chevron-left" size={30} color="#ff6969" />
        </TouchableOpacity>
        <Header />
      </View>
      <View>
        <Text style={{color: 'black', fontSize: 30, margin: 20}}>More</Text>
      </View>
      <View style={styles.item}>
        <Item icon="ios-location-sharp" text="Shipping Address" />
        <Item icon="card-outline" text="Payment Method" />
        <Item icon="ios-wallet-outline" text="Currency" />
        <Item icon="ios-language-outline" text="Language" />
      </View>

      <TouchableOpacity
        style={{alignSelf: 'center'}}
        onPress={() => onPressItem()}>
        <Text style={{color: '#ff6969', fontSize: 16}}>LOG OUT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default More;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '70%',
  },
  line: {
    height: 2,
    backgroundColor: '#F5F6F8',
    width: '72%',
    alignSelf: 'flex-end',
    marginRight: 30,
  },
  item: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 25,
    marginBottom: 50,
  },
  marginTop: {
    marginTop: 20,
    marginRight: 20,
  },
  txt: {
    fontSize: 15,
  },
  price: {
    fontSize: 15,
    color: '#ff6969',
  },
  pricetxt: {
    fontSize: 15,
    color: 'black',
  },
  chatNotification: {
    height: 25,
    width: 25,
    borderRadius: 50,
    backgroundColor: '#ff6969',
    position: 'absolute',
    top: 18,
    right: 64,
  },
  bellNotification: {
    height: 25,
    width: 25,
    borderRadius: 50,
    backgroundColor: '#ff6969',
    position: 'absolute',
    top: 18,
    right: 10,
  },
  amount: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 15,
  },
});
