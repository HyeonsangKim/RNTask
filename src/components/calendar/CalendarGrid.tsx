import React from 'react';
import {View} from 'react-native';
import {startOfMonth, endOfMonth, eachDayOfInterval} from 'date-fns';
import {CalendarCell} from './CalendarCell';
import {Calendarstyle} from '../../styles/calendar';

interface CalendarGridProps {
  currentMonth: Date;
  selectedDate: Date;
  onSelectDate: (date: Date) => void;
}

export function CalendarGrid({
  currentMonth,
  selectedDate,
  onSelectDate,
}: CalendarGridProps) {
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const allDays = eachDayOfInterval({start: monthStart, end: monthEnd});

  const renderGrid = () => {
    const rows = [];
    let days: any = [];

    const startDay = monthStart.getDay();
    for (let i = 0; i < startDay; i++) {
      days.push(<View key={`empty-${i}`} style={Calendarstyle.Gridcell} />);
    }

    allDays.forEach(day => {
      days.push(
        <CalendarCell
          key={day.toISOString()}
          day={day}
          currentMonth={currentMonth}
          selectedDate={selectedDate}
          onSelectDate={onSelectDate}
        />,
      );

      if (days.length === 7) {
        rows.push(
          <View key={day.toISOString()} style={Calendarstyle.Gridrow}>
            {days}
          </View>,
        );
        days = [];
      }
    });

    if (days.length > 0) {
      for (let i = days.length; i < 7; i++) {
        days.push(
          <View key={`empty-end-${i}`} style={Calendarstyle.Gridcell} />,
        );
      }
      rows.push(
        <View key="last-row" style={Calendarstyle.Gridrow}>
          {days}
        </View>,
      );
    }

    return rows;
  };

  return <View style={Calendarstyle.Gridcontainer}>{renderGrid()}</View>;
}
