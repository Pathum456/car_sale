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
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const checkUser = () => {
    fetch(`http://192.168.8.104:4000/users/login/${userName}/${password}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        if (json.length === 0) {
          Alert.alert('Username or password incorrect.Try again!');
        } else {
          clearTextFields();
          Alert.alert('Login Successful.');
          navigation.navigate('ViewCarDetailsPage', {
            username: json[0].username,
            fullname: json[0].fullName,
          });
          console.log(json[0].username);
          console.log(json[0].fullName);
        }
      })
      .catch(err => Alert.alert(err.message));
  };
  const clearTextFields = () => {
    setUserName('');
    setPassword('');
  };
  return (
    <NativeBaseProvider>
      <View style={styles.view_set}>
        <VStack space={2}>
          <Animatable.View
            animation="pulse"
            iterationCount={1}
            direction="alternate"
            easing="ease-in-sine"
            duration={2000}>
            <Image source={img} alt="" ml="15%" mt={2} />
          </Animatable.View>
          <Animatable.View
            animation="zoomInDown"
            iterationCount={1}
            direction="alternate"
            easing="ease-in-sine"
            duration={1000}
            delay={500}>
            <Text fontSize="3xl" bold color="red.500" ml={5}>
              Sign In
            </Text>
          </Animatable.View>
        </VStack>
        <VStack space={4} alignItems="center" mt={10}>
          <View w="80%">
            <VStack space={5} alignItems="center">
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
                  value={userName}
                  onChangeText={e => {
                    setUserName(e);
                  }}
                  placeholder="user name"
                  w="100%"
                  fontSize={18}
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
                  type="password"
                  variant="rounded"
                  mx="3"
                  value={password}
                  onChangeText={e => {
                    setPassword(e);
                  }}
                  placeholder="password"
                  w="100%"
                  fontSize={18}
                />
              </Animatable.View>
            </VStack>
          </View>
          <Animatable.View
            animation="zoomInDown"
            iterationCount={1}
            direction="alternate"
            easing="ease-in-sine"
            duration={1600}
            delay={1100}>
            <Button
              shadow={5}
              size="md"
              variant="subtle"
              borderRadius={30}
              bg="red.500"
              w={'32'}
              onPress={checkUser}
              mt="3">
              Login
            </Button>
          </Animatable.View>
          <Animatable.View
            animation="zoomInDown"
            iterationCount={1}
            direction="alternate"
            easing="ease-in-sine"
            duration={1800}
            delay={1300}>
            <Text bold>or</Text>
          </Animatable.View>
          <Animatable.View
            animation="zoomInDown"
            iterationCount={1}
            direction="alternate"
            easing="ease-in-sine"
            duration={2000}
            delay={1500}>
            <Button
              shadow={5}
              size="md"
              variant="subtle"
              borderRadius={30}
              bg="blue.500"
              w={'32'}
              mt="3"
              onPress={() => {
                navigation.navigate('RegisterFormPage');
              }}>
              Create account
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
/*<Button
            variant="subtle"
            bg="primary.300"
            shadow={5}
            w="80"
            h="90"
            onPress={openGallery}>
            <Center>Upload Image</Center>

            <Image
              shadow={5}
              borderWidth="1"
              borderColor="black"
              w="80"
              h="90"
              source={{uri: galleryPhoto}}
              alt="Alternate Text"
            />
          </Button>*/
