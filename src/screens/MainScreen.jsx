import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import FeedScreen from './FeedScreen';
import MessageListScreen from './MessagesListScreen';
import ProfileScreen from './ProfileScreen';
import CoursesScreen from './CourseScreen';
import NotificationScreen from './NotificationScreen';

const Tab = createBottomTabNavigator();

const DummyScreen = ({ label }) => (
  <React.Fragment>
    <FeedScreen />
  </React.Fragment>
);

export default function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#A45EE3',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#fff',
          height: 60,
          paddingBottom: 5,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Notes':
              iconName = 'document-text';
              break;
            case 'Chats':
              iconName = 'chatbubble';
              break;
            case 'Notifications':
              iconName = 'notifications';
              break;
            case 'Profile':
              iconName = 'person';
              break;
            default:
              iconName = 'ellipse';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={FeedScreen} />
      <Tab.Screen name="Notes" component={CoursesScreen} />
      <Tab.Screen name="Chats" component={MessageListScreen} />
      <Tab.Screen name="Notifications" component={NotificationScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
