import React, {useState} from 'react';
import {
  NativeBaseProvider,
  Text,
  Input,
  VStack,
  Button,
  View,
} from 'native-base';
import {Alert, StyleSheet} from 'react-native';

export default function LoginPage({navigation}) {
  const [fullName, setFullName] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const saveData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: userName,
        body: password,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => {
        if (
          fullName === '' &&
          contactNo === '' &&
          userName === '' &&
          password === ''
        ) {
          Alert.alert('Please Fill All Fields..!');
        } else if (userName !== '' && password !== '') {
          console.log(response);
          Alert.alert('Login Successfully !');
        } else {
          if (fullName === '') {
            Alert.alert('Please Fill Full Name..!');
          } else if (contactNo === '') {
            Alert.alert('Please Fill Contact Number..!');
          } else if (userName === '') {
            Alert.alert('Please Fill Username..!');
          } else if (password === '') {
            Alert.alert('Please Fill Password..!');
          }
        }
      })
      .catch(_err => {
        Alert.alert('Error occured !');
      });
  };

  return (
    <NativeBaseProvider>
      <View style={styles.view_set}>
        <VStack space={1} alignItems="center">
          <Text fontSize="3xl" bold underline mt="22%">
            Register Form
          </Text>
        </VStack>
        <VStack space={5} alignItems="center" mt="18%">
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
          <Button
            size="lg"
            variant="subtle"
            bg="primary.300"
            w={'32'}
            shadow={5}
            onPress={saveData}>
            Register
          </Button>
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
