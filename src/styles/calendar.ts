import {StyleSheet} from 'react-native';

export const Calendarstyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  arrow: {
    fontSize: 20,
    padding: 10,
    color: '#1A73E8',
  },
  monthText: {
    fontSize: 18,
    fontWeight: '600',
  },
  daysRow: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  dayText: {
    flex: 1,
    textAlign: 'center',
    color: '#666666',
    fontSize: 13,
  },
  sundayText: {
    color: '#FF6B6B',
  },
  saturdayText: {
    color: '#1A73E8',
  },
  body: {
    marginTop: 5,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  Gridcontainer: {
    flex: 1,
    paddingTop: 10,
  },
  Gridrow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 2,
  },
  Gridcell: {
    flex: 1,
    aspectRatio: 1,
    margin: 2,
  },
  cell: {
    flex: 1,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
  },
  cellText: {
    fontSize: 16,
    color: '#333333',
  },
  mutedText: {
    color: '#CCCCCC',
  },
  selectedCell: {
    borderColor: '#1A73E8',
    borderWidth: 2,
    borderRadius: 50,
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedText: {
    color: '#1A73E8',
  },
});
