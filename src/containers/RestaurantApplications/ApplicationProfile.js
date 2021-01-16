import React from 'react';
import ApplicantProfileView from '../../components/RestaurantApplications/ApplicantProfile';

import data from '../../../dummyData/applications.json';

// Page to render applicant profile.
const ApplicantProfile = (props) => {
  const {restaurantId, applicationId} = props;
  const restaurantInfo = data.find((item, index) => {
    return `${item.restaurant.id}_${index}` === restaurantId;
  });
  const applicationInfo = restaurantInfo.form_responses.find((item) => {
    return item.form_id === applicationId;
  });
  const applicantProfile = {
    name: applicationInfo.definition.title,
    fields: applicationInfo.definition.fields.map((field) => {
      const answerInfo = applicationInfo.answers.find((answer) => {
        return field.id === answer.field.id;
      });

      return {
        id: field.id,
        title: field.title,
        answer: answerInfo.text,
      };
    }),
  };

  return (
    <ApplicantProfileView applicantProfile={applicantProfile} {...props} />
  );
};

export default ApplicantProfile;
