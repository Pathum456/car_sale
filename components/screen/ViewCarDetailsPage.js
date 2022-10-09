import {Alert, StyleSheet, Text, PermissionsAndroid} from 'react-native';
import React, {useState} from 'react';
import {MD3Colors} from 'react-native-paper';
import {
  NativeBaseProvider,
  VStack,
  Button,
  View,
  Image,
  IconButton,
  FlatList,
  Box,
  Avatar,
  Spacer,
  HStack,
} from 'native-base';
import * as Animatable from 'react-native-animatable';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function ViewCarDetailsPage({navigation}) {
  const data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      fullName: 'Aafreen Khan',
      timeStamp: '12:47 PM',
      recentText: 'Good Day!',
      avatarUrl:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
  ];
  return (
    <NativeBaseProvider>
      <View style={styles.view_set} shadow={5}>
        <View>
          <Button
            onPress={() => {
              navigation.navigate('AddCar');
            }}>
            Add Car
          </Button>
          <VStack space={3 + 3} mt={2}>
            {/* <FlatList
              data={data}
              renderItem={({item}) => {
                <View style={styles.container} shadow={5}>
                  <Text color="white">{item}</Text>
                </View>;
              }}
            /> */}

            <FlatList
              data={data}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('MannageCar');
                  }}>
                  <View style={styles.container} shadow={5} ml="7%">
                    <HStack space={3}>
                      <VStack space={3} ml="3%" mt="10%">
                        <Text style={styles.text_style}>{item.fullName}</Text>
                        <Text style={styles.text_style}>{item.fullName}</Text>
                        <Text style={styles.text_style}>{item.fullName}</Text>
                      </VStack>
                      <Image
                        alt=""
                        shadow={50}
                        ml={5}
                        style={styles.car}
                        source={require('../assets/images/car-1.jpg')}
                        resizeMode="contain"
                      />
                    </HStack>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={item => item.id}
            />
          </VStack>
        </View>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  view_set: {
    backgroundColor: 'white',
    width: '100%',
    height: 690,
  },
  container: {
    backgroundColor: '#cccac4',
    width: '80%',
    height: 150,
  },
  car: {
    width: 180,
    height: 150,
  },
  text_style: {
    fontSize: 16,
  },
});
