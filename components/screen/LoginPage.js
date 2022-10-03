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
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const checkData = () => {
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
        if (userName === '' && password === '') {
          Alert.alert('Please Fill All Fields..!');
        } else if (userName !== '' && password !== '') {
          console.log(response);
          Alert.alert('Login Successfully !');
          navigation.navigate('Login');
        } else {
          if (userName === '') {
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
            Login Form
          </Text>
        </VStack>
        <VStack space={3} alignItems="center" mt="18%">
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
            shadow={5}
            size="md"
            variant="subtle"
            bg="primary.300"
            w={'32'}
            onPress={checkData}
            mt="3">
            Login
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
