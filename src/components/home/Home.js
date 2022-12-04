import React from 'react';
import {View} from 'react-native';

import Header from './Header';
import Categories from './Categories';
import Latest from './Latest';
import ShirtSection from './ShirtSection';

const Home = () => {
  return (
    <View>
      <Header />
      <Categories />
      <Latest />
      <ShirtSection />
    </View>
  );
};

export default Home;
