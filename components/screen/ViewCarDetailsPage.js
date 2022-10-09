import {Alert, StyleSheet, Text, PermissionsAndroid} from 'react-native';
import React, {useState} from 'react';
import {IconButton, MD3Colors} from 'react-native-paper';
import {
  NativeBaseProvider,
  Input,
  VStack,
  Button,
  View,
  Heading,
  HStack,
  Image,
  Center,
  TextArea,
  FlatList,
} from 'native-base';
import * as Animatable from 'react-native-animatable';

export default function ViewCarDetailsPage({navigation}) {
  const [data, setData] = useState(['Data']);
  return (
    <NativeBaseProvider>
      <View style={styles.view_set} shadow={5}>
        <View>
          <VStack alignItems="center" space={3 + 3} mt={10}>
            {/* <FlatList
              data={data}
              renderItem={({item}) => {
                <View style={styles.container} shadow={5}>
                  <Text color="white">{item}</Text>
                </View>;
              }}
            /> */}
            <Button
              onPress={() => {
                navigation.navigate('AddCar');
              }}>
              add
            </Button>
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
