import {View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './components/screen/Home';
import LoginPage from './components/screen/LoginPage';
import RegisterFormPage from './components/screen/RegisterFormPage';
import AddCar from './components/screen/AddCar';
import ViewCarDetailsPage from './components/screen/ViewCarDetailsPage';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="RegisterFormPage" component={RegisterFormPage} />
        <Stack.Screen
          name="ViewCarDetailsPage"
          component={ViewCarDetailsPage}
        />
        <Stack.Screen name="AddCar" component={AddCar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
