import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Button from '../Button';
import {useNavigation} from '@react-navigation/core';
import Header from '../home/Header';

const CheckOut = function ({route}) {
  const data = route.params.data;

  const navigation = useNavigation();
  const onPressItem = () => {
    navigation.navigate('orderplaced');
  };
  const back = () => {
    navigation.navigate('search');
  };
  return (
    <View style={{flex: 1}}>
      <View style={[styles.header, {flex: 1}]}>
        <TouchableOpacity onPress={() => back()} style={{marginTop: 30}}>
          <Feather name="chevron-left" size={30} color="#ff6969" />
        </TouchableOpacity>
        <Header />
      </View>
      <Text style={styles.title}>Cart</Text>
      <View style={[styles.itemContainer, {flex: 6}]}>
        <Image source={data.url} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.txt}>
            {data.model} - {data.color}
          </Text>
          <Text style={styles.txt}>1, {data.color}</Text>
          <Text style={styles.price}>${data.price}</Text>
          <View style={{flexDirection: 'row'}}>
            <AntDesign
              name="pluscircle"
              size={20}
              color="#A0A0A0"
              style={{marginRight: 10}}
            />
            <Text style={{marginRight: 10, fontSize: 15}}>1</Text>
            <AntDesign name="minuscircle" size={20} color="#A0A0A0" />
          </View>
          <View style={styles.line}></View>
        </View>
      </View>
      {/* FOOTER SECTION */}
      <View style={[styles.footerContainer, {flex: 1.5}]}>
        <View style={styles.line}></View>
        <View style={styles.footer}>
          <View>
            <Text>TOTAL</Text>
            <Text style={styles.pricetxt}>${data.price}</Text>
            <Text>Free Domestic Shipping</Text>
          </View>

          <Button
            title="CHECKOUT"
            name="chevron-circle-right"
            color="#fff"
            iconColor="#fff"
            background="#ff6969"
            onPress={() => onPressItem()}
          />
        </View>
      </View>
    </View>
  );
};

export default CheckOut;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 2,
    marginBottom: 30,
  },
  notifications: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'relative',
  },
  title: {
    fontSize: 25,
    color: 'black',
    fontWeight: '700',
    marginBottom: 10,
    marginLeft: 15,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    flex: 7,
    marginHorizontal: 20,
  },
  image: {
    borderRadius: 1000,
    width: 170,
    height: 170,
  },
  info: {
    justifyContent: 'space-around',
    marginLeft: 30,
    height: 170,
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

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: 'grey',
  },
  footerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
});
