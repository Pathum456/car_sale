import React, {useState} from 'react';
import {
  NativeBaseProvider,
  Text,
  Input,
  VStack,
  Button,
  View,
  Image,
} from 'native-base';
import {Alert, StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';

const img = require('../assets/images/Car_Sale_App_Icon.png');

export default function LoginPage({navigation}) {
  const [fullName, setFullName] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const saveUser = async () => {
    if (
      fullName !== '' &&
      contactNo !== '' &&
      userName !== '' &&
      password !== ''
    ) {
      fetch('http://192.168.8.104:4000/users', {
        method: 'POST',
        body: JSON.stringify({
          fullName: fullName,
          userName: userName,
          contactNo: contactNo,
          password: password,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then(response => response.json())
        .then(json => {
          if (json.status === '500') {
            Alert.alert(json.message);
            navigation.navigate('LoginPage');
          } else {
            Alert.alert(json.message);
            clearTextFields();
          }
        })

        .catch(err => Alert.alert(err.message));
    } else {
      Alert.alert('Please fill all the fields and try again.');
    }
  };
  const clearTextFields = () => {
    setFullName('');
    setUserName('');
    setPassword('');
    setContactNo('');
  };

  return (
    <NativeBaseProvider>
      <View style={styles.view_set}>
        <VStack space={2}>
          <Animatable.View
            animation="pulse"
            iterationCount={1}
            direction="alternate"
            easing="linear"
            duration={2500}>
            <Image source={img} alt="" ml="15%" />
          </Animatable.View>
          <Animatable.View
            animation="zoomInDown"
            iterationCount={1}
            direction="alternate"
            easing="ease-in-sine"
            duration={1000}
            delay={500}>
            <Text fontSize="3xl" bold color="red.500" ml={5}>
              Register
            </Text>
          </Animatable.View>
        </VStack>
        <VStack space={6} alignItems="center" mt={5}>
          <Animatable.View
            animation="zoomInDown"
            iterationCount={1}
            direction="alternate"
            easing="ease-in-sine"
            duration={1200}
            delay={700}>
            <Input
              shadow={1}
              type="text"
              variant="rounded"
              mx="3"
              value={fullName}
              onChangeText={e => {
                setFullName(e);
              }}
              placeholder="full name"
              w="80%"
            />
          </Animatable.View>
          <Animatable.View
            animation="zoomInDown"
            iterationCount={1}
            direction="alternate"
            easing="ease-in-sine"
            duration={1400}
            delay={900}>
            <Input
              shadow={1}
              type="text"
              variant="rounded"
              mx="3"
              value={contactNo}
              onChangeText={e => {
                setContactNo(e);
              }}
              placeholder="contact number"
              w="80%"
            />
          </Animatable.View>
          <Animatable.View
            animation="zoomInDown"
            iterationCount={1}
            direction="alternate"
            easing="ease-in-sine"
            duration={1600}
            delay={1100}>
            <Input
              shadow={1}
              type="text"
              variant="rounded"
              mx="3"
              value={userName}
              onChangeText={e => {
                setUserName(e);
              }}
              placeholder="user name"
              w="80%"
            />
          </Animatable.View>
          <Animatable.View
            animation="zoomInDown"
            iterationCount={1}
            direction="alternate"
            easing="ease-in-sine"
            duration={1800}
            delay={1300}>
            <Input
              shadow={1}
              type="password"
              variant="rounded"
              mx="3"
              value={password}
              onChangeText={e => {
                setPassword(e);
              }}
              placeholder="password"
              w="80%"
            />
          </Animatable.View>
          <Animatable.View
            animation="zoomInDown"
            iterationCount={1}
            direction="alternate"
            easing="ease-in-sine"
            duration={2000}
            delay={1500}>
            <Button
              size="lg"
              variant="subtle"
              bg="primary.300"
              w={'32'}
              borderRadius={30}
              shadow={5}
              onPress={saveUser}>
              Register
            </Button>
          </Animatable.View>
        </VStack>
      </View>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  view_set: {
    backgroundColor: '#F9E7FE',
    width: '100%',
    height: 690,
  },
});
