import React from 'react';
import {Text, View} from 'react-native';
import {commonStyles} from '../styles/common';

type Props = {};

export default function HomeScreen({}: Props) {
  return (
    <View style={commonStyles.centerContainer}>
      <Text>Home</Text>
    </View>
  );
}
