import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './styles';

const Restaurant = ({onPress, item}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <Text style={styles.title}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default Restaurant;
