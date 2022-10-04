import {View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './components/screen/Home';
import LoginPage from './components/screen/LoginPage';
import RegisterFormPage from './components/screen/RegisterFormPage';
import AddCar from './components/screen/AddCar';

const Stack = createStackNavigator();
export default function App() {
  return (
    <View>
      <AddCar />
    </View>
  );
}
