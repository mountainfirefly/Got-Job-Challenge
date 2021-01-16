import React, {useEffect} from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import get from 'lodash.get';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GestureRecognizer from 'react-native-swipe-gestures';

import styles from './styles';

const ApplicantProfile = (props) => {
  const {applicantProfile, applicationId, restaurantId} = props;
  const fields = get(applicantProfile, 'fields', []);

  useEffect(() => {
    (async () => {
      try {
        const items = await AsyncStorage.getItem('viewed_profiles');
        const parsedItems = items ? JSON.parse(items) : [];
        parsedItems.push(`${restaurantId}_${applicationId}`);

        await AsyncStorage.setItem(
          'viewed_profiles',
          JSON.stringify(parsedItems),
        );
        props.updateViewProfile(`${restaurantId}_${applicationId}`);
      } catch (e) {
        // saving error
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{applicantProfile.name}</Text>
        <TouchableOpacity onPress={props.close}>
          <Text>Close</Text>
        </TouchableOpacity>
      </View>
      <GestureRecognizer
        style={styles.container}
        onSwipeLeft={props.leftSwipe}
        onSwipeRight={props.rightSwipe}>
        <FlatList
          data={fields}
          style={styles.applicantContainer}
          renderItem={({item}) => {
            return (
              <View>
                <Text style={styles.question}>{item.title}</Text>
                <Text>{item.answer}</Text>
              </View>
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </GestureRecognizer>
    </SafeAreaView>
  );
};

export default ApplicantProfile;
