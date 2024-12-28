import {View} from 'react-native';
import React from 'react';
import {Calendarstyle} from '../../styles/calendar';
import {CalendarDays} from './CalendarDays';
import {CalendarGrid} from './CalendarGrid';

interface CalendarProps {
  onSelectDate: (date: Date) => void;
  selectedDate: Date;
  currentMonth: Date;
}

export default function Calendar({
  onSelectDate,
  selectedDate,
  currentMonth,
}: CalendarProps) {
  return (
    <View style={Calendarstyle.container}>
      <CalendarDays />
      <CalendarGrid
        currentMonth={currentMonth}
        selectedDate={selectedDate}
        onSelectDate={onSelectDate}
      />
    </View>
  );
}
