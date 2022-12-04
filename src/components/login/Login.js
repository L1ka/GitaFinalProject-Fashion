import React from 'react';
import {
  View,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/core';

const Login = () => {
  let navigation = useNavigation();
  return (
    <View style={styles.main}>
      <View style={styles.image}>
        <Image source={require('../../images/logo_fashion.jpg')}></Image>
      </View>

      <View style={styles.login}>
        <View style={styles.inputs}>
          <Feather name="user" size={27} color="black" />
          <View style={{marginLeft: 20}}>
            <Text style={styles.txt}>USERNAME/EMAIL</Text>

            <TextInput style={styles.txt} placeholder="user"></TextInput>
          </View>
        </View>
        <View style={styles.inputs}>
          <Feather name="lock" size={25} color="black" />
          <View style={{marginLeft: 20}}>
            <Text style={styles.txt}>PASSWORD</Text>
            <TextInput
              secureTextEntry={true}
              style={styles.txt}
              placeholder="password"></TextInput>
          </View>
        </View>
      </View>

      <View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('bottomNav')}>
          <Text style={styles.btnText}>LOG IN</Text>
        </TouchableOpacity>
        <Icon
          name="chevron-circle-right"
          size={25}
          color="white"
          style={styles.icon}
        />
      </View>

      <View style={{width: 300, marginTop: 40}}>
        <Text style={{textAlign: 'center'}}>
          Don't have an account? Swipe right to{' '}
          <Text style={styles.text}>create a new account</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f5f6f8',
    height: '100%',
  },

  inputs: {
    height: 40,
    borderWidth: 0,

    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: 350,
    flex: 1,
    marginLeft: 20,
  },
  image: {
    marginTop: 50,
    marginBottom: 50,
  },
  login: {
    backgroundColor: '#ffffff',
    borderRadius: 30,
    width: 350,
    height: 200,
    justifyContent: 'center',
    marginBottom: 60,
  },
  btn: {
    position: 'relative',
    backgroundColor: '#ff6969',
    borderRadius: 30,
    width: 350,
    height: 50,
    marginBottom: 30,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    color: '#ff6969',
  },
  txt: {
    padding: 2,
    color: 'grey',
  },

  btnText: {
    color: '#ffffff',
    fontSize: 17,
  },
  icon: {marginRight: 15, position: 'absolute', right: 10, top: 12},
});

export default Login;
