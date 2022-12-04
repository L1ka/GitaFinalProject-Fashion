import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/core';
import Button from '../Button';

const DetailedShirt = function ({route}) {
  const data = route.params.item;
  const navigation = useNavigation();
  const onPressItem = () => {
    navigation.navigate('checkout', {data: data});
  };

  const back = () => {
    navigation.navigate('search');
  };

  const Circle = ({background}) => {
    return (
      <TouchableOpacity
        style={[
          styles.circle,
          {backgroundColor: background},
        ]}></TouchableOpacity>
    );
  };
  const Box = ({size, color = 'grey'}) => {
    return (
      <TouchableOpacity style={styles.size}>
        <Text style={[styles.text, {color: color}]}>{size}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 7}}>
        <View style={{marginTop: 15}}>
          <TouchableOpacity onPress={() => back()}>
            <Feather name="chevron-left" size={30} color="#ff6969" />
          </TouchableOpacity>
          <Feather name="shopping-cart" size={30} style={styles.cart} />
          <View style={styles.cartNotification}>
            <Text style={styles.amount}>7</Text>
          </View>
        </View>
        <View>
          <Text style={{alignSelf: 'center', fontSize: 18}}>{data.model}</Text>
          <View style={styles.vwRaiting}>
            <Text style={styles.price}>${data.price}</Text>
            <View style={styles.raiting}>
              <FontAwesome name="star" style={{marginRight: 3}} color="white" />
              <Text style={{color: 'white'}}>{data.raiting}</Text>
            </View>
          </View>
          <Image source={data.url} style={styles.image} />
        </View>
      </View>

      <View style={{flex: 1}}>
        <View style={styles.infoContainer}>
          <Text style={styles.active}>Product</Text>
          <Text style={styles.text}>Details</Text>
          <Text style={styles.text}>Reviews</Text>
        </View>
      </View>
      <View style={[{flex: 2}, {marginHorizontal: 15}]}>
        <Text style={styles.title}>SELECT COLOR</Text>
        <View style={styles.colorContainer}>
          <Circle background="#ff08e8" />
          <Feather
            name="check"
            size={30}
            color="#fff"
            style={styles.iconStyle}
          />
          <Circle background="orange" />
          <Circle background="blue" />
          <Circle background="#fff" />
          <Circle background="grey" />
          <Circle background="#000" />
        </View>
      </View>
      <View style={[{flex: 2}, {marginHorizontal: 15}]}>
        <Text style={styles.title}>SELECT SIZE (US)</Text>
        <View style={styles.sizeContainer}>
          <Box size={4.5} />
          <Box size={5} color="#ff6969" />
          <Box size={6.5} />
          <Box size={7} />
        </View>
      </View>

      <View style={styles.btnContainer}>
        <Button
          title="SHARE THIS"
          name="arrow-circle-up"
          color="grey"
          iconColor="grey"
          background="#fff"
        />
        <Button
          title="ADD TO CART"
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

const styles = StyleSheet.create({
  cart: {
    position: 'absolute',
    right: 20,
  },
  cartNotification: {
    height: 25,
    width: 25,
    borderRadius: 50,
    backgroundColor: '#ff6969',
    position: 'absolute',
    top: 12,
    right: 32,
  },

  amount: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 15,
  },
  text: {
    fontSize: 20,
  },
  active: {
    backgroundColor: '#fff',
    color: '#ff6969',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 30,
    fontSize: 20,
  },
  size: {
    backgroundColor: '#fff',
    width: 70,
    height: 40,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeSize: {
    color: '#ff6969',
    fontSize: 20,
  },
  vwRaiting: {justifyContent: 'center', flexDirection: 'row'},
  price: {color: 'black', marginRight: 5},
  raiting: {
    alignItems: 'center',
    backgroundColor: '#ff6969',
    flexDirection: 'row',
    borderRadius: 25,
    paddingHorizontal: 5,
  },
  image: {
    alignSelf: 'center',
    marginTop: 9,
    height: 250,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  title: {marginTop: 20, marginBottom: 25},
  colorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sizeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnContainer: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  iconStyle: {
    fontWeight: 'bold',
    position: 'absolute',
    alignSelf: 'center',
    left: 10,
  },
});

export default DetailedShirt;
