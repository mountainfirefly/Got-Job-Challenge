import React from 'react';

import RestaurantsView from '../../components/Restaurants';

import data from '../../../dummyData/applications.json';

// Page to render retaurant list.
const RestaurantsPage = (props) => {
  const restaurants = data.map((item, index) => {
    return {
      id: `${item.restaurant.id}_${index}`,
      name: item.restaurant.label,
    };
  });

  return <RestaurantsView restaurants={restaurants} {...props} />;
};

export default RestaurantsPage;
