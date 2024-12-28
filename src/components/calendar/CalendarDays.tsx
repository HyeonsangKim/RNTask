import React from 'react';
import {View, Text} from 'react-native';
import {Calendarstyle} from '../../styles/calendar';

export function CalendarDays() {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <View style={Calendarstyle.daysRow}>
      {days.map((day, index) => (
        <Text
          key={day}
          style={[
            Calendarstyle.dayText,
            index === 0 && Calendarstyle.sundayText,
            index === 6 && Calendarstyle.saturdayText,
          ]}>
          {day}
        </Text>
      ))}
    </View>
  );
}
