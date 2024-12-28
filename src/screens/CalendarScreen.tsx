import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {Calendarstyle} from '../styles/calendar';
import {CalendarHeader} from '../components/calendar/CalendarHeader';
import Calendar from '../components/calendar/Calendar';

export default function CalendarScreen() {
  const [selectedDate, setSelectedDate] = React.useState<Date>(new Date());
  const [currentMonth, setCurrentMonth] = React.useState<Date>(new Date());

  return (
    <View style={Calendarstyle.container}>
      <SafeAreaView>
        <CalendarHeader
          currentMonth={currentMonth}
          onMonthChange={setCurrentMonth}
        />
      </SafeAreaView>
      <Calendar
        selectedDate={selectedDate}
        onSelectDate={setSelectedDate}
        currentMonth={currentMonth}
      />
    </View>
  );
}
