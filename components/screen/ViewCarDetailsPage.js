import {StyleSheet, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  NativeBaseProvider,
  VStack,
  Button,
  View,
  Image,
  FlatList,
  HStack,
} from 'native-base';
import * as Animatable from 'react-native-animatable';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function ViewCarDetailsPage({navigation}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://192.168.8.104:4000/cars/getcars', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(json => {
        setData(json);
      });
  });
  return (
    <NativeBaseProvider>
      <View style={styles.view_set} shadow={5}>
        <VStack alignItems={'center'} mt={5}>
          <Text style={styles.title}>All Cars</Text>
        </VStack>
        <Button
          style={styles.btn}
          onPress={() => {
            navigation.navigate('AddCar');
          }}>
          <Image
            alt=""
            ml={1}
            source={require('../assets/images/icons8-add-car-48.png')}
          />
        </Button>
        <View>
          <VStack space={3} mt={2}>
            <FlatList
              data={data}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('MannageCar', {item});
                  }}>
                  <View style={styles.container} shadow={5} ml="7%" mt="7%">
                    <HStack space={3}>
                      <VStack space={2} ml="3%" mt="3%">
                        <Text style={styles.text_style}>{item.vehicleNo}</Text>
                        <Text style={styles.text_style}>{item.brandname}</Text>
                        <Text style={styles.text_style}>{item.price}</Text>
                        <Text style={styles.text_style}>{item.contact}</Text>
                      </VStack>
                      <Image
                        alt=""
                        shadow={50}
                        ml={5}
                        style={styles.car}
                        source={require('../assets/uploads/car-1.jpg')}
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
    backgroundColor: '#4b524d',
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
    color: 'black',
  },
  btn: {
    position: 'absolute',
    width: 60,
    height: 50,
    left: '80%',
    top: '90%',
    zIndex: 10000000000,
  },
  title: {
    fontSize: 30,
    color: 'red',
    fontWeight: 'bold',
  },
});
