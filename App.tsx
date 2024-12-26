import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {RootTabParamList} from './src/types/common';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import CalendarScreen from './src/screens/CalendarScreen';
import LibraryScreen from './src/screens/LibraryScreen';
import MyPageScreen from './src/screens/MyPageScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator<RootTabParamList>();

const TAB_SCREENS = [
  {
    name: 'Home',
    component: HomeScreen,
    title: 'Home',
    icon: 'home',
  },
  {
    name: 'Calendar',
    component: CalendarScreen,
    title: 'Calendar',
    icon: 'calendar-today',
  },
  {
    name: 'Library',
    component: LibraryScreen,
    title: 'Library',
    icon: 'library-books',
  },
  {
    name: 'MyPage',
    component: MyPageScreen,
    title: 'MyPage',
    icon: 'person',
  },
] as const;

const TabIcon = ({name, focused}: {name: string; focused: boolean}) => (
  <Icon name={name} size={24} color={focused ? '#000' : '#ccc'} />
);

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: '#888',
          tabBarStyle: {
            backgroundColor: '#fff',
          },
        }}>
        {TAB_SCREENS.map(screen => (
          <Tab.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={{
              title: screen.title,
              tabBarIcon: props => <TabIcon name={screen.icon} {...props} />,
            }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
