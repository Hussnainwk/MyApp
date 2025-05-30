import {Text, View} from 'react-native';
import React from 'react';
import {commonStyles} from './styles/commonStyles';

const ContactCard = ({item}) => {
  return (
    <View style={commonStyles.aligncent}>
      <View style={commonStyles.boxSize}>
        <View style={commonStyles.boxInnerContent}>
          <Text>{item.name}</Text>
          <Text>{item.email}</Text>
          <Text>{item.jobTitle}</Text>
          <Text>{item.phone}</Text>
        </View>
      </View>
    </View>
  );
};

export default ContactCard;
