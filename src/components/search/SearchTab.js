import React, {useRef, useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import Searchbar from './SearchBar';
import {ShirtData} from '../Data';

export default function SearchTab({newData}) {
  const searchText = useRef('');

  function updateSearch(value) {
    searchText.current = value;
  }
  const [active, setActive] = useState('');

  return (
    <View style={styles.container}>
      <Searchbar updateSearch={updateSearch} style={{width: '80%'}} />
      {/* FILTER */}
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={styles.marginRight}
          onPress={() => {
            const bestMatch = ShirtData.slice().filter(rec =>
              rec.model
                .toLowerCase()
                .startsWith(searchText.current.toLocaleLowerCase()),
            );
            setActive('btn1');
            newData(bestMatch);
          }}>
          <Text style={{color: active === 'btn1' ? '#ff6969' : 'grey'}}>
            BEST MATCH
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.marginRight}
          onPress={() => {
            const highToLow = ShirtData.slice().sort((a, b) => {
              if (a.raiting > b.raiting) return -1;
              if (a.raiting < b.raiting) return 1;
              return 0;
            });
            setActive('btn2');
            newData(highToLow);
          }}>
          <Text style={{color: active === 'btn2' ? '#ff6969' : 'grey'}}>
            TOP RATED
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.marginRight}
          onPress={() => {
            const lowToHigh = ShirtData.slice().sort((a, b) => {
              if (a.price > b.price) return 1;
              if (a.price < b.price) return -1;
              return 0;
            });
            setActive('btn3');
            newData(lowToHigh);
          }}>
          <Text style={{color: active === 'btn3' ? '#ff6969' : 'grey'}}>
            PRICE LOW-HIGH
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            const highToLow = ShirtData.slice().sort((a, b) => {
              if (a.price > b.price) return -1;
              if (a.price < b.price) return 1;
              return 0;
            });
            setActive('btn4');
            newData(highToLow);
          }}>
          <Text style={{color: active === 'btn4' ? '#ff6969' : 'grey'}}>
            PRICE HIGH-LOW
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: '12%',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  filterContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 10,
  },
  marginRight: {
    marginRight: 15,
  },
  active: {
    color: 'red',
  },
});
