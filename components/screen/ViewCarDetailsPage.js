import {Alert, StyleSheet, PermissionsAndroid} from 'react-native';
import React, {useState} from 'react';
import {
  NativeBaseProvider,
  Text,
  Input,
  VStack,
  Button,
  View,
  Heading,
  HStack,
  Image,
  Center,
  TextArea,
} from 'native-base';
import * as Animatable from 'react-native-animatable';

export default function ViewCarDetailsPage({navigation}) {
  return (
    <NativeBaseProvider>
      <View style={styles.view_set} shadow={5}>
        <View>
          <HStack>
            <Button
              onPress={() => {
                navigation.navigate('AddCar');
              }}>
              Add
            </Button>
          </HStack>
          <VStack alignItems="center" space={3 + 3} mt={20}>
            <View style={styles.container} mt={10} shadow={5}>
              <Text color="white">View</Text>
            </View>
            <View style={styles.container}>
              <Text color="white">View</Text>
            </View>
            <View style={styles.container}>
              <Text color="white">View</Text>
            </View>
          </VStack>
        </View>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  view_set: {
    backgroundColor: '#000000',
    width: '100%',
    height: 690,
  },
  container: {
    backgroundColor: '#3c3737',
    width: '80%',
    height: 150,
  },
});
