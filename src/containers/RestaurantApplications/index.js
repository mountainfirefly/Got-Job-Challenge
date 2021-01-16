import React from 'react';
import get from 'lodash.get';

import RestaurantApplicationsView from '../../components/RestaurantApplications';

import data from '../../../dummyData/applications.json';

// Page to render retaurant's applications.
const RestaurantApplications = (props) => {
  const {restaurantId} = props.route.params;
  const restaurantInfo =
    data.find((item, index) => {
      console.log(item);
      return `${item.restaurant.id}_${index}` === restaurantId;
    }) || {};
  const applications = restaurantInfo.form_responses.map((item) => {
    return {
      id: get(item, 'form_id'),
      name: get(item, 'definition.title', 'No Available'),
    };
  });

  console.log(applications, 'applications');

  return (
    <RestaurantApplicationsView
      applications={applications}
      restaurantId={restaurantId}
      {...props}
    />
  );
};

export default RestaurantApplications;
