import React from 'react';
import {Text, View} from 'react-native';
import {commonStyles} from '../styles/common';

type Props = {};

export default function CalendarScreen({}: Props) {
  return (
    <View style={commonStyles.centerContainer}>
      <Text>Calendar</Text>
    </View>
  );
}
