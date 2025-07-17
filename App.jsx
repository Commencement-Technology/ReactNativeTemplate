import { StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



// import WelcomeScreen from './src/screens/WelcomeScreen';
import AboutScreen from './src/screens/AboutScreen';
// import ServicesScreen from './src/screens/ServicesScreen';
// import ContactScreen from './src/screens/ContactScreen';
// import PortfolioScreen from './src/screens/PortfolioScreen';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {/* <Stack.Screen name="Welcome" component={WelcomeScreen} /> */}
        <Stack.Screen name="About" component={AboutScreen} />
        {/* <Stack.Screen name="Services" component={ServicesScreen} /> */}
        {/* <Stack.Screen name="Contact" component={ContactScreen} /> */}
        {/* <Stack.Screen name="Portfolio" component={PortfolioScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});