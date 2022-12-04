import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {ShirtData} from '../Data';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/core';

const ShirtList = function (prop) {
  const navigation = useNavigation();
  //searchTab updates data and this comp receives it
  const newData = prop.newData;
  //newData will be used if shirts were filtered, otherwise original ShirtData will be used for flatlist
  const data = newData.length < 1 ? ShirtData : newData;

  const onPressItem = item => {
    navigation.navigate('Detail', {item: item});
  };

  const Item = ({model, price, url, raiting}) => (
    <View>
      <Image source={url} style={styles.image} />
      <Text style={styles.model}>{model}</Text>
      <View style={styles.vwPrice}>
        <Text style={styles.txtPrice}>${price}</Text>
        <View style={styles.vwRaiting}>
          <FontAwesome name="star" style={{marginRight: 3}} color="white" />
          <Text style={{color: 'white'}}>{raiting}</Text>
        </View>
      </View>
    </View>
  );

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPressItem(item)}>
      <Item
        model={item.model}
        price={item.price}
        url={item.url}
        raiting={item.raiting}
      />
    </TouchableOpacity>
  );

  return (
    <View style={{height: '90%'}}>
      <FlatList
        contentContainerStyle={{marginHorizontal: 10}}
        numColumns={2}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.url}
      />
    </View>
  );
};

export default ShirtList;

const styles = StyleSheet.create({
  container: {
    margin: 9,
    backgroundColor: '#fff',
    width: '45%',
    height: 250,
    borderRadius: 10,
    justifyContent: 'space-around',
  },
  image: {
    width: '70%',
    height: '75%',
    alignSelf: 'center',
    marginTop: 9,
  },
  model: {
    alignSelf: 'center',
  },
  vwPrice: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  txtPrice: {
    color: 'black',
  },
  vwRaiting: {
    alignItems: 'center',
    backgroundColor: '#ff6969',
    flexDirection: 'row',
    borderRadius: 25,
    paddingHorizontal: 5,
  },
});
