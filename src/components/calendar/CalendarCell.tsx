import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {isSameDay, isSameMonth} from 'date-fns';
import {Calendarstyle} from '../../styles/calendar';

interface CalendarCellProps {
  day: Date;
  currentMonth: Date;
  selectedDate: Date;
  onSelectDate: (date: Date) => void;
}

export function CalendarCell({
  day,
  currentMonth,
  selectedDate,
  onSelectDate,
}: CalendarCellProps) {
  return (
    <TouchableOpacity
      style={[
        Calendarstyle.cell,
        selectedDate &&
          isSameDay(day, selectedDate) &&
          Calendarstyle.selectedCell,
      ]}
      onPress={() => onSelectDate(day)}>
      <Text
        style={[
          Calendarstyle.cellText,
          !isSameMonth(day, currentMonth) && Calendarstyle.mutedText,
          selectedDate &&
            isSameDay(day, selectedDate) &&
            Calendarstyle.selectedText,
        ]}>
        {day.getDate()}
      </Text>
    </TouchableOpacity>
  );
}
