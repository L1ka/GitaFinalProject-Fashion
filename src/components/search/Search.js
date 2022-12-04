import React, {useState} from 'react';
import {View} from 'react-native';
import ShirtList from './ShirtList';
import SearchTab from './SearchTab';

const Search = function () {
  const [newData, setNewData] = useState([]);

  const data = data => {
    setNewData(data);
  };

  return (
    <View>
      <SearchTab newData={data} />
      <ShirtList newData={newData} />
    </View>
  );
};

export default Search;
