import { StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



// import SignupScreen from './src/screens/SignupScreen';
// import WelcomeScreen from './src/screens/Welcomecreen';
// import MainScreen from './src/screens/MainScreen';
// import NotFoundScreen from './src/screens/NotFoundScreen';
// import CoursesScreen from './src/screens/CourseScreen';
// import SemesterNotesScreen from './src/screens/SemesterNotesScreen';
// import BookChaptersScreen from './src/screens/BookChaptersScreen';
// import FeedScreen from './src/screens/FeedScreen';
// import ProfileScreen from './src/screens/ProfileScreen';
import Home from './src/gravity/Home';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {/* <Stack.Screen name="SignUp" component={SignupScreen} /> */}
        {/* <Stack.Screen name="Welcome" component={WelcomeScreen} /> */}
        {/* <Stack.Screen name="*" component={NotFoundScreen} /> */}
        {/* <Stack.Screen name="Welcome" component={WelcomeScreen} /> */}
        {/* <Stack.Screen name="Home" component={MainScreen} /> */}
        {/* <Stack.Screen name="Courses" component={CoursesScreen} /> */}
        {/* <Stack.Screen name="SemesterNotes" component={SemesterNotesScreen} /> */}
         {/* <Stack.Screen name="BookChapters" component={BookChaptersScreen} /> */}
        {/* <Stack.Screen name="Feed" component={FeedScreen} /> */}
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
        <Stack.Screen name="Home" component={Home} />



      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});