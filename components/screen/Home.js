import {StyleSheet} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import {
  NativeBaseProvider,
  Text,
  Input,
  VStack,
  Button,
  View,
  Image,
} from 'native-base';
const img = require('../assets/images/Car_Sale_App_Icon.png');
export default function Home({navigation}) {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Animatable.View
          animation="pulse"
          iterationCount={1}
          direction="alternate"
          easing="ease-in-sine"
          duration={1000}>
          <View style={styles.container2} mt="25%" shadow={8}>
            <Image source={img} alt="" ml={5} mt={5} />
            <Animatable.View
              animation="zoomInDown"
              delay={500}
              duration={2000}
              iterationCount={1}
              easing="ease">
              <Text fontSize="32" color="black" ml={5}>
                Finally it's easy.
              </Text>
              <Text fontSize="28" color="#6a329f" ml={10} mt={10}>
                Sell Your Car.
              </Text>
            </Animatable.View>
          </View>
        </Animatable.View>
        <Animatable.View
          animation="slideInUp"
          iterationCount={1}
          direction="alternate"
          easing="ease-in-sine"
          duration={1000}>
          <Animatable.View
            animation="pulse"
            iterationCount="infinite"
            direction="alternate"
            easing="ease"
            delay={1500}>
            <View mt="148%" ml="30%">
              <Button
                size="lg"
                variant="subtle"
                bg="primary.300"
                borderRadius="30"
                w={'32'}
                shadow={5}
                onPress={() => {
                  navigation.navigate('LoginPage');
                }}>
                Get Start
              </Button>
            </View>
          </Animatable.View>
        </Animatable.View>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 690,
    width: '100%',
    backgroundColor: '#6fa8dc',
  },
  container2: {
    position: 'absolute',
    left: '10%',
    backgroundColor: '#ede8e8',
    height: 450,
    width: '80%',
    borderRadius: 30,
  },
  container3: {
    position: 'absolute',
  },
  text1: {
    fontSize: '32',
    backgroundColor: 'rgb(248,249,250)',
  },
});
