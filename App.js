import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/components/login/Login';
import bottomNav from './src/components/BottomNavs';
import DetailedShirt from './src/components/search/DetailedShirt';
import orderplaced from './src/components/cart/OrderIsDone';
import checkout from './src/components/cart/CheckOut';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="bottomNav" component={bottomNav} />
        <Stack.Screen name="Detail" component={DetailedShirt} />
        <Stack.Screen name="orderplaced" component={orderplaced} />
        <Stack.Screen name="checkout" component={checkout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
