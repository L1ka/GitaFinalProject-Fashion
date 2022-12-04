import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './home/Home';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Cart from './cart/Cart';
import More from './more/More';
import Profile from './profile/Profile';
import Search from './search/Search';

const Tab = createBottomTabNavigator();

const BottomNavs = () => {
  const focusState = status => {
    let color;
    status.focused ? (color = '#ff6969') : (color = 'black');
    return color;
  };
  return (
    <Tab.Navigator initialRoutName={Home} screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarActiveTintColor: '#ff6969',
          tabBarIcon: tabInfo => {
            return (
              <Feather name="home" size={30} color={focusState(tabInfo)} />
            );
          },
        }}
      />

      <Tab.Screen
        name="search"
        component={Search}
        options={{
          tabBarActiveTintColor: '#ff6969',
          tabBarIcon: tabInfo => {
            return (
              <Feather name="search" size={30} color={focusState(tabInfo)} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarActiveTintColor: '#ff6969',
          tabBarIcon: tabInfo => {
            return (
              <Feather
                name="shopping-cart"
                size={30}
                color={focusState(tabInfo)}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarActiveTintColor: '#ff6969',
          tabBarIcon: tabInfo => {
            return (
              <Feather name="user" size={30} color={focusState(tabInfo)} />
            );
          },
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarActiveTintColor: '#ff6969',
          tabBarIcon: tabInfo => {
            return (
              <EvilIcons name="navicon" size={30} color={focusState(tabInfo)} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavs;
