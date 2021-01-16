import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import get from 'lodash.get';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Application from './Application';
import ApplicantProfile from '../../containers/RestaurantApplications/ApplicationProfile';

import styles from './styles';

const RestaurantApplications = ({applications, navigation, restaurantId}) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [viewedProfiles, setViewedProfiles] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const items = await AsyncStorage.getItem('viewed_profiles');
        const parsedItems = items ? JSON.parse(items) : [];
        console.log(parsedItems);
        setViewedProfiles(parsedItems);
      } catch (e) {
        // saving error
      }
    })();
  }, []);

  if (selectedIndex === 0 || selectedIndex) {
    return (
      <ApplicantProfile
        leftSwipe={(state) => {
          const updatedIndex = selectedIndex + 1;
          if (updatedIndex < applications.length) {
            setSelectedIndex(updatedIndex);
          }
        }}
        rightSwipe={() => {
          const updatedIndex = selectedIndex - 1;
          if (updatedIndex >= 0) {
            setSelectedIndex(updatedIndex);
          }
        }}
        updateViewProfile={(newProfileId) => {
          setViewedProfiles([...viewedProfiles, newProfileId]);
        }}
        restaurantId={restaurantId}
        applicationId={applications[selectedIndex].id}
        close={() => setSelectedIndex(null)}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Restaurant</Text>
      </View>
      <FlatList
        data={applications}
        renderItem={({item, index}) => {
          const applicationId = get(applications, `${index}.id`);
          const viewed = viewedProfiles.includes(
            `${restaurantId}_${applicationId}`,
          );

          return (
            <Application
              item={item}
              onPress={() => setSelectedIndex(index)}
              viewed={viewed}
            />
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default RestaurantApplications;
