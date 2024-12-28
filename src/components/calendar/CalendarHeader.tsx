import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Calendarstyle} from '../../styles/calendar';
import {addMonths, format, subMonths} from 'date-fns';

interface CalendarHeaderProps {
  currentMonth: Date;
  onMonthChange: (date: Date) => void;
}

export const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  currentMonth,
  onMonthChange,
}) => (
  <View style={Calendarstyle.header}>
    <TouchableOpacity onPress={() => onMonthChange(subMonths(currentMonth, 1))}>
      <Text style={Calendarstyle.arrow}>{'<'}</Text>
    </TouchableOpacity>
    <Text style={Calendarstyle.monthText}>
      {format(currentMonth, 'MMMM yyyy')}
    </Text>
    <TouchableOpacity onPress={() => onMonthChange(addMonths(currentMonth, 1))}>
      <Text style={Calendarstyle.arrow}>{'>'}</Text>
    </TouchableOpacity>
  </View>
);
