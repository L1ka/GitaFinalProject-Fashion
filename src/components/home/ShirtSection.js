import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {ShirtData} from '../Data';

const ShirtSection = function () {
  const Card = ({index}) => {
    return (
      <View style={styles.card}>
        <Image style={styles.image} source={ShirtData[index].url} />
        <View>
          <Text>{ShirtData[index].model}</Text>
          <Text style={{color: 'black'}}>${ShirtData[index].price}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Card index={4} />
      <Card index={5} />
      <Card index={13} />
    </View>
  );
};

export default ShirtSection;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 15,
    height: '28%',
  },
  card: {
    backgroundColor: '#fff',
    width: 115,
    height: '100%',
    borderRadius: 10,
    justifyContent: 'space-around',
  },
  image: {width: 90, height: 125, alignSelf: 'center'},
});
