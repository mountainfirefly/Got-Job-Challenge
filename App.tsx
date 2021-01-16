import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import RestaurantsScreen from './src/containers/Restaurants';
import RestaurantApplicationsScreen from './src/containers/RestaurantApplications';

const Stack = createStackNavigator();

const App: () => JSX.Element = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Restaurants" component={RestaurantsScreen} />
          <Stack.Screen
            name="RestaurantApplications"
            component={RestaurantApplicationsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
