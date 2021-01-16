import React from 'react';
import {SafeAreaView, FlatList, View, Text} from 'react-native';

import Restaurant from './Restaurant';

import styles from './styles';

const Restaurants = (props) => {
  const {restaurants, navigation} = props;
  const handleItemClick = (restaurantId) => {
    navigation.navigate('RestaurantApplications', {restaurantId});
  };

  console.log(props);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Restaurant List</Text>
      </View>
      <FlatList
        data={restaurants}
        renderItem={({item}) => {
          return (
            <Restaurant item={item} onPress={() => handleItemClick(item.id)} />
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default Restaurants;
