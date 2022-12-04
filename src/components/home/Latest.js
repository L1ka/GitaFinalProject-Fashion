import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Latest = function () {
  return (
    <View style={styles.containerMargin}>
      <Text style={styles.title}>Latest</Text>
      <View>
        <Image
          style={styles.image}
          source={require('../../images/0011_fashion_image.jpg')}
        />
        <Text style={styles.text}>For all your summer clothing needs</Text>
        <TouchableOpacity style={styles.btn}>
          <Text>SEE MORE</Text>
          <Icon
            name="chevron-circle-right"
            size={25}
            color="#ff6969"
            style={{marginLeft: 15}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Latest;

const styles = StyleSheet.create({
  containerMargin: {marginHorizontal: 15},
  title: {
    fontSize: 20,
    color: 'black',
    fontWeight: '700',
    marginBottom: 10,
  },
  text: {
    position: 'absolute',
    top: 30,
    left: 30,
    color: 'white',
    width: '30%',
  },
  image: {
    height: 200,
    width: '100%',
    borderRadius: 20,
    alignSelf: 'center',
    position: 'relative',
  },
  btn: {
    position: 'absolute',
    top: 130,
    left: 30,
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 7,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
