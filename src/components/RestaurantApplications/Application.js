import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './styles';

const Application = ({onPress, item, viewed}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <Text style={styles.title}>{item.name}</Text>
      <Text>{viewed ? 'Viewed' : 'No Viewed'}</Text>
    </TouchableOpacity>
  );
};

export default Application;
