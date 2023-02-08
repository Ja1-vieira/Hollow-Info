import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import HornetScreen from "./screens/Hornet";
import KnightScreen from "./screens/Knight";
import HollowKnightScreen from "./screens/HollowKnight"

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
       <Stack.Screen name="Home" component={HomeScreen} />
       <Stack.Screen name="Hornet" component={HornetScreen} /> 
       <Stack.Screen name="Knight" component={KnightScreen} /> 
       <Stack.Screen name="HollowKnight" component={HollowKnightScreen}  /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;