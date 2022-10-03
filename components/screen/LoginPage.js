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
        <Text fontSize="3xl" bold underline mt="10%" ml="30%">
          Login Form
        </Text>

        <VStack space={3} alignItems="center" mt="15%">
          <Input
            mx="3"
            value={userName}
            onChangeText={e => {
              setUserName(e);
            }}
            placeholder="user name"
            w="80%"
          />
          <Input
            mx="3"
            value={password}
            onChangeText={e => {
              setPassword(e);
            }}
            placeholder="password"
            w="80%"
          />
          <Button
            size="md"
            variant="subtle"
            colorScheme="secondary"
            onPress={checkData}>
            Login
          </Button>
        </VStack>
      </View>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  view_set: {
    width: '100%',
    height: 100,
  },
});
