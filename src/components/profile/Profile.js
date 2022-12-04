import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Header from '../home/Header';
import {useNavigation} from '@react-navigation/core';

const Profile = () => {
  const navigation = useNavigation();
  const back = () => {
    navigation.navigate('Home');
  };

  const ItemsList = ({icon, text}) => {
    return (
      <View>
        <View style={styles.itemContainer}>
          <Icon name={icon} size={20} style={{margin: 17}} color="#6b7c85" />
          <View style={[styles.container, {width: '70%'}]}>
            <Text style={{fontSize: 18, color: '#6b7c85'}}>{text}</Text>
            <Icon name="arrow-circle-right" size={25} color="#6b7c85" />
          </View>
        </View>

        <View style={styles.line}></View>
      </View>
    );
  };

  return (
    <View style={{marginHorizontal: 20}}>
      <View style={styles.container}>
        <TouchableOpacity style={{marginTop: 20}} onPress={() => back()}>
          <Feather name="chevron-left" size={30} color="#ff6969" />
        </TouchableOpacity>
        <Header />
      </View>
      <View style={styles.profileContainer}>
        <Image
          style={styles.image}
          source={require('../../images/profile.png')}
        />

        <View style={styles.infoContainer}>
          <Text style={{color: 'gray', marginBottom: 15, fontSize: 17}}>
            L1ka@email.com
          </Text>
          <TouchableOpacity style={styles.btn}>
            <Text style={{alignSelf: 'center', fontWeight: '700'}}>
              EDIT PROFILE
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.itemsContainer}>
        <ItemsList icon="list-ul" text="All My Orders" />
        <ItemsList icon="parachute-box" text="Pending Shipments" />
        <ItemsList icon="credit-card" text="Pending Payments" />
        <ItemsList icon="clipboard-check" text="Finished Orders" />
      </View>
      <View style={styles.itemsContainer2}>
        <ItemsList icon="envelope-open-text" text="Invite Friends" />
        <ItemsList icon="headphones-alt" text="Customer Support" />
        <ItemsList icon="star" text="Rate Our App" />
        <ItemsList
          icon="edit"
          icon2="arrow-circle-right"
          text="Make a Suggestion"
        />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-around',
  },
  profileContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 20,
  },
  line: {
    height: 2,
    backgroundColor: '#F5F6F8',
    width: '72%',
    alignSelf: 'flex-end',
    marginRight: 15,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  infoContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 20,
  },
  btn: {
    borderRadius: 30,
    width: '60%',
    padding: 5,
    borderColor: 'gray',
    borderStyle: 'solid',
    borderWidth: 2,
  },
  itemsContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
  },
  itemsContainer2: {
    backgroundColor: '#fff',
    borderRadius: 10,
  },
});
